import './styles.css';

import { useEffect, useMemo, useState } from 'react';

import CodeEditor from '../../components/CodeEditor';
import FlexContainer from '../../components/FlexContainer';
import Header from '../../components/Header';
import Terminal from '../../components/Terminal';
import { useTerminal } from '../../components/Terminal/hooks';
import {
  DEFAULT_PANEL_HEIGHT,
  DEFAULT_PANEL_WIDTH,
} from '../../components/Terminal/types';

function Playground() {
  const { history, pushToHistory, setTerminalRef, resetTerminal } = useTerminal();

  const [w, setW] = useState(DEFAULT_PANEL_WIDTH);
  const [h, setH] = useState(DEFAULT_PANEL_HEIGHT);

  useEffect(() => {
    resetTerminal();
  }, []);

  const commands = useMemo(
    () => ({
      start: async () => {
        pushToHistory(
          <>
            <div>
              <strong>Starting</strong> the server...{' '}
              <span style={{ color: 'green' }}>Done</span>
            </div>
          </>,
        );
      },
      alert: async () => {
        alert('Hello!');
        pushToHistory(
          <>
            <div>
              <strong>Alert</strong>
              <span style={{ color: 'orange', marginLeft: 10 }}>
                <strong>Shown in the browser</strong>
              </span>
            </div>
          </>,
        );
      },
      clear: async () => {
        resetTerminal();
      },
    }),
    [pushToHistory],
  );

  return (
    <div className="playground">
      <Header />
      <FlexContainer>
        <CodeEditor />
      </FlexContainer>
      <Terminal
        history={history}
        ref={setTerminalRef}
        commands={commands}
        width={w}
        height={h}
        onViewChange={(e) => {
          if (e.width && typeof e.width === 'number') {
            setW(e.width || w);
          }

          if (e.height && typeof e.height === 'number') {
            setH(e.height || h);
          }
        }}
      />
    </div>
  );
}

export default Playground;

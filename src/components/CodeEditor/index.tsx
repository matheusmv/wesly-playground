import './styles.css';

import { Editor, EditorProps } from '@monaco-editor/react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store';
import { sourceCodeChange } from '../../store/editor/reducer';
import { LANGUAGE } from './utils';

const options: EditorProps['options'] = {
  autoIndent: 'full',
  contextmenu: true,
  fontFamily: 'monospace',
  fontSize: 16,
  lineHeight: 24,
  hideCursorInOverviewRuler: true,
  matchBrackets: 'always',
  minimap: {
    enabled: true,
  },
  scrollbar: {
    horizontalSliderSize: 4,
    verticalSliderSize: 18,
  },
  selectOnLineNumbers: true,
  roundedSelection: false,
  readOnly: false,
  cursorStyle: 'line',
  automaticLayout: true,
};

function CodeEditor() {
  const dispatch = useDispatch();

  const { sourceCode } = useSelector((state: RootState) => state.editorReducer);

  const handleSourceCodeChange = (value: string | undefined, _ev: any) => {
    if (value) {
      dispatch(sourceCodeChange(value));
    }
  };

  return (
    <Editor
      language={LANGUAGE}
      value={sourceCode}
      options={options}
      theme={'vs-dark'}
      onChange={handleSourceCodeChange}
    />
  );
}

export default CodeEditor;

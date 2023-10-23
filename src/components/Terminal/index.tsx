/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './styles.css';

import { useTheme } from '@fluentui/react';
import clsx from 'clsx';
import { Resizable } from 're-resizable';
import {
  ChangeEvent,
  ForwardedRef,
  forwardRef,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  DEFAULT_PANEL_HEIGHT,
  DEFAULT_PANEL_WIDTH,
  LayoutType,
  TerminalProps,
} from './types';

const MIN_HEIGHT = 36;
const MIN_WIDTH = 120;
const handleClasses = {
  top: 'resizable-preview__handle--top',
  left: 'resizable-preview__handle--left',
};

export const Terminal = forwardRef(function Terminal(
  props: TerminalProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const {
    history = [],
    promptLabel = '>',
    commands = {},
    layout = LayoutType.Vertical,
    height = DEFAULT_PANEL_HEIGHT,
    width = DEFAULT_PANEL_WIDTH,
    collapsed,
    onViewChange,
  } = props;

  const {
    palette: { accent },
    semanticColors: { buttonBorder },
  } = useTheme();

  const inputRef = useRef<HTMLInputElement>();
  const [input, setInputValue] = useState<string>('');

  /**
   * Focus on the input whenever we render the terminal or click in the terminal
   */
  useEffect(() => {
    inputRef.current?.focus();
  });

  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  /**
   * When user types something, we update the input value
   */
  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  /**
   * When user presses enter, we execute the command
   */
  const handleInputKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        const commandToExecute = commands?.[input.toLowerCase()];
        if (commandToExecute) {
          commandToExecute?.();
        }
        setInputValue('');
      }
    },
    [commands, input],
  );

  const onResize = useCallback(
    (_e, _direction, _ref, size) => {
      switch (layout) {
        case LayoutType.Vertical:
          onViewChange?.({ height: height + size.height });
          return;
        case LayoutType.Horizontal:
          onViewChange?.({ width: width + size.width });
          return;
        default:
          return;
      }
    },
    [height, width, layout, onViewChange],
  );

  const size = {
    height: layout === LayoutType.Vertical ? height : '100%',
    width: layout === LayoutType.Horizontal ? width : '100%',
  };

  const enabledCorners = {
    top: !collapsed && layout === LayoutType.Vertical,
    right: false,
    bottom: false,
    left: !collapsed && layout === LayoutType.Horizontal,
    topRight: false,
    bottomRight: false,
    bottomLeft: false,
    topLeft: false,
  };

  const isCollapsed = collapsed && layout === LayoutType.Vertical;

  return (
    <Resizable
      className={clsx(
        'resizable-preview',
        isCollapsed && 'resizable-preview--collapsed',
        `resizable-preview--${layout}`,
      )}
      handleClasses={handleClasses}
      size={size}
      enable={enabledCorners}
      onResizeStop={onResize}
      minHeight={MIN_HEIGHT}
      minWidth={MIN_WIDTH}
      style={
        {
          '--pg-handle-active-color': accent,
          '--pg-handle-default-color': buttonBorder,
        } as any
      }
    >
      <div className="terminal" ref={ref} onClick={focusInput}>
        {history.map((line, index) => (
          <div className="terminal__line" key={`terminal-line-${index}-${line}`}>
            {line}
          </div>
        ))}
        <div className="terminal__prompt">
          <div className="terminal__prompt__label">{promptLabel}</div>
          <div className="terminal__prompt__input">
            <input
              type="text"
              value={input}
              onKeyDown={handleInputKeyDown}
              onChange={handleInputChange}
              // @ts-ignore
              ref={inputRef}
            />
          </div>
        </div>
      </div>
    </Resizable>
  );
});

export default Terminal;

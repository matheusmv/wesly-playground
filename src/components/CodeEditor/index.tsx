import './styles.css';

import { Editor, EditorProps } from '@monaco-editor/react';

import { DEMO, LANGUAGE } from './utils';

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
  return <Editor language={LANGUAGE} value={DEMO} options={options} theme={'vs-dark'} />;
}

export default CodeEditor;

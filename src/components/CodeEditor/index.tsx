import './styles.css';

import { Editor, EditorProps } from '@monaco-editor/react';
import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';

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
  const [code, setCode] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [language, setLanguage] = useState<string>('javascript');
  const [theme, setTheme] = useState('vs-dark');

  const toggleTheme = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTheme((prev) => (prev === 'vs-dark' ? 'vs-light' : 'vs-dark'));
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
    }
  };

  useEffect(() => {
    if (file) {
      const reader = new FileReader();

      reader.onload = async (e) => {
        if (typeof e.target?.result === 'string') {
          setCode(e.target.result);
        }
      };

      reader.readAsText(file);

      let newLanguage = 'javascript';
      const extension = file.name.split('.').pop();

      if (extension && ['css', 'html', 'python', 'dart'].includes(extension)) {
        newLanguage = extension;
      }

      setLanguage(newLanguage);
    }
  }, [file]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <div>
        <button onClick={toggleTheme} type="button">
          {theme === 'vs-dark' ? 'Light' : 'Dark'}
        </button>
        <input style={{ color: '#fff' }} type="file" onChange={handleFileChange} />
      </div>
      <Editor language={language} value={code} options={options} theme={theme} />
    </div>
  );
}

export default CodeEditor;

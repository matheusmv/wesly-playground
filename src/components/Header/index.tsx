import './styles.css';

import { CommandBar, ICommandBarItemProps } from '@fluentui/react';
import { useState } from 'react';

type HeaderProps = {
  onThemeSelection?: (theme: string) => void;
};

function Header({ onThemeSelection }: HeaderProps) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const items: ICommandBarItemProps[] = [
    {
      key: 'addFile',
      text: 'Add File',
      onClick: () => {
        // Lógica para adicionar um arquivo
      },
    },
    {
      key: 'runCode',
      text: 'Run Code',
      onClick: () => {
        // Lógica para executar o código
      },
    },
    {
      key: 'setTheme',
      text: darkMode ? 'Light' : 'Dark',
      onClick: () => {
        toggleDarkMode();
        onThemeSelection?.(darkMode ? 'vs-light' : 'vs-dark');
      },
    },
  ];

  return (
    <div>
      <CommandBar items={items} />
    </div>
  );
}

export default Header;

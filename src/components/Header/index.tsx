import './styles.css';

import { CommandBar, ICommandBarItemProps } from '@fluentui/react';

function Header() {
  const leftItems: ICommandBarItemProps[] = [
    {
      key: 'openFile',
      text: 'Abrir Arquivo',
      split: true,
      iconProps: { iconName: 'OpenFIle' },
      onClick: () => {
        // Lógica para adicionar um arquivo
      },
    },
    {
      key: 'runCode',
      text: 'Executar',
      ariaLabel: 'Run program (Ctrl+Enter)',
      title: 'Run program (Ctrl+Enter)',
      iconProps: { iconName: 'Play' },
      onClick: () => {
        // Lógica para executar o código
      },
    },
    {
      key: 'topCode',
      text: 'Encerrar',
      ariaLabel: 'Stop program (Ctrl+d)',
      title: 'Stop program (Ctrl+d)',
      iconProps: { iconName: 'Stop' },
      onClick: () => {
        // Lógica para executar o código
      },
    },
    {
      key: 'download',
      text: 'Baixar Arquivo',
      iconProps: { iconName: 'Download' },
      onClick: () => {
        // Lógica para baixar o arquivo
      },
    },
    {
      key: 'settings',
      text: 'Configurações',
      ariaLabel: 'Configurações',
      iconProps: { iconName: 'Settings' },
      onClick: () => {
        // Lógica para abrir o menu de configurações
      },
    },
  ];

  return (
    <header className="header">
      <CommandBar className="header-command-bar" items={leftItems} />
    </header>
  );
}

export default Header;

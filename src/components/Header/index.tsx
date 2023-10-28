import './styles.css';

import { CommandBar, ICommandBarItemProps } from '@fluentui/react';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';
import { weslyWorker } from '../../workers';
import { useTerminal } from '../Terminal/hooks';

function Header() {
  const { sourceCode } = useSelector((state: RootState) => state.editorReducer);

  const { pushToHistory, resetTerminal } = useTerminal();

  const workerCall = useCallback(async () => {
    const results = await weslyWorker.run(sourceCode);
    resetTerminal();
    results.forEach((result) => pushToHistory(result));
  }, [sourceCode]);

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
        workerCall();
      },
    },
    {
      key: 'topCode',
      text: 'Encerrar',
      ariaLabel: 'Stop program (Ctrl+d)',
      title: 'Stop program (Ctrl+d)',
      iconProps: { iconName: 'Stop' },
      onClick: async () => {
        // Lógica para encerrar a execução
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

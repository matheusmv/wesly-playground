import { ReactNode } from 'react';

export type TerminalHistoryItem = ReactNode | string;
export type TerminalHistory = TerminalHistoryItem[];
export type TerminalPushToHistoryWithDelayProps = {
  content: TerminalHistoryItem;
  delay?: number;
};

export type TerminalCommands = {
  [command: string]: () => void;
};

export type TerminalLayout = {
  layout?: LayoutType;
  collapsed?: boolean;
  height?: string | number;
  width?: string | number;
};

export type TerminalProps = TerminalLayout & {
  history: TerminalHistory;
  promptLabel?: TerminalHistoryItem;
  commands: TerminalCommands;
  onViewChange?: (changes: TerminalLayout) => void;
};

export enum LayoutType {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}

export const DEFAULT_PANEL_HEIGHT = 300;
export const DEFAULT_PANEL_WIDTH = 320;
export const DEFAULT_PANEL_LAYOUT = LayoutType.Vertical;

export const defaultPanelProps = {
  height: DEFAULT_PANEL_HEIGHT,
  width: DEFAULT_PANEL_WIDTH,
  layout: DEFAULT_PANEL_LAYOUT,
};

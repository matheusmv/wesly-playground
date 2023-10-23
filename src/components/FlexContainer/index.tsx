import './styles.css';

import { PropsWithChildren } from 'react';

function FlexContainer({ children }: PropsWithChildren) {
  return (
    <div style={{ background: '#282828', flex: '1 1', overflow: 'hidden' }}>
      {children}
    </div>
  );
}

export default FlexContainer;

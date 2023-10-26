import React from 'react';
import { createWm, createWmSingle } from 'watermark';
import styles from './index.module.less';
import './App.less';

export interface OpenAppProps { }

const App: React.FunctionComponent<OpenAppProps> = () => {
  const hiddenRef = React.useRef<any>(null);

  const clearWM = () => {
    hiddenRef.current?.();
  }

  return (
    <div className={styles.btn_area}>
      <button
        className={styles.btn}
        onClick={() => {
          clearWM();
          hiddenRef.current = createWmSingle({
            text: 'single 1999'
          });
        }}
      >
        single watermark
      </button>
      <button
        className={styles.btn}
        onClick={() => {
          clearWM();
          hiddenRef.current = createWm({
            text: 'repeat 1999',
            repeat: 5,
          });
        }}
      >
        repeat watermark (5)
      </button>
      <button
        className={styles.btn}
        onClick={clearWM}
      >
        remove watermark
      </button>
    </div>
  );
};

export default App;

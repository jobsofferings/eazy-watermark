import React from 'react';
import { createWm, createWmSingle } from 'watermark';
import styles from './index.module.less';
import './App.less';

export interface OpenAppProps { }

const App: React.FunctionComponent<OpenAppProps> = () => {
  const hiddenRef = React.useRef<any>(null);

  return (
    <div className={styles.btn_area}>
      <button
        className={styles.btn}
        onClick={() => {
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
          hiddenRef.current = createWm({
            text: 'repeat 1999',
            repeat: 5,
          });
        }}
      >
        repeat watermark
      </button>
      <button
        className={styles.btn}
        onClick={() => {
          console.log(hiddenRef.current);
          hiddenRef.current?.();
        }}
      >
        remove watermark
      </button>
    </div>
  );
};

export default App;

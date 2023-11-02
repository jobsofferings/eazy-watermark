import React from 'react';
import { createWm, createWmSingle, createImageWm } from 'watermark';
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
        onClick={() => {
          clearWM();
          createImageWm({
            image: 'https://p26-passport.byteacctimg.com/img/user-avatar/ad3381e4ebb759a50f890c5fa0e2f440~300x300.awebp',
          }).then((destroy: any) => {
            hiddenRef.current = destroy
          })
        }}
      >
        image watermark
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

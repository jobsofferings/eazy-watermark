import React from 'react';
import { createWaterMark } from 'watermark';
import styles from './index.module.less';
import './App.less';

export interface OpenAppProps { }

const App: React.FunctionComponent<OpenAppProps> = (props) => {
  const hiddenRef = React.useRef<any>(null);

  return (
    <div className={styles.btn_area}>
      <button
         className={styles.btn}
        onClick={() => {
          hiddenRef.current = createWaterMark({
            phone: '12312341234',
            name: 'jobsofferings',
          });
        }}
      >
        basic watermark
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

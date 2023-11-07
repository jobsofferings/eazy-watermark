import React from 'react';
import { createWmSingle } from '../../src/index';
import styles from '../styles/index.module.less';

interface CreateWmSingleProps {

}

const CreateWmSingle = ({ }: CreateWmSingleProps) => {

  const hiddenRef = React.useRef<any>(null);

  const clearWM = () => {
    hiddenRef.current?.();
  }

  return (
    <div className={styles.btn_area}>
      <button
        className={styles.btn}
        onClick={() => {
          clearWM()
          hiddenRef.current = createWmSingle({
            text: 'Single Watermark'
          });
        }}
      >
        Single Watermark
      </button>
      <button
        className={styles.btn}
        onClick={clearWM}
      >
        Remove
      </button>
    </div>
  )
}

export default CreateWmSingle;
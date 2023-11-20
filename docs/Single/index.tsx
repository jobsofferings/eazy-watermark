import React from 'react';
import { createWmSingle } from '../../src/index';
import '../styles/index.less';

interface CreateWmSingleProps {

}

const CreateWmSingle = ({ }: CreateWmSingleProps) => {

  const hiddenRef = React.useRef<any>(null);

  const clearWM = () => {
    hiddenRef.current?.();
  }

  return (
    <div className='button-area'>
      <button
        className='button'
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
        className='button'
        onClick={clearWM}
      >
        Remove
      </button>
    </div>
  )
}

export default CreateWmSingle;
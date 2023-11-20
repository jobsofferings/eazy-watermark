import React from 'react';
import { createImageWm } from '../../src/index';
import '../styles/index.less';

const CreateImageWm = () => {

  const hiddenRef = React.useRef<any>(null);

  const clearWM = () => {
    hiddenRef.current?.();
  }

  return (
    <div className='button-area'>
      <button
        className='button'
        onClick={async () => {
          clearWM()
          hiddenRef.current = await createImageWm({
            image: 'https://p26-passport.byteacctimg.com/img/user-avatar/ad3381e4ebb759a50f890c5fa0e2f440~300x300.awebp',
          })
        }}
      >
        Image Watermark
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

export default CreateImageWm;
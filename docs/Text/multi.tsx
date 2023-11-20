import React from 'react';
import { createWm, createWmSingle, removeAll } from '../../src/index';
import '../styles/index.less';

const CreateWmSingleMulti = () => {

  return (
    <div className='button-area'>
      <button
        className='button'
        onClick={() => {
          createWm({
            text: 'First',
            width: 100,
            height: 100,
          });
        }}
      >
        First Watermark
      </button>
      <button
        className='button'
        onClick={() => {
          createWm({
            text: 'Second',
            width: 200,
            height: 200,
          });
        }}
      >
        Second Watermark
      </button>
      <button
        className='button'
        onClick={() => {
          createWm({
            text: 'Third',
            width: 300,
            height: 300,
          });
        }}
      >
        Third Watermark
      </button>
      <button
        className='button'
        onClick={removeAll}
      >
        Remove All
      </button>
    </div>
  )
}

export default CreateWmSingleMulti;
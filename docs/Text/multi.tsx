import React from 'react';
import { createWm, removeAll } from '../../src/index';
import { Button, Space } from 'antd';
import '../styles/index.less';

const CreateWmSingleMulti = () => {

  return (
    <Space>
      <Button
        onClick={() => {
          createWm({
            text: 'First',
          });
        }}
      >
        First Watermark
      </Button>
      <Button
        onClick={() => {
          createWm({
            text: 'Second',
            width: 200,
            height: 200,
          });
        }}
      >
        Second Watermark
      </Button>
      <Button
        onClick={() => {
          createWm({
            text: 'Third',
            width: 100,
            height: 100,
          });
        }}
      >
        Third Watermark
      </Button>
      <Button
        type='primary'
        onClick={removeAll}
      >
        Remove All
      </Button>
    </Space>
  )
}

export default CreateWmSingleMulti;
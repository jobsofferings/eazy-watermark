import React, { Fragment, useState } from 'react';
import { createWmSingle, DefaultCreateWmProps } from '../../src/index';
import { Button, Input, Row, Slider, Space } from 'antd';
import '../styles/index.less';

const CreateWmSingle = () => {

  const hiddenRef = React.useRef<any>(null);
  const [params, setParams] = useState<DefaultCreateWmProps>({
    text: 'Single',
    opacity: 0.3,
  })

  const clearWM = () => {
    if (hiddenRef.current && typeof hiddenRef.current === 'function') {
      hiddenRef.current?.();
    }
    hiddenRef.current = null;
  }

  return (
    <Fragment>
      <Space>
        <Button
          onClick={async () => {
            clearWM()
            hiddenRef.current = createWmSingle(params);
          }}
        >
          Single Watermark
        </Button>
        <Button
          type='primary'
          onClick={clearWM}
        >
          Remove
        </Button>
      </Space>
      <Row align='middle' style={{ marginTop: 16 }}>
        <div style={{ fontWeight: 'bold', marginRight: 16 }}>Text: </div>
        <Input
          style={{ width: 200 }}
          value={params.text}
          onChange={(e) => {
            const paramsFormated = {
              ...params,
              text: e.target.value
            }
            if (hiddenRef.current) {
              clearWM()
              hiddenRef.current = createWmSingle(paramsFormated)
            }
            setParams(paramsFormated)
          }}
        />
      </Row>
      <Row align='middle' style={{ marginTop: 16 }}>
        <div style={{ fontWeight: 'bold', marginRight: 16 }}>Opacity Rate: </div>
        <Slider
          style={{ width: 200 }}
          value={params.opacity ? params.opacity * 100 : 30}
          onChange={async (value) => {
            const paramsFormated = {
              ...params,
              opacity: value / 100,
            }
            if (hiddenRef.current) {
              clearWM()
              hiddenRef.current = await createWmSingle(paramsFormated)
            }
            setParams(paramsFormated)
          }}
          tooltip={{
            formatter(value) {
              return `${value}%`
            }
          }}
        />
      </Row>
    </Fragment>
  )
}

export default CreateWmSingle;
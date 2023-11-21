import React, { Fragment, useState } from 'react';
import { createImageWm } from '../../src/index';
import { Button, Row, Slider, Space } from 'antd';
import '../styles/index.less';

const CreateImageWm = () => {

  const hiddenRef = React.useRef<any>(null);
  const [slider, setSlider] = useState(30)

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
            hiddenRef.current = await createImageWm({
              image: 'https://p26-passport.byteacctimg.com/img/user-avatar/ad3381e4ebb759a50f890c5fa0e2f440~300x300.awebp',
              opacity: slider / 100,
            })
          }}
        >
          Image Watermark
        </Button>
        <Button
          type='primary'
          onClick={clearWM}
        >
          Remove
        </Button>
      </Space>
      <Row align='middle' style={{ marginTop: 32 }}>
        <div style={{ fontWeight: 'bold' }}>opacity rate: </div>
        <Slider
          style={{ width: 200 }}
          value={slider}
          onChange={async (value) => {
            if (hiddenRef.current) {
              clearWM()
              hiddenRef.current = await createImageWm({
                image: 'https://p26-passport.byteacctimg.com/img/user-avatar/ad3381e4ebb759a50f890c5fa0e2f440~300x300.awebp',
                opacity: value / 100,
              })
            }
            setSlider(value)
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

export default CreateImageWm;
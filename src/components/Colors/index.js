import React from 'react';
import Row from "../layout/Row";

const Colors = () => {
  return <Row title="Colors">
      <div className="App-flexbox">
        <div className="App-color-box">
          <div className="App-color-circle bg-grey" />
          <div className="App-color-description">
            <h5 className="App-featured-ctas">Background Grey</h5>
            <p>#F3F2F2</p>
            <p>rgba(360, 0, 95, 1)</p>
          </div>
        </div>
        <div className="App-color-box">
          <div className="App-color-circle title-grey" />
          <div className="App-color-description">
            <h5 className="App-featured-ctas">Title Grey</h5>
            <p>#434343</p>
            <p>rgba(0, 0, 26, 1)</p>
          </div>
        </div>
        <div className="App-color-box">
          <div className="App-color-circle light-text-grey" />
          <div className="App-color-description">
            <h5 className="App-featured-ctas">Light Text Grey</h5>
            <p>#7D7C7C</p>
            <p>rgba(360, 1, 49, 1)</p>
          </div>
        </div>
        <div className="App-color-box">
          <div className="App-color-circle highlight-purple" />
          <div className="App-color-description">
            <h5 className="App-featured-ctas">Highlight Purple</h5>
            <p>#AD619D</p>
            <p>rgba(313, 34, 68, 1)</p>
          </div>
        </div>
        <div className="App-color-box">
          <div className="App-color-circle cta-green" />
          <div className="App-color-description">
            <h5 className="App-featured-ctas">CTA Green</h5>
            <p>#61A60D</p>
            <p>rgba(87, 92, 65, 1)</p>
          </div>
        </div>
        <div className="App-color-box">
          <div className="App-color-circle image-overlay-grey" />
          <div className="App-color-description">
            <h5 className="App-featured-ctas">Image Overlay Grey</h5>
            <p>#2D2C2C</p>
            <p>rgba(360, 2, 18, 75)</p>
          </div>
        </div>
      </div>
    </Row>;
}

export default Colors;
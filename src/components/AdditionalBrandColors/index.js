import React from "react";
import Row from "../layout/Row";

const AdditionalBrandColors = () => {
  return (
    <Row title="Additional Brand Colors">
      <div className="App-flexbox">
        <div className="App-color-box">
          <div className="App-color-circle pink" />
          <div className="App-color-description">
            <h5 className="App-featured-ctas">Pink</h5>
            <p>#DD4E75</p>
            <p>rgba(344, 65, 87, 1)</p>
          </div>
        </div>
        <div className="App-color-box">
          <div className="App-color-circle beige" />
          <div className="App-color-description">
            <h5 className="App-featured-ctas">Beige</h5>
            <p>#F3DBB7</p>
            <p>rgba(244, 219, 184, 1)</p>
          </div>
        </div>
        <div className="App-color-box">
          <div className="App-color-circle purple-two" />
          <div className="App-color-description">
            <h5 className="App-featured-ctas">Purple 2</h5>
            <p>#9D4976</p>
            <p>rgba(328, 54, 62, 1)</p>
          </div>
        </div>
      </div>
    </Row>
  );
};

export default AdditionalBrandColors;

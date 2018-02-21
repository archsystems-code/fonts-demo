import React from 'react';
import Row from '../layout/Row';
import Padding from '../layout/Padding';
import Button from './Button';

const CallsToAction = () => {
  return <Row title="Calls to Action">
      <Padding amount="15px 0 0 0">
        <div className="App-flexbox">
          <div className="App-half">
            <Padding amount="20px 0 0 0">
              <div className="App-flexbox">
                <div className="App-half">
                  <Button text="Discover the collection" color="white" backgroundColor="#61A60D" borderColor="#61A60D" />
                </div>
                <div className="App-half">
                  <h5 className="App-featured-ctas">Primary Button</h5>
                  <p>Background: #61A60D</p>
                  <p>Text Color: #ffffff</p>
                </div>
              </div>
              <div className="App-flexbox">
                <div className="App-half">
                  <Button text="Discover the collection" color="#61A60D" backgroundColor="white" borderColor="#61A60D" />
                </div>
                <div className="App-half">
                  <h5 className="App-featured-ctas">Primary Button Hover</h5>
                  <p>2px solid border: #61A60D</p>
                  <p>Text Color: #61A60D</p>
                </div>
              </div>
            </Padding>
          </div>
          <div className="App-half dark">
            <Padding amount="20px">
              <div className="App-flexbox">
                <div className="App-half">
                  <Button text="Discover the new collection" color="white" backgroundColor="transparent" borderColor="white" />
                </div>
                <div className="App-half">
                  <Padding amount="0 0 0 20px">
                    <h5 className="App-featured-ctas">
                      Primary Button Outline
                    </h5>
                    <p>2px solid border: #ffffff</p>
                    <p>Text Color: #ffffff</p>
                  </Padding>
                </div>
              </div>
              <div className="App-flexbox">
                <div className="App-half">
                  <Button text="Discover the new collection" color="#61A60D" backgroundColor="white" borderColor="white" />
                </div>
                <div className="App-half">
                  <Padding amount="0 0 0 20px">
                    <h5 className="App-featured-ctas">
                      Primary Button Hover
                    </h5>
                    <p>Background: #ffffff</p>
                    <p>Text Color: #61A60D</p>
                  </Padding>
                </div>
              </div>
            </Padding>
          </div>
          <Padding className="App-half" amount="50px 0 0 0">
            <div className="App-flexbox">
              <div className="App-half">
                <h5 className="App-featured-ctas">BROWSE ALL VINYL RUGS</h5>
              </div>
              <div className="App-half">
                <h5 className="App-featured-ctas">Text Call To Action</h5>
                <p>Text Color: #434343</p>
                <p>Text padding-right: 10px</p>
              </div>
            </div>
            <div className="App-flexbox">
              <div className="App-half">
                <h5 className="App-featured-ctas text-green">
                  BROWSE ALL VINYL RUGS
                </h5>
              </div>
              <div className="App-half">
                <h5 className="App-featured-ctas">Text Hover</h5>
                <p>Text Color: #61A60D</p>
                <p>Text padding-right: 30px</p>
              </div>
            </div>
          </Padding>
          <Padding className="App-half" amount="30px 0 0 0">
            <div className="dark">
              <Padding amount="20px">
                <div className="App-flexbox">
                  <div className="App-half">
                    <h5 className="App-featured-ctas text-white">
                      BROWSE ALL VINYL RUGS
                    </h5>
                  </div>
                  <div className="App-half">
                    <Padding amount="0 0 0 20px">
                      <h5 className="App-featured-ctas">
                        Text Call To Action
                      </h5>
                      <p>Text Color: #ffffff</p>
                      <p>Text padding-right: 10px</p>
                    </Padding>
                  </div>
                </div>
                <div className="App-flexbox">
                  <div className="App-half">
                    <h5 className="App-featured-ctas text-white">
                      BROWSE ALL VINYL RUGS
                    </h5>
                  </div>
                  <div className="App-half">
                    <Padding amount="0 0 0 20px">
                      <h5 className="App-featured-ctas">Text Hover</h5>
                      <p>Text Color: #ffffff</p>
                      <p>Text padding-right: 30px</p>
                    </Padding>
                  </div>
                </div>
              </Padding>
            </div>
          </Padding>
        </div>
      </Padding>
    </Row>;
}
 
export default CallsToAction;
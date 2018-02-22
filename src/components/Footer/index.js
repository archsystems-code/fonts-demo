import React from 'react';
import Row from '../layout/Row';
import Grid from '../layout/Grid';
import Padding from '../layout/Padding';
import Button from '../CallsToAction/Button';
import FaTwitter from "react-icons/lib/fa/twitter";
import FaFacebook from "react-icons/lib/fa/facebook";
import FaPinterestP from "react-icons/lib/fa/pinterest-p";
import FaLinkedin from "react-icons/lib/fa/linkedin";
import FaYoutube from "react-icons/lib/fa/youtube";
import FaInstagram from "react-icons/lib/fa/instagram";
import MdChat from "react-icons/lib/md/chat";
import MdApps from "react-icons/lib/md/apps";
import FaFileImageO from "react-icons/lib/fa/file-image-o";

const Footer = () => {
  return <React.Fragment>
    <Grid>
      <Row title="Footer" />
    </Grid>
    <footer>
      <div className="App-purple">
        <Grid>
          <Padding amount="30px 0">
            <div className="App-flexbox App-footer-container">
              <div className="App-footer-text">
                <h1 className="App-title"><span className="text-bold">Sign-Up</span><span className="text-light"> To Stay In The Know </span></h1>
                <p>Get the latest materials, projects and the Next New Thing™</p>
              </div>
              <div className="App-footer-inputs App-flexbox">
                <input type="email" placeholder="Enter your email address" />
                <input type="text" placeholder="Company Name" />
                <Button color="white" backgroundColor="transparent" borderColor="white" text="SUBSCRIBE" />
              </div>
            </div>
          </Padding>
        </Grid>
      </div>
      <Grid>
        <div className="App-social-icons">
          <Padding amount="30px">
            <h5 className="App-featured-ctas">FOLLOW. TAG. SHARE</h5>
            <div className="App-flexbox">
              <Padding amount="10px">
                <span className="App-social-icon-box"><FaTwitter /></span>
                <span className="App-social-icon-box"><FaFacebook /></span>
                <span className="App-social-icon-box"><FaPinterestP /></span>
                <span className="App-social-icon-box"><FaLinkedin /></span>
                <span className="App-social-icon-box"><FaYoutube /></span>
                <span className="App-social-icon-box"><FaInstagram /></span>
                <span className="App-social-icon-box"><strong>blog</strong></span>
              </Padding>
            </div>
          </Padding>
        </div>
      </Grid>
      <hr/>
      <Grid>
        <div className="App-flexbox">
          <div className="App-third">
            <Padding amount="20px 0">
              <div className="App-flexbox">
                <MdChat className="App-footer-icons" />
                <div className="App-callout-text">
                  <h5 className="App-featured-ctas text-green">CONTACT US</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>  
              </div>
            </Padding>
          </div>
          <div className="App-third">
            <Padding amount="20px 0">
              <div className="App-flexbox">
                <MdApps className="App-footer-icons" />
                <div className="App-callout-text">
                  <h5 className="App-featured-ctas text-green">LEARN ABOUT SAMPLES</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div> 
              </div>
            </Padding>
          </div>
          <div className="App-third">
            <Padding amount="20px 0">
              <div className="App-flexbox">
                <FaFileImageO className="App-footer-icons" />
                <div className="App-callout-text">
                  <h5 className="App-featured-ctas text-green">LEARN ABOUT PROJECT BOARDS</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div> 
              </div>
            </Padding>
          </div>
        </div>
      </Grid>
      <hr/>
      <p class="text-center">Architectural Systems, Inc. 150 W. 25th Street Eigth Floor New York, NY 10001 | © 2018 Architectural Systems Inc.</p>
    </footer>
  </React.Fragment>
}
 
export default Footer;
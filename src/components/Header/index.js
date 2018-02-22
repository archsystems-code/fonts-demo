import React from 'react';
import Grid from '../layout/Grid';
import Row from '../layout/Row';
import logo from './logo.svg';
import FaSearch from "react-icons/lib/fa/search";
import MdShoppingCart from "react-icons/lib/md/shopping-cart";
import TiUser from "react-icons/lib/ti/user";
import MdMenu from "react-icons/lib/md/menu";
import FaShoppingBag from "react-icons/lib/fa/shopping-bag";
import FaFileImageO from "react-icons/lib/fa/file-image-o";
import FaNewspaperO from "react-icons/lib/fa/newspaper-o";

const Header = () => {
  return <React.Fragment>
      <Grid>
        <Row title="Header" />
      </Grid>
      <header className="App-header-example">
        <img className="App-logo" src={logo} alt="ASI | Architectural Systems, Inc." />
        <FaSearch className="App-searchbar-logo" />
        <input className="App-searchbar" type="text" placeholder="Search Materials, Projects & More..." />
        <MdShoppingCart className="App-shopping-cart-logo" />
        <TiUser className="App-profile-logo" />
        <h4 className="App-subtitle my-asi"> My ASI </h4>
        <span className="App-header-divider" />
        <MdMenu className="App-menu" />
        <div className="App-secondary-nav">
          <FaShoppingBag className="App-secondary-nav-logo" />
          <h5 className="App-featured-ctas App-secondary-nav-text-cta">Browse ASI Materials </h5>
          <FaFileImageO className="App-secondary-nav-logo" />
          <h5 className="App-featured-ctas App-secondary-nav-text-cta">Project Studio</h5>
          <FaNewspaperO className="App-secondary-nav-logo" />
          <h5 className="App-featured-ctas App-secondary-nav-text-cta">Community </h5>
        </div>
      </header>
    </React.Fragment>;
}
 
export default Header;
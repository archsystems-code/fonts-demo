import React from 'react';
import Grid from '../layout/Grid';
import Row from '../layout/Row';
import logo from './logo.svg';
import FaSearch from "react-icons/lib/fa/search";
import MdShoppingCart from "react-icons/lib/md/shopping-cart";
import TiUser from "react-icons/lib/ti/user";
import MdMenu from "react-icons/lib/md/menu";

const HeaderSticky = () => {
  return <React.Fragment>
      <Grid>
        <Row title="Header - Sticky" />
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
      </header>
    </React.Fragment>;
}
 
export default HeaderSticky;
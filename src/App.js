import React from 'react';
import Grid from './components/layout/Grid';
import GlobalIcons from './components/GlobalIcons/index';
import FeaturedIcons from './components/FeaturedIcons/index';
import Colors from './components/Colors/index';
import AdditionalBrandColors from './components/AdditionalBrandColors/index';
import CallsToAction from './components/CallsToAction/index';
import Fonts from './components/Fonts/index';
import GridComponent from './components/GridComponent/index';
import ListElements from './components/ListElements/index';
import Header from './components/Header/index';
import HeaderSticky from './components/HeaderSticky/index';
import Footer from './components/Footer/index';
import './App.css';

const App = () => {
  return <div className="App">
      <header className="App-header">
        <Grid>
          <h1 className="App-title">Architectural Systems, Inc.</h1>
          <h4 className="App-subtitle">Web Style Guide</h4>
        </Grid>
      </header>
      <Grid>
        <GlobalIcons />
        <FeaturedIcons />
        <Colors />
        <AdditionalBrandColors />
        <CallsToAction />
        <Fonts />
        <GridComponent />
        <ListElements />
      </Grid>
      <Header />
      <HeaderSticky />
      <Footer />
  </div>;
}

export default App;

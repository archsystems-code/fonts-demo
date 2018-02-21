import React from 'react';
import Grid from '../layout/Grid';
import Row from '../layout/Row';

const Header = () => {
  return (
    <React.Fragment>
      <Grid>
        <Row title="Header" />
      </Grid>
      <p>Full page header here</p>
    </React.Fragment>
  );
}
 
export default Header;
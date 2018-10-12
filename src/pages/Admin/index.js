import React from 'react';
import { Route } from 'react-router-dom';
import RegularTables from './RegularTables';

const Admins = ({match}) => (
  <div className="content">
    <Route path={`${match.url}/regular-tables`} component={RegularTables} />
    <Route path={`${match.url}/extended-tables`} component={ExtendedTables} />
    <Route path={`${match.url}/react-bootstrap-table`} component={ReactBootstrapTable} />
  </div>
);

export default Admins;
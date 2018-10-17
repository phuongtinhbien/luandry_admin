import React,{ Fragment } from 'react';
import { Route } from 'react-router-dom';
import ClothCategory from './ClothCategory';
import ListCloth from './Clothes';
import Dryer from './Dryer';
import Washer from './Washer';
import UnitPrice from './UnitPrice';

const GeneralManagement = ({match}) => (

    <div className="content">
        <Route path={`${match.url}/cloth-category`} component={ClothCategory} />
        <Route path={`${match.url}/cloth-list`} component={ListCloth} />
        <Route path={`${match.url}/dryer-list`} component={Dryer} />
        <Route path={`${match.url}/washer-list`} component={Washer} />
        <Route path={`${match.url}/unitprice-list`} component={UnitPrice} />
    </div>
);

export default GeneralManagement;
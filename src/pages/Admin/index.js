import React from 'react';
import { Route } from 'react-router-dom';
import GeneralManagement from './GeneralManagement';
import ServiceManagement from './ServiceManagement';
import CreateService from './ServiceManagement/CreateServiceManagement';

const Admins = ({match}) => (
    <div className="content">
        <Route path={`${match.url}/general-management`} component={GeneralManagement} />
        <Route path={`${match.url}/service-management`} component={ServiceManagement} />
        <Route path={`${match.url}/service-create`} component={CreateService} />
    </div>
    
);

export default Admins;
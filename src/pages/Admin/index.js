import React from 'react';
import { Route,Router } from 'react-router-dom';
import GeneralManagement from './GeneralManagement';

const Admins = ({match}) => (
    <div className="content">
        <Route path={`${match.url}/general-management`} component={GeneralManagement} />
    </div>
    
);

export default Admins;
import React from 'react';
import Component from 'common/component';

import store from 'common/store';
import { Pages } from 'common/constants';
import 'common/style.scss';

import LoginPage from 'login/login-page';
import Dashboard from 'dashboard/dashboard';
import { ChangePage } from './actions';


export default class App extends Component
{
    callbacks()
    {
        this.registerCallback(ChangePage, this.onChangePage);
    }

    render()
    {
        var page = store.getState().page;
        if (page == Pages.Login)
            return <LoginPage/>;
        else
            return <Dashboard/>;
    }

    onChangePage()
    {
        this.forceUpdate(this.upgradeMaterialComponents);
    }

    upgradeMaterialComponents()
    {
        componentHandler.upgradeAllRegistered();
    }
}

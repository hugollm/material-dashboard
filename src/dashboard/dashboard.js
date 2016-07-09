import React from 'react';
import Component from 'common/component';

import store from 'common/store';

import Header from './header';
import Menu from './menu';
import Content from './content';
import './style.scss';


export default class Dashboard extends Component
{
    render()
    {
        return (
            <div className="dashboard mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-drawer">
                <Header/>
                <Menu/>
                <Content/>
            </div>
        );
    }
}

import React from 'react';
import Component from 'common/component';

import store from 'common/store';
import { Pages } from 'common/constants';
import { ChangePage } from 'app/actions';


export default class Menu extends Component
{
    render()
    {
        var page = store.getState().page;
        var usersSelected = page == Pages.ListUsers ? ' selected' : '';

        return <div className="mdl-layout__drawer">
            <span className="mdl-layout-title mdl-color--indigo-500">
                Dashboard
            </span>
            <nav className="mdl-navigation">
                <a className={'mdl-navigation__link' + usersSelected} onClick={this.onClickUsers}>
                    <i className="material-icons">person</i> Users
                </a>
            </nav>
        </div>;
    }

    onClickUsers()
    {
        store.action(ChangePage, Pages.ListUsers);
    }
}

import React from 'react';
import Component from 'common/component';

import store from 'common/store';
import { Pages } from 'common/constants';
import { ChangePage } from 'app/actions';


export default class Header extends Component
{
    render()
    {
        return <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">
                <span className="mdl-layout-title">{this.renderTitle()}</span>
                <div className="mdl-layout-spacer"></div>
                <span>john.doe@gmail.com</span>
                <button id="logout-button" className="mdl-button mdl-js-button mdl-button--icon" onClick={this.onClickLogout}>
                    <i className="material-icons">exit_to_app</i>
                </button>
                <div className="mdl-tooltip" htmlFor="logout-button">Logout</div>
            </div>
        </header>;
    }

    renderTitle()
    {
        var page = store.getState().page;
        if (page == Pages.Home) return 'Home';
        if (page == Pages.ListUsers) return 'Users';
        if (page == Pages.NewUser) return 'Users :: New';
        if (page == Pages.ShowUser) return 'Users :: Show';
        return page + ' (Untitled)';
    }

    onClickLogout()
    {
        store.action(ChangePage, Pages.Login);
    }
}

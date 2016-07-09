import React from 'react';
import Component from 'common/component';

import store from 'common/store';
import { Pages } from 'common/constants';
import { ChangePage } from 'app/actions';

import UserTable from './user-table';


export default class ListUsersPage extends Component
{
    render()
    {
        return <div className="page">
            <div className="page-actions">
                <button className="mdl-button mdl-js-button mdl-button--accent"
                        tabIndex="1" onClick={this.onClickNew}>
                    New
                </button>
            </div>
            <div className="page-content">
                <UserTable/>
            </div>
        </div>;
    }

    onClickNew()
    {
        store.action(ChangePage, Pages.NewUser);
    }
}

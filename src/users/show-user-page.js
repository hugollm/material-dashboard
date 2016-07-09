import React from 'react';
import Component from 'common/component';

import store from 'common/store';
import { Pages } from 'common/constants';
import { ChangePage } from 'app/actions';

import UserDetails from './user-details';


export default class ShowUserPage extends Component
{
    render()
    {
        return <div className="page">
            <div className="page-actions">
                <button className="mdl-button mdl-js-button mdl-button--icon" tabIndex="1"
                        onClick={this.onClickBack}>
                    <i className="material-icons">arrow_back</i>
                </button>
                <button className="mdl-button mdl-js-button mdl-button--primary" tabIndex="2">
                    Edit
                </button>
                <button className="mdl-button mdl-js-button mdl-button--accent" tabIndex="3">
                    Delete
                </button>
            </div>
            <div className="page-content">
                <UserDetails/>
            </div>
        </div>;
    }

    onClickBack()
    {
        store.action(ChangePage, Pages.ListUsers);
    }
}

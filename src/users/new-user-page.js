import React from 'react';
import Component from 'common/component';

import store from 'common/store';
import { Pages } from 'common/constants';
import { ChangePage } from 'app/actions';

import UserForm from './user-form';


export default class UsersPage extends Component
{
    render()
    {
        return <div className="page">
            <div className="page-actions">
                <button className="mdl-button mdl-js-button mdl-button--icon" tabIndex="1"
                        onClick={this.onClickBack}>
                    <i className="material-icons">arrow_back</i>
                </button>
            </div>
            <div className="page-content">
                <UserForm/>
            </div>
        </div>;
    }

    onClickBack()
    {
        store.action(ChangePage, Pages.ListUsers);
    }
}

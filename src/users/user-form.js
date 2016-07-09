import React from 'react';
import Component from 'common/component';

import store from 'common/store';
import { Pages } from 'common/constants';
import { ChangePage } from 'app/actions';


export default class UserForm extends Component
{
    componentDidMount()
    {
        this.refs.email.focus();
    }

    render()
    {
        return <form className="form" onSubmit={this.onSubmit}>
            <div className="fields">
                <div className="field mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input type="email" name="email" className="mdl-textfield__input" ref="email" autoCorrect="off" autoCapitalize="off" spellCheck="false" placeholder=""/>
                    <label className="mdl-textfield__label">Email</label>
                </div>
                <div className="field mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <select name="role" className="mdl-textfield__input" placeholder="">
                        <option value=""></option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                    <label className="mdl-textfield__label">Role</label>
                </div><br/>
                <div className="field mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input type="text" name="name" className="mdl-textfield__input" autoCorrect="off" autoCapitalize="off" spellCheck="false" placeholder=""/>
                    <label className="mdl-textfield__label">Name</label>
                </div>
                <div className="field mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input type="date" name="birthday" className="mdl-textfield__input" placeholder=""/>
                    <label className="mdl-textfield__label">Birthday</label>
                </div>
            </div>
            <div className="actions">
                <button type="submit" className="mdl-button mdl-button--primary mdl-js-button mdl-js-ripple-effect">
                    Create
                </button>
                <button className="mdl-button mdl-js-button" onClick={this.onClickCancel}>
                    Cancel
                </button>
            </div>
        </form>;
    }

    onSubmit(e)
    {
        e.preventDefault();
        store.action(ChangePage, Pages.ListUsers);
    }
}

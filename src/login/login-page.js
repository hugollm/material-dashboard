import React from 'react';

import store from 'common/store';
import Component from 'common/component';
import { Pages } from 'common/constants';
import { ChangePage } from 'app/actions';

import './style.scss';


export default class LoginPage extends Component
{
    componentDidMount() {
        this.refs.email.focus();
    }

    render()
    {
        return (
            <main className="login-page">
                <form className="form login-card mdl-card mdl-shadow--2dp" onSubmit={this.onSubmit}>
                    <div className="mdl-card__title">
                        <h1 className="mdl-card__title-text">Dashboard</h1>
                    </div>
                    <div className="mdl-card__supporting-text">
                        <div className="field mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input className="mdl-textfield__input" type="email" ref="email" autoCorrect="off" autoCapitalize="off" spellCheck="false" placeholder=""/>
                            <label className="mdl-textfield__label">Email</label>
                        </div>
                        <div className="field mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input className="mdl-textfield__input" type="password" pattern="^.{3,}$" placeholder=""/>
                            <label className="mdl-textfield__label">Password</label>
                            <span className="mdl-textfield__error">Too weak!</span>
                        </div>
                    </div>
                    <div className="mdl-card__actions">
                        <button type="submit" className="mdl-button mdl-button--primary mdl-js-button mdl-js-ripple-effect">
                            Login
                        </button>
                        <button type="button" className="mdl-button mdl-button--accent mdl-js-button mdl-js-ripple-effect">
                            Register
                        </button>
                    </div>
                </form>
            </main>
        );
    }

    onSubmit(e)
    {
        e.preventDefault();
        store.action(ChangePage, Pages.ListUsers);
    }
}

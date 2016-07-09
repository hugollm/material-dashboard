import React from 'react';
import Component from 'common/component';

import store from 'common/store';
import { Pages } from 'common/constants';
import { ChangePage } from 'app/actions';


export default class UserTable extends Component
{
    render()
    {
        return <table className="selectable-table mdl-data-table">
            <thead>
                <tr>
                    <th className="mdl-data-table__cell--non-numeric">Email</th>
                    <th className="mdl-data-table__cell--non-numeric">Role</th>
                    <th className="mdl-data-table__cell--non-numeric">Last Login</th>
                    <th className="mdl-data-table__cell--non-numeric">Active</th>
                </tr>
            </thead>
            <tbody>
                <tr onClick={this.onClickUser}>
                    <td className="mdl-data-table__cell--non-numeric">john.doe@gmail.com</td>
                    <td className="mdl-data-table__cell--non-numeric">Admin</td>
                    <td className="mdl-data-table__cell--non-numeric">1h 3m</td>
                    <td className="mdl-data-table__cell--non-numeric">Yes</td>
                </tr>
                <tr onClick={this.onClickUser}>
                    <td className="mdl-data-table__cell--non-numeric">jane.doe@gmail.com</td>
                    <td className="mdl-data-table__cell--non-numeric">User</td>
                    <td className="mdl-data-table__cell--non-numeric">2h 25m</td>
                    <td className="mdl-data-table__cell--non-numeric">No</td>
                </tr>
            </tbody>
        </table>;
    }

    onClickUser()
    {
        store.action(ChangePage, Pages.ShowUser);
    }
}

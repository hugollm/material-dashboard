import React from 'react';
import Component from 'common/component';


export default class UserDetails extends Component
{
    render()
    {
        return <table className="details-table">
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>John Smith Doe</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>john.doe@gmail.com</td>
                </tr>
                <tr>
                    <td>Role</td>
                    <td>Admin</td>
                </tr>
                <tr>
                    <td>Last Login</td>
                    <td>1h 3m</td>
                </tr>
                <tr>
                    <td>Birthday</td>
                    <td>03/07/1992</td>
                </tr>
                <tr>
                    <td>Active</td>
                    <td>Yes</td>
                </tr>
            </tbody>
        </table>;
    }
}

import React from 'react';
import Component from 'common/component';

import store from 'common/store';
import { Pages } from 'common/constants';

import ListUsersPage from 'users/list-users-page';
import NewUserPage from 'users/new-user-page';
import ShowUserPage from 'users/show-user-page';


export default class Content extends Component
{
    render()
    {
        var page = store.getState().page;
        var content = page;

        if (page == Pages.ListUsers) content = <ListUsersPage/>;
        if (page == Pages.NewUser) content = <NewUserPage/>;
        if (page == Pages.ShowUser) content = <ShowUserPage/>;

        return <main className="mdl-layout__content">
            {content}
        </main>;
    }
}

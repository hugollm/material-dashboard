export class ChangePage
{
    execute(state, page)
    {
        if (!page)
            throw 'Invalid page: ' + page;
        state.page = page;
        return state;
    }
}

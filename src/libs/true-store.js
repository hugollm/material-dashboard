export default class TrueStore
{
    constructor(initialState = {})
    {
        this.state = initialState;
        this.callbacks = {};
    }

    getState()
    {
        return JSON.parse(JSON.stringify(this.state));
    }

    action(actionClass, data)
    {
        var action = new actionClass();
        var actionName = action.constructor.name;
        console.log('Action: ' + actionName);
        var newState = action.execute(this.getState(), data);
        if (!newState)
            throw 'Action "' + actionName + '" did not return state';
        this.state = newState;
        this.executeRegisteredCallbacks(actionClass);
    }

    registerCallback(actionClass, callback)
    {
        console.log('Register callback: ' + actionClass.name);
        this.initializeListenersOfAction(actionClass);
        this.callbacks[actionClass].push(callback);
    }

    unregisterCallback(actionClass, callback)
    {
        console.log('Unregister callback: ' + actionClass.name);
        this.initializeListenersOfAction(actionClass);
        var index = this.callbacks[actionClass].indexOf(callback);
        if (index == -1)
            throw 'Trying to unregister unknown callback from: ' + actionClass.name;
        this.callbacks[actionClass].splice(index, 1);
    }

    executeRegisteredCallbacks(actionClass)
    {
        this.initializeListenersOfAction(actionClass);
        this.callbacks[actionClass].map(function(callback){
            callback();
        });
    }

    initializeListenersOfAction(actionClass)
    {
        if (typeof this.callbacks[actionClass] == 'undefined')
            this.callbacks[actionClass] = [];
    }
}

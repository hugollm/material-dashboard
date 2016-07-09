import React from 'react';
import store from './store';


export default class Component extends React.Component
{
    constructor()
    {
        super();
        this.state = {};
        this.actionCallbacks = [];

        this.bindMethods();
        this.callbacks();
        this.registerCallbacks();
    }

    componentWillUnmount()
    {
        this.unregisterCallbacks();
    }

    bindMethods()
    {
        var proto = this.__proto__;
        while (proto instanceof Component.__proto__)
        {
            var properties = Object.getOwnPropertyNames(proto);
            for (var i in properties)
                if (this[properties[i]].bind)
                    this[properties[i]] = this[properties[i]].bind(this);
            proto = proto.__proto__;
        }
    }

    callbacks()
    {
    }

    registerCallback(actionClass, callback)
    {
        this.actionCallbacks.push([actionClass, callback]);
    }

    registerCallbacks()
    {
        for (var i in this.actionCallbacks)
            store.registerCallback(this.actionCallbacks[i][0], this.actionCallbacks[i][1]);
    }

    unregisterCallbacks()
    {
        for (var i in this.actionCallbacks)
            store.unregisterCallback(this.actionCallbacks[i][0], this.actionCallbacks[i][1]);
    }

    reRender()
    {
        this.forceUpdate();
    }

    bindValue(e)
    {
        var state = {};
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
}

import React, { Component } from 'react';
import Child from './Child/Child';
import LangControls from './LangControls/LangControls';

export default class AppLang extends Component {
    render() {
        return (
            <div className='AppLang'>
                <br />
                <LangControls />
                <Child />
            </div>
        )
    }
}
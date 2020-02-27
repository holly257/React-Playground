import React, { Component } from 'react';
import Child from './Child/Child';
import LangControls from './LangControls/LangControls';
import LanguageContext from './languageContext';

export default class AppLang extends Component {
    state = {
        lang: window.navigator.language 
    }

    handleSetLang = (lang) => {
        this.setState({ lang })
    };

    render() {
        const contextValue = {
            lang: this.state.lang
        }
        return (
            <LanguageContext.Provider
                value={contextValue}
            >
                <div className='AppLang'>
                    <br />
                    <LangControls 
                        onSetLang={this.handleSetLang}
                    />
                    <Child />
                </div>
            </LanguageContext.Provider>
            
        )
    }
}
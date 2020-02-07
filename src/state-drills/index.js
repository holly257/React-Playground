import React from 'react';

class HelloWorld extends React.Component {
    state = {
        who: 'world'
    };

    render (){
        return (
            <div>
                <div>
                <p>Hello, {this.state.who}</p>
                </div>
                <button onClick={() => 
                    this.setState({
                        who: 'React'
                    })  
                }>
                    React
                </button>
                <button onClick={() => 
                    this.setState({
                        who: 'Friend'
                    })  
                }>
                    Friend
                </button>
                <button onClick={() => 
                    this.setState({
                        who: 'World'
                    })  
                }>
                    World
                </button>
            </div>
            
        )
       
    }
}

export default HelloWorld;
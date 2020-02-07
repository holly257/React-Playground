import React from 'react';

class RouletteGun extends React.Component {
    state = {
        chamber: null,
        spinningTheChamber: false
    };

    onClickButton = () => {
        this.setState({
            spinningTheChamber: true
        })
        setTimeout(() => {
            let num = Math.ceil(Math.random() * 8)
            this.setState({
                chamber: num,
                spinningTheChamber: false
            })
        }, 2000)  
    }
    
    renderDisplay(){
        if (this.state.spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger! ...'
        } else if (this.state.chamber === this.props.bulletInChamber) {
            return 'BANG!!!'
        } else {
            return 'you are safe'
        }
    }
    
    render (){
        return (
            <div>
                <p>{this.renderDisplay()}</p>
                <button onClick={this.onClickButton}
                >Pull the trigger!</button>
            </div>
        )
    }
}

export default RouletteGun;
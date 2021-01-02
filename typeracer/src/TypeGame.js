import React from 'react';
import ReactDOM from 'react-dom'

class TypeGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        }
    }

    render() {
        return (
            <div>
                <header>
                    React Type Racer Game!
                </header>
                <input OnChange= {this.SetInput} />
            </div>
        );
    }

    SetInput = (event) => {
        this.setState({input: event.target.value});
    }
}

export default TypeGame;
import React from 'react';

class InputPlace extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ""
        }
    }

    setInput = (event) => {
        this.setState({input: event.target.value});
    }

    pressedKey = (event) => {
        if (event.key === 'Enter') {
             if (this.state.input === this.props.typeString) {
                 this.props.winGame();
             }
        }
    }

    render() {
        return (
            <div>
                <header id= "TypeString">
                    {this.props.typeString}
                </header>
                <input id = "TypingInput"
                    onChange = {this.setInput}
                    onKeyPress = {this.pressedKey}
                />
            </div>
        );
    }
}

export default InputPlace;
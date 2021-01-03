import React from 'react';

class BeginClock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Timeout: 3
        }

        this.handleTimeout = this.handleTimeout.bind(this);
        this.startClock = this.startClock.bind(this);
    }

    render() {
        return (
            <div>
                <header>
                    Start on: {this.state.Timeout}
                </header>
                <button id = "startButton" 
                    onClick= {this.startClock}>
                    Start
                </button>
            </div>
        );
    }
    
    handleTimeout = () => {
        this.props.onTimeout();
    }

    startClock = (event) => {
        let clock = () => {
            let currentTime = this.state.Timeout;
            
            this.setState({
                Timeout: currentTime - 1
            })
    
            if (this.state.Timeout === 0) {
                this.handleTimeout()
            }
        }

        var clockInterval = setInterval(clock, 1000);
        setTimeout(() => {
            clearInterval(clockInterval)
        }, 3000);

    }
}

export default BeginClock;
import React from 'react';
import BeginClock from './BeginClock'
import InputPlace from './InputPlace'
import GameOver from './GameOver'
var unirest = require("unirest");

class TypeGame extends React.Component {
    constructor(props) {
        super(props);

        this.startGame = this.startGame.bind(this);

        this.state = {
            hasWon: false,
            hasStarted: false,
            startTime: 0
        }
    }

    render() {
        return (
            <div id = "game">
                <header id = "title">
                    React Type Racer Game!
                </header>
                {!this.state.hasStarted ?
                <BeginClock 
                    onTimeout = {this.startGame}
                /> :
                    !this.state.hasWon ?
                    <InputPlace
                        typeString = {this.state.typeString}
                        winGame = {this.gameOver}
                    /> :
                    <GameOver
                        startTime = {this.state.startTime}
                    />        
                }

            </div>
        );
    }

    gameOver = () => {
        this.setState({
            hasWon:true
        })
        console.log("WIN")
    }

    startGame = () => {
        const self = this;
        var req = unirest("GET", "https://quotes.rest/qod");

        req.end(function (res) {
            if (res.error) throw new Error(res.error);

            self.setState({
                typeString: res.body.contents.quotes[0].quote,
                hasStarted: true,
                startTime: new Date().getTime()
            })
        });
    }
}

export default TypeGame;
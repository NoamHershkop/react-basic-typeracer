import React from 'react';
import BeginClock from './BeginClock'
import InputPlace from './InputPlace'

class TypeGame extends React.Component {
    constructor(props) {
        super(props);
    }

    get_time_diff = ( datetime ) => {
        var now = new Date().getTime();

        if( isNaN(datetime) )
        {
            return "";
        }

        if (datetime < now) {
            var milisec_diff = now - datetime;
        }else{
            throw "err"
        }
        let date_diff = new Date(milisec_diff);

        return date_diff.getMinutes() + " Minutes " + date_diff.getSeconds() + " Seconds";
    }

    render() {
        return (
            <div>
                YOU WIN!
                Your Time:
                {this.get_time_diff(this.props.startTime)}
            </div>
        );
    }
}

export default TypeGame;
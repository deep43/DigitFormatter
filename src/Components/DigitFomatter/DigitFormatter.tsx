import React from 'react';
import './digit-formatter.scss';


type Props = {};
type State = { digit: number };

class DigitFormatter extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            digit: 0
        }
    }

    onDigitChange(e: any) {
        this.setState({digit: e.target.value});
    }

    render() {
        const {digit} = this.state;
        return (
            <div className="digit-formatter">
                <div className="section-one">
                    <div className="input-container">
                        <p>Enter a Number</p>
                        <input onChange={(e) => this.onDigitChange(e)}/>
                    </div>
                </div>
                <div className="section-two">
                    <div className="details-container">
                        <h1>{10 * digit}</h1>
                        <h3>10 * (Number Entered)</h3>
                    </div>
                </div>
                <div className="section-three">
                    <div className="details-container">
                        <h1>{digit / 2}</h1>
                        <h5>(Number Entered / 2)</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default DigitFormatter;

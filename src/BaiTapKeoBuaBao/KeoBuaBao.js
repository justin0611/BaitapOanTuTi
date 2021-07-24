import React, { Component } from 'react'
import './css/style.css'
import Player from './Player'
import Computer from './Computer'
import KetQua from './KetQua'
import { connect } from 'react-redux'
class KeoBuaBao extends Component {
    render() {
        return (
            <div className='bg__game'>
                <div className="row mt-3">
                    <div className="col-3">
                        <Player />
                    </div>
                    <div className="col-6 text-center">
                        <KetQua />
                        <button onClick={() => {
                            this.props.playgame()
                        }} className='btn btn-danger p-3 mt-5'>Play</button>
                    </div>
                    <div className="col-3">
                        <Computer />
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        playgame: () => {
            let count = 0;
            let randomComputer = setInterval(() => {
                const action = {
                    type: 'RANDOM',
                };
                dispatch(action);
                count++;
                if (count > 10) {
                    clearInterval(randomComputer)
                    const action = {
                        type: 'KETQUA',
                    };
                    dispatch(action);
                }
            }, 200)
        }

    }
}

export default connect(null, mapDispatchtoProps)(KeoBuaBao);

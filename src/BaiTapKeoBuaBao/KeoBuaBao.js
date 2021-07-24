import React, { Component } from 'react'
import './css/style.css'
import Player from './Player'
import Computer from './Computer'
import KetQua from './KetQua'
export default class KeoBuaBao extends Component {
    render() {
        return (
            <div className='bg__game'>
                <div className="row mt-3">
                    <div className="col-3">
                        <Player />
                    </div>
                    <div className="col-6 text-center">
                        <KetQua />
                        <button className='btn btn-danger p-3 mt-5'>Play</button>
                    </div>
                    <div className="col-3">
                        <Computer />
                    </div>
                </div>
            </div>
        )
    }
}

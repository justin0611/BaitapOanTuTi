import React, { Component } from 'react'

export default class Computer extends Component {
    render() {
        return (
            <div className='text-center'>
                <div className="imgplayer">
                    <img style={{ transform: 'rotate(120deg)' }} src="./img/keo.png" alt="" />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 170, height: 170 }} src="./img/playerComputer.png" alt="./img/playerComputer.png" />
            </div>
        )
    }
}

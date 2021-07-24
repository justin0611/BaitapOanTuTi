import React, { Component } from 'react'

export default class KetQua extends Component {
    render() {
        return (
            <div>
                <div className="display-4 text-white text-center">
                    You Lose
                </div>
                <div className="display-4 text-success text-center">
                    Win score: <span className='text-warning'>0</span>
                </div>
                <div className="display-4 text-success text-center">
                    Number of games : <span className='text-warning'>0</span>
                </div>
            </div>
        )
    }
}

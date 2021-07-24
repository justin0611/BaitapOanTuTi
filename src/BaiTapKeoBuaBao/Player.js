import React, { Component } from 'react'
import { connect } from 'react-redux'

class Player extends Component {

    render() {
        console.log('mang', this.props.arrDatCuoc);
        return (
            <div className="text-center">
                <div className="imgplayer">
                    <img style={{ transform: 'rotate(120deg)' }} src="./img/keo.png" alt="" />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 170, height: 170 }} src="./img/player.png" alt="./img/player.png" />
                <div className="keobuabao">
                    <button className="keobuabao__img"><img src="./img/keo.png" alt="" /></button>
                    <button className="keobuabao__img"><img src="./img/bua.png" alt="" /></button>
                    <button className="keobuabao__img"><img src="./img/bao.png" alt="" /></button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        arrDatCuoc: state.KeoBuaBaoReducer.arrDatCuoc
    }
}

export default connect(mapStateToProps)(Player)

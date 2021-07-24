import React, { Component } from 'react'
import { connect } from 'react-redux'

class Computer extends Component {
    render() {
        return (
            <div className='text-center'>
                <div className="imgplayer">
                    <img style={{ transform: 'rotate(120deg)' }} src={this.props.DatCuoc.hinhAnh} alt="" />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 170, height: 170 }} src="./img/playerComputer.png" alt="./img/playerComputer.png" />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        DatCuoc: state.KeoBuaBaoReducer.computer,
    }
}

export default connect(mapStateToProps)(Computer)
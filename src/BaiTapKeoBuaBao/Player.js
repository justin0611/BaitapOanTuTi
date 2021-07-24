import React, { Component } from 'react'
import { connect } from 'react-redux'

class Player extends Component {
    renderHinhAnh = () => {
        return this.props.DatCuoc.map((item, index) => {
            let border = {}
            if (item.datCuoc) {
                border = { border: '5px solid orange' }
            }
            return <button style={border} key={index} onClick={() => {
                this.props.datCuoc(item.ma);
            }} className="keobuabao__img"><img src={item.hinhAnh} alt="" /></button>
        })
    }
    render() {
        return (
            <div className="text-center">
                <div className="imgplayer">
                    <img style={{ transform: 'rotate(120deg)' }} src={this.props.DatCuoc.find(item => item.datCuoc === true).hinhAnh} alt="" />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 170, height: 170 }} src="./img/player.png" alt="./img/player.png" />
                <div className="keobuabao">
                    {this.renderHinhAnh()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        DatCuoc: state.KeoBuaBaoReducer.arrDatCuoc,
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        datCuoc: (ma) => {
            const action = {
                type: 'CHON_DAT_CUOC',
                payload: ma,
            };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Player);

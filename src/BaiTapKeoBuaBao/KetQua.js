import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQua extends Component {
    render() {
        return (
            <div>
                <div className="display-4 text-white text-center">
                    {this.props.DatCuoc.ketQua}
                </div>
                <div className="display-4 text-success text-center">
                    Win score: <span className='text-warning'>{this.props.DatCuoc.soBanThang}</span>
                </div>
                <div className="display-4 text-success text-center">
                    Number of games : <span className='text-warning'>{this.props.DatCuoc.soBanChoi}</span>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        DatCuoc: state.KeoBuaBaoReducer,
    }
}

export default connect(mapStateToProps)(KetQua)

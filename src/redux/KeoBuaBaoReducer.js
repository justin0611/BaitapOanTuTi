const stateDefault = {
    arrDatCuoc =[
        { ma: 'keo', hinhAnh: './img/keo.png', datCuoc: false },
        { ma: 'bua', hinhAnh: './img/bua.png', datCuoc: false },
        { ma: 'bao', hinhAnh: './img/bao.png', datCuoc: false }
    ],
    ketQua: 'You Win',
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: 'keo', hinhAnh: './img/keo.png' },
}
const KeoBuaBaoReducer = (state = stateDefault, action) => {
    switch (action.type) {
        default: return { ...state }
    }
}

export default KeoBuaBaoReducer;
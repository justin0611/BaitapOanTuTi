const stateDefault = {
    arrDatCuoc: [
        { ma: 'keo', hinhAnh: './img/keo.png', datCuoc: true, score: 1 },
        { ma: 'bua', hinhAnh: './img/bua.png', datCuoc: false, score: 2 },
        { ma: 'bao', hinhAnh: './img/bao.png', datCuoc: false, score: 3 },
    ],
    ketQua: 'Thắng',
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: 'keo', hinhAnh: './img/keo.png' },
}
const KeoBuaBaoReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'CHON_DAT_CUOC': {
            let arrUpdate = [...state.arrDatCuoc];
            arrUpdate = arrUpdate.map((item, index) => {
                return { ...item, datCuoc: false }
            })
            console.log(arrUpdate);
            let index = arrUpdate.findIndex(qc => qc.ma === action.payload);
            arrUpdate[index].datCuoc = true;
            state.arrDatCuoc = arrUpdate;
            return { ...state }
        }

        case 'RANDOM': {
            let number = Math.floor(Math.random() * 3);
            state.computer = state.arrDatCuoc[number]
            return { ...state }
        }
        case 'KETQUA': {
            let player = state.arrDatCuoc.find(item => item.datCuoc === true).score;
            let computer = state.computer.score;
            let kq = player - computer
            if (kq === 2 || kq === -1) {
                state.ketQua = 'Bạn Thua'
            } else if ((kq === -2 || kq === 1)) {
                state.ketQua = 'Bạn Thắng'
                state.soBanThang++;
            } else {
                state.ketQua = 'Bạn Hòa'
            }
            state.soBanChoi++;
            console.log(kq);
            return { ...state }
        }

        default:
            return { ...state };
    }
};

export default KeoBuaBaoReducer;
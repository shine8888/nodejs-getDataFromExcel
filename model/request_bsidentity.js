const bsidentity = {
    
        idoKey: {
            type: String,
            maxLength: 6

        },
        delKbn: {
            type: String,
            maxLength:1

        },
        updZnKey: {
            type: String,
            maxLength:6
        },
        updZnKeyTouitsu: {
            type: String,
            maxLength:6
        },
        innoinf: {
            type: String,
            maxLength:7
        },
        itkCmpCd: {
            type: String,
            maxLength:3
        },
        fndCd: {
            type: String
        },
        megCd: {
            type: String,
            maxLength:3
        },
        kaiYmd: {
            type: Date,
            maxLength:10
        },
        siteiNo: {
            type: Number,
            maxLength:3
        },
        buySelKbn: {
            type: String,
            maxLength:1
        },
        fifoFlg: {
            type: String,
            maxLength:1
        },
        kekaRskKbn: {
            type: String,
            maxLength:1
        },
        kazeiKbn: {
            type: String,
            maxLength:1
        },
        againstKbn: {
            type: String,
            maxLength:1
        },
        hokanBnkCd: {
            type: String,
            maxLength:4
        },
        ykjYmdLcl: {
            type: Date,
            maxLength:10
        },
        ukeYmdLcl: {
            type: Date,
            maxLength:10
        },
        ukeYmdJpn: {
            type: Date,
            maxLength:10
        },
        nrykYmd: {
            type: Date,
            maxLength:10
        },
        ykjYmdKjy: {
            type: Date,
            maxLength:10
        },
        ukeYmdKjy:{
            type: Date,
            maxLength:10
        },
        sikinUkeKanrYmdK: {
            type: Date,
            maxLength:10
        },
        secUkeKanrYmdKjy: {
            type: Date,
            maxLength:10
        },
        face: {
            type: Number, 
            max: 1.7976931348623157e+308
        },
        orgFace: {
            type: Number,
            max: 1.7976931348623157e+308
        },
        ykjTnk: {
            type: Number,
            max: 1.7976931348623157e+308
        },
        ykjKn: {
            type: Number,
            max: 1.7976931348623157e+308
        },
        kekaRsk: {
            type: Number,
            max: 1.7976931348623157e+308
        },
        ukeKn: {
            type: Number,
            max: 1.7976931348623157e+308
        },
        nrykUserId: {
            type: String,
            maxLength: 6
        }
    
}

module.exports = bsidentity

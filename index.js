const fs = require('fs')
const csv = require('csv')
const QRcode = require('qrcode')

//QRコード生成関数
const listCreateqr = csv.parse((err, data) => {
    console.log("出力処理開始")
    data.forEach((el, index) => {
        console.log("[入力] " + el[0] + ":" + el[1])
        QRcode.toFile('outputData/'+el[0]+'.png',el[1])
    })
    console.log("全データ出力完了")
})


fs.createReadStream('data.csv').pipe(listCreateqr)
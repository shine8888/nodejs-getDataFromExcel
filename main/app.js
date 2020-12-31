var Excel = require('exceljs');
const request_bsidentity = require('../model/request_bsidentity')
const fs = require('fs')

var wb = new Excel.Workbook();
var path = require('path');
var filePath = path.resolve(__dirname,'Junit_KaiIdoCre.xlsx');


wb.xlsx.readFile(filePath).then(function(){

    var sh = wb.getWorksheet("入力データ_createLclUkeYmdIdo");

    for (i = 24; i <= sh.rowCount; i++) {
        var ob = Object.create(request_bsidentity)
        for(j=2; j<= sh.columnCount; j++){
            if((sh.getRow(i).getCell(1).value).length === 0 ){
                return
            }
            for(var key in ob) {
                switch(key) {
                    case 'siteiNo':
                    case 'face':
                    case 'orgFace':
                    case 'ykjTnk':
                    case  'ykjTnk':
                    case  'ykjKn':
                    case  'kekaRsk':
                    case  'ukeKn' :
                      const num = Number.parseFloat(sh.getRow(i).getCell(j).value).toFixed(4)
                      ob[key] = num
                      break;
                     
                    default:
                        ob[key] = sh.getRow(i).getCell(j).value
                  }
    j++
}
        }
        var jsonContent = JSON.stringify(ob)
        fs.writeFile("output"+i+".json", jsonContent, 'utf8', function (err) {
            if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
            }
         
            console.log("JSON file has been saved.");
        }); 
    }
})
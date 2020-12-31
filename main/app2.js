var Excel = require('exceljs');
const fs = require('fs')

var wb = new Excel.Workbook();
var path = require('path');

const myFunction = function(fileExcelName, nameSheet, nameFileDTO){
var filePath = path.resolve(__dirname, fileExcelName);
var nameDTO = nameFileDTO+'.java'
var data = 'package jp.co.nri.tstar.tfbsub.tfbapi.dto;\nimport java.io.Serializable; \nimport lombok.Data;\n@Data\npublic class '+ nameFileDTO +' implements Serializable {\n'
writeFunction(nameDTO, data)
wb.xlsx.readFile(filePath).then(function(){
    const sh = wb.getWorksheet(nameSheet);
    const insertFunction = function (startRowIndex, endRowIndex, startCellIndex, endCellIndex){
        var data = ''
        for (i = startRowIndex; i <= endRowIndex; i++) {
                if((sh.getRow(i).getCell(1).value).length === 0 ){
                    return
                }
               data = data+ 'private '+sh.getRow(i).getCell(startCellIndex).value + ' ' + sh.getRow(i).getCell(endCellIndex).value +';\r\n'
        }
        return data
    }

    if(nameSheet === '入力データ'){
        switch(nameFileDTO) {
            case 'KaiIdoCreMotoKey':
                var data = insertFunction(8,9,7,5) + '}'
                writeFunction(nameDTO, data)
                break;

            case 'KaiIdoInDto':
                var data = insertFunction(14,15,7,5)
                writeFunction(nameDTO, data) + '}'
                break;

            case 'KaiThNrDto':
                var data = insertFunction(20,45,7,5)
                writeFunction(nameDTO, data) + '}'
                break;

            case 'KaiBsIdDto':
                var data = insertFunction(50,79,7,5)
                writeFunction(nameDTO, data) + '}'
                break;

            case 'LoginUserInfo':
                var data = insertFunction(84,85,7,5)
                writeFunction(nameDTO, data) + '}'
                break;

            case 'NrykYmdIdoKomkDto':
                var data = insertFunction(90,93,7,5)
                writeFunction(nameDTO, data) + '}'
                break;

            case 'CheckKaiZnJufukuDto':
                var data = insertFunction(98,99,7,5)
                writeFunction(nameDTO, data) + '}'
                break; 

            default:
                console.log('You have entered wrong name DTO')
                break;
        }


    } else if (nameSheet === '出力データ') {
        if(nameFileDTO === 'BsIdEntity'){
            var data = insertFunction(7,43,6,5) + '}'
            writeFunction(nameDTO, data)
        } else {
            console.log('You have entered wrong name DTO')
        }
    
    } else {
        console.log('You have entered wrong sheet\' name')
    }

}).catch((e)=>{
console.log(e)
})}

const writeFunction = function(nameDTO, dataInsert){
    fs.appendFile(nameDTO,dataInsert, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
    }); 
}

const loopFunction = function(sh){
    
}


// Nhập giá trị cho function theo thứ tự: Tên file, Tên Sheet, Tên DTO/File muốn tạo
myFunction('KaiIdoCre.xlsx','出力データ', 'BsIdEntity')
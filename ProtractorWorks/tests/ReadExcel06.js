var Excel = require("exceljs");

describe('To read data from excel sheet', () => {
    it('for processing username and password', () => {

        var workbook = new Excel.Workbook();

        workbook.creator = "IBM India";
        workbook.modified = "Naveen";

        var fileName = "sample.xlsx";
        workbook.xlsx.readFile(fileName).then(function () {
            var workSheet = workbook.getWorksheet("logins");

            workSheet.eachRow({ includeEmpty: true }, (row, number) => {
                // way 1 
                // currRow = workSheet.getRow(number);
                // console.log(currRow.getCell(1).value + ", " + currRow.getCell(2).value);

                // way 2 
                console.log(row.values[1] + ", " + row.values[2]);
                
                // way 3 
                // console.log("Row Number " +number + ", "+ JSON.stringify(row.values)); 


            })
        });
    });
});
// TODO: import module bila dibutuhkan di sini
const fs = require("fs");
// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3

const dataOlah = (rawData) => {
  if (rawData.message !== undefined) {
    return rawData.message.split(" ")[1];
  } else if (rawData[0].message !== undefined) {
    return rawData[0].message.split(" ")[1];
  } else if (rawData[0].data.message !== undefined) {
    return rawData[0].data.message.split(" ")[1];
  }
};
//tidak boleh menggunakan async await dan promise
//sebaiknya callback tidak menggunakan forEach, map etc
/*
//const bacaData = async(callback) => {
//  let arrayFile = [file1, file2, file3];
//  let data = [];
//    for (const element of arrayFile) {
//      data.push(dataOlah(JSON.parse(await fs.promises.readFile(element))));
//    }
//    callback(null, data);
//};
*/

const bacaData = (callback) => {
  const data = [];
  fs.readFile(file1, "utf-8", (err1, data1) => {
    if (err1) {
      return console.log(err1);
    }

    fs.readFile(file2, "utf-8", (err2, data2) => {
      if (err2) {
        return console.log(err2);
      }

      fs.readFile(file3, "utf-8", (err3, data3) => {
        if (err3) {
          return console.log(err3);
        }
        
        data.push(dataOlah(JSON.parse(data1)));
        data.push(dataOlah(JSON.parse(data2)));
        data.push(dataOlah(JSON.parse(data3)));
        callback(err3, data);
      });
    });
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};

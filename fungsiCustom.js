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

const bacaData = (callback) => {
  let dataFile = [file1, file2, file3];
  let saveData = [];
  dataFile.forEach((namaData, index) =>
    fs.readFile(namaData, (err, data) => {
      if (err) {
        return callback(err);
      } else {
        if (index == 0) {
          saveData.push(JSON.parse(data).message.split(" ")[1]);
        } else if (index == 1) {
          saveData.push(JSON.parse(data)[0].message.split(" ")[1]);
        } else if (index == 2) {
          saveData.push(JSON.parse(data)[0].data.message.split(" ")[1]);

          callback(null, saveData);
        }
      }
    })
  );
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};

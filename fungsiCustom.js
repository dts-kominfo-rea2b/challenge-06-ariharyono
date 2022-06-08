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
  }
  else if (rawData[0].message !== undefined) {
    return rawData[0].message.split(" ")[1];
  }
  else if (rawData[0].data.message !== undefined) {
    return rawData[0].data.message.split(" ")[1];
  }
};
const bacaData = async(callback) => {
  let dataFile = [file1, file2, file3];
  let saveData = [];
    for (const element of arrayFile) {
      const dataFile = await fs.promises.readFile(element, "utf-8");
      saveData.push(dataOlah(JSON.parse(dataFile)));
    }
    callback(null, saveData);
};


// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};

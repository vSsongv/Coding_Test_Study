let targetFolder = 'Family'; // 불러올 폴더의 위치(..은 이전 폴더, .은 현재 폴더)

let fs = require('fs'); // filesystem을 사용하기 위해

fs.readdir(targetFolder, (err, filelist) => {
  filelist.forEach((file) => {
    if (file.includes('trashed')) {
      let newFileName = file.substring(9);
      fs.rename(`Family\\${file}`, `Family\\${newFileName}`, function (err) {
        if (err) throw err;
        console.log(file);
      });
    }
  });
});

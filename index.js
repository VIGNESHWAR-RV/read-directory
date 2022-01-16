const fs = require("fs");


const [,,path] = process.argv;


fs.readdir(path,{ withFileTypes: true },(err, files) => {

  console.log(`Files in the directory "./${path}" are`);
  let count=1;
  if (err)
    console.log(err);
  else {
   for(let file of files ){
     if(file.name.includes("Folder")){
       console.log(count+". "+file.name.split("Folder").join("")+"-(Folder)");
       count++;
       continue;
     }
      console.log(count+". "+file.name);
      count++;
    }
  }
})

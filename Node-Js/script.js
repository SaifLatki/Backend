const fs=require('fs');

// creating a text file using fs module
// fs.writeFile('hello.txt','Hello World!',(err)=>{
//     if(err) throw err;
//     console.log('File Created!');
// });

// reading a text file using fs module
// fs.readFile('hello.txt','utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// });

// appending a text file using fs module
// fs.appendFile('hello.txt','\nHello World!',(err)=>{
//     if(err) throw err;
//     console.log('File Updated!');
// });

// renaming a text file using fs module
// fs.rename('hello.txt','hello1.txt',(err)=>{
//     if(err) throw err;
//     console.log('File Renamed!');
// });

// deleting a text file using fs module
fs.unlink('hello.txt',(err)=>{
    if(err) throw err;
    console.log('File Deleted!');
});

const fs = require('fs');

writeFile = (filePath,data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, (err) => {
            if (err) reject("dosya oluşturulamadı");
            resolve("Dosya oluşturuldu");
        })
    })
};
readFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err) => {
            if (err) reject("dosya okunmadı");
            resolve("Dosya okundu");
        })
    })
};
insertFile = (filePath,data) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(filePath, '\n'+data, (err) => {
            if (err) reject("dosyaya veri eklenemedi");
            resolve("dosyaya veri eklendi");
        })
    })
};
fileDelete = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.unlink(filePath,(err) => {
            if (err) reject("dosyaya silinemedi");
            resolve("dosya silindi");
        })
    })
};
process = async () => {
    const filePath = 'employees.json';
    const data = '{"name": "Employee 1 Name", "salary": 2000}';
    let write = await writeFile(filePath, data)
        .then(data => { console.log(data) })
        .catch(err => { console.log(err) });
    let read = await readFile(filePath,'utf8')
        .then(data => { console.log(data) })
        .catch(err => { console.log(err) });
    let insert = await insertFile(filePath,'{"name": "Employee 2 Name", "salary": 3000}')
        .then(data => { console.log(data) })
        .catch(err => { console.log(err) });
    let deleteFile = await fileDelete(filePath)
        .then(data => { console.log(data) })
        .catch(err => { console.log(err) });
};
process();
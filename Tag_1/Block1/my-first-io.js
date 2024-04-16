const fs = require('fs')
const filepath = process.argv[2]
const fileContent = fs.readFileSync(filepath);
const file = fileContent.toString()
const numNewlines = file.split('\n');
console.log(numNewlines.length -1)

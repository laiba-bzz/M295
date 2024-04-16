const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, function (err, contents) {
  if (err) {
    return console.log(err);
  }

  const numNewlines = contents.toString().split('\n').length -1
  console.log(numNewlines);
});

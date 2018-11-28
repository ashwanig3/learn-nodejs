// Mixing Blocking and Non-blocking - Oops code!
const fs = require('fs');
// fs.readFile('/file.md', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// const syncData = fs.readFileSync('./file.md');
// console.log(syncData);

// findout what fs.unlinkSync and fs.unlink does?
// fs.unlinkSync('./file.md');

// Entirely Non-blocking - Good code!
fs.readFile('./file.md', (readFileErr, data) => {
  if (readFileErr) throw readFileErr;
  console.log(data);
  fs.unlink('/file.md', (unlinkErr) => {
    if (unlinkErr) throw unlinkErr;
  });
});
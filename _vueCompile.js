const fs = require('fs');
const _utils = require('./_utilities.js')
const arguments = process.argv.slice(2)
const fileData = { hasOld: Boolean, oldPath: String, hasNew: Boolean, newPath: String }
module.exports = { arguments: arguments, file: fileData };

arguments.forEach(_utils.checkArgs)
console.log('fileData',fileData)
console.log('args',arguments);
/* arguments.forEach(arg => {
  const checkOld = (arg.startsWith('--file=') && arg.length > 7)
  const checkNew = (arg.startsWith('--new-file=') && arg.length > 11)
  const checkNewExtensions = (arg.toLowerCase().endsWith('.vue') || arg.toLowerCase().endsWith('.js'))
  if (checkOld) {
    file_argument = arg.split('=')[1]
    file.oldPath = arg.split('=')[1]
    console.log('si',arg)
  } else if ( checkNew && checkNewExtensions ) {
    file.newPath = arg.split('=')[1]
    console.log('si',arg)
  }
}) */
/* console.log('file path:',file_argument);
fs.readFile(file_argument, 'utf-8', (err, data) => {
  if (err) throw err;
  const fileContents = data;
  text=data
  console.log('fileContents',fileContents,'\n');
}) */

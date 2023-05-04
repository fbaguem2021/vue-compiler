const arguments = process.argv.slice(2)
const fileData = { hasOld: Boolean, fileType: String, oldPath: String, hasNew: Boolean, newPath: String }

module.exports = { arguments: arguments, file: fileData };
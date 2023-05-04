const data = require('./_vueCompile.js')
function checkArgs(arg) {
    const checkOld = (arg.startsWith('--file=') && arg.length > 7)
    const checkNew = (arg.startsWith('--new-file=') && arg.length > 11)
    const checkNewExtensions = (arg.toLowerCase().endsWith('.vue') || arg.toLowerCase().endsWith('.js'))
    if (checkOld) {
        data.file.oldPath = arg.split('=')[1]
        data.file.hasOld = true
    }
    if ( checkNew && checkNewExtensions ) {
        data.file.newPath = arg.split('=')[1]
        data.file.hasNew = true
    }
}
module.exports = { checkArgs }
const data = require('./_variables.js')
module.exports = { checkArgs, get_help, getFormattingArray }
function checkArgs(arg) {
    const checkOld  = (arg.startsWith('--source=') && arg.length > 9)
    const checkType = (arg.startsWith('--type=') && arg.length > 7)
    const checkNew  = (arg.startsWith('--new-file=') && arg.length > 11)
    const checkNewExtensions = (arg.toLowerCase().endsWith('.vue') || arg.toLowerCase().endsWith('.js'))
    if (checkOld) {
        data.file.oldPath = arg.split('=')[1]
        data.file.hasOld = true
    }
    if ( checkType ) {
        data.file.fileType = arg.split('=')[1]
    }
    if ( checkNew && checkNewExtensions ) {
        data.file.newPath = arg.split('=')[1]
        data.file.hasNew = true
    }
}
function get_help() {
    const help = `\
NAME
        vue-compile.js - Gets a .js/.vue file, and transforms 
                         it into the filetype you want
EXAMPLE
    vue-compile.js [--type=<type-of-source-file>] [--source=<path-to-source-file>] 
                [--new-file=<path-to-new-file>]
OPTIONS
    --type      This option is for the type of the file that you want to compite (ej: --type=vue | --type=js )
    --source    This option is for the path to the original file
    --new-file  This option is for the path that will have the new compiled file

AUTHOR
    Francesc Bagué Martí
    Apr 2023
    --github=https://github.com/fbaguem2021/vue-compiler

{end-string}`
    return help.replace('\n{end-string}','')
}

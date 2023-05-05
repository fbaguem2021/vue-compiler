const data = require('./_variables.js')
const fs = require('fs')
module.exports = { 
    checkArgs(arg) {
        const checkOld  = (arg.startsWith('--source=') && arg.length > 9)
        const checkType = (arg.startsWith('--type=') && arg.length > 7)
        const checkNew  = (arg.startsWith('--new-file=') && arg.length > 11)
        const checkNewExtensions = (arg.toLowerCase().endsWith('.vue') || arg.toLowerCase().endsWith('.js'))
        if (checkOld) {
            data.fileInfo.oldPath = arg.split('=')[1]
            data.fileInfo.hasOld = true
        }
        if ( checkType ) {
            data.fileInfo.fileType = arg.split('=')[1]
        }
        // if ( checkNew && checkNewExtensions ) {
        if ( checkNew ) {
            data.fileInfo.newPath = arg.split('=')[1]
            data.fileInfo.hasNew = true
        }
    },
    get_help() {
        const help = `\
    NAME
            vue-compile.js - Gets a .js/.vue file, and transforms it into the filetype you want
    EXAMPLE
        vue-compile.js [--type=<type-of-source-file>] [--source=<path-to-source-file>] 
                    [--new-file=<path-to-new-file>]
    OPTIONS
        --type=     This option is for the type of the file that you want to compite (ej: --type=vue | --type=js )
        --source=   This option is for the path to the original file
        --new-file= This option is for the path that will have the new compiled file
    AUTHOR
        Francesc Bagué Martí, Apr 2023
        --github=https://github.com/fbaguem2021/vue-compiler
    {end-string}`
        return help.replace('\n{end-string}','')
    },
    readFile(async=false) {
        const file_name = data.fileInfo.oldPath
        if (async) {
            fs.readFile(file_name, 'utf-8', (err, file) => {
                if (err) throw err;
                data.readedFile = file
                // console.log('file-readed:\n',file)
            })
        } else {
            data.readedFile = fs.readFileSync(file_name, 'utf8');
            // console.log(data.readedFile);
        }
    },
    
}
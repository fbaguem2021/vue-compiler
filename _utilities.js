const data = require('./_variables.js')
const fs = require('fs')
module.exports = { 
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
    checkArgs(arg) {
        const fi = data.fileInfo,
            checkOld  = (arg.startsWith('--source=') && arg.length > 9),
            checkType = (arg.startsWith('--type=') && arg.length > 7),
            checkNew  = (arg.startsWith('--new-file=') && arg.length > 11),
            override  = (arg.startsWith('--override=') && arg.length == 15),
            checkNewExtensions = (arg.toLowerCase().endsWith('.vue') || arg.toLowerCase().endsWith('.js'))
        
        if (checkOld) {
            data.fileInfo.hasOld = true
            data.fileInfo.oldPath = arg.split('=')[1]
            data.fileInfo.oldExists = fs.existsSync(arg.split('=')[1])
        }
        // else { data.fileInfo.hasOld = false }

        if ( checkType ) {
            data.fileInfo.hasType = true
            data.fileInfo.fileType = arg.split('=')[1]
        }
        // else { data.fileInfo.hasType = false }
        
        if ( checkNew ) {
            data.fileInfo.hasNew = true
            data.fileInfo.newPath = arg.split('=')[1]
            data.fileInfo.newExists = fs.existsSync(arg.split('=')[1])
        }
        // else { data.fileInfo.hasNew = false }

        if ( override ) {
            data.fileInfo.hasOverride = true
            data.fileInfo.override = (arg.split('=')[1] === 'true')
        }
        // else { data.fileInfo.hasOverride = false }
        
        // console.log(arg,'\n',data.fileInfo);
    },
    readFile(async=false) {
        const file_name = data.fileInfo.oldPath
        if (async) {
            fs.readFile(file_name, 'utf-8', (err, file) => {
                if (err) throw err;
                data.readedFile = file
            })
        } else {
            data.readedFile = fs.readFileSync(file_name, 'utf8');
        }
    },
    writeFile(file_content, async=false) {
        const file_name=data.fileInfo.newPath, 
            showMessage=function(){ console.log('File created successfully!') }
        try {
            if (async) {
                fs.writeFile(file_name, file_content, error => {
                    if (error) throw error
                    showMessage()
                })
            } else {
                fs.writeFileSync(file_name, file_content)
                showMessage()
            }
        } catch (e) {
            console.log(e)
        }
    },
    validateArgs() {
        let error=Boolean, errorCode=Number
        error = false; errorCode= -1
        const fi = data.fileInfo, 
            showMessage = (e) => console.error(e[0], e[1]),
            messages = [
            ["ERROR","No '--source file' was passed"],["ERROR","The '--source' file doesn't exists"],
            ["ERROR","No '--new-file' was passed"],["ERROR","The '--new-file' exists but no '--overide' option was passed"]
        ];
        if (!fi.hasOld) {
            error=true; errorCode=0
        }
        if (!fi.oldExists) {
            error=true; errorCode=1
        }
        if (!fi.hasNew) { 
            error=true; errorCode=2
        }
        if ( (fi.newExists && !fi.hasOverride) || (fi.newExists && fi.override === 'false') ) {
            error=true; errorCode=3
        }
        if (error) showMessage(messages[errorCode])
        return !error
    },
    
}
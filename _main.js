const utilities = require('./_utilities.js'), 
    data = require('./_variables.js'),
    compiler = require('./_vueCompile.js')
const arguments = data.arguments;
let tags = Object, newFile = String;

if (arguments.length == 0 || arguments.length < 2) {
    const help = utilities.get_help()
    console.log(help);
} else {
    arguments.forEach(arg => {utilities.checkArgs(arg)})
    if (utilities.validateArgs()) {
        console.log(1);
        // console.log(1,'\n',data.fileInfo)
        utilities.readFile()
        tags = compiler.getVueTags(data.readedFile)
        newFile = String(compiler.format_vue_to_js(tags))
        utilities.writeFile(newFile)
    } else {
        console.log(2);
        // console.log(2,'\n',data.fileInfo);
    }
}
return
const utilities = require('./_utilities.js'), 
    data = require('./_variables.js'),
    compiler = require('./_vueCompile.js')
const arguments = data.arguments;
let tags = Object;

if (arguments.length == 0 || arguments.length < 2) {
    const help = utilities.get_help()
    console.log(help);
} else {
    // utilities.readFile()
    arguments.forEach(arg => {utilities.checkArgs(arg)})
    utilities.readFile()
    tags = compiler.getVueTags(data.readedFile)
    // console.log(tags);
    // console.log(tags.template);
    // console.log('\n');
    // console.log(tags.script);
    // console.log('\n');
    console.log(tags.style);
}
return
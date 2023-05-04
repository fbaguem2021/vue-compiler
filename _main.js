let utilities = require('./_utilities.js')
const arguments = process.argv.slice(2)
module.exports = { arguments: arguments }
if (arguments.length == 0 || arguments.length < 2) {
    const help = utilities.get_help()
    // var help = ''
    // console.log(style)
    // console.log(help,'color: red','')
    console.log(help);
}
const utilities = require('./_utilities'), variables = require('./_variables.js')
const regex = variables.regex
module.exports = {
    getVueTags(file) {
        return {
            template: file.match(regex.template)[1].trim(),
            script: file.match(regex.script)[1].trim(),
            style: file.match(regex.style)[0].trim()
        }
    },
    format_vue_to_js(tags) {
        const tmplt = `template: /*html*/\`\n${tags.template}\n${tags.style}\``;
        // export default {\r\n    data()
        // const style = 
        const position = 22
        const scrpt = `\
        ${tags.script.slice(0, position)}\
        ${tags.template}\n\
        ${tags.script.slice(position)}`
    }
}
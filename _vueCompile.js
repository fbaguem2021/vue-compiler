const utilities = require('./_utilities'), variables = require('./_variables.js')
const regex = variables.regex
module.exports = {
    getVueTags(file='') {
        return {
            template: file.match(regex.template)[0].trim(),
            script: file.match(regex.script)[1].trim(),
            style: file.match(regex.style)[0].trim(),
            test: file.match(regex.test),
            spaces: function(){ return this.template.match(regex.spaces)[0].slice(1, -1) }
        }
    },
    format_vue_to_js(tags='') {
        const tmplt = `template: /*html*/\`\n${tags.template}\n${tags.style}\``;
        const position = 18
        let nt = String, ns = Array, str = String

        nt = String(tmplt).replace(/^/,tags.spaces()).replaceAll('\n','\n'+tags.spaces())
        ns = [ tags.script.slice(0, position), tags.script.slice(position) ];
        str = ns[0] + nt + '\n' + ns[1]
        return str
    },
}
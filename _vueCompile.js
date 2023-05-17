const utilities = require('./_utilities'), variables = require('./_variables.js')
const regex = variables.regex
module.exports = {
    getVueTags(file='') {
        // console.log(file.match(regex.template)[1].trim());
        return {
            template: file.match(regex.template)[1].trim(),
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

        nt = String(tmplt)
                .replace(/^/,tags.spaces())
                .replaceAll('\n','\n'+tags.spaces())
                // .replaceAll('\n    ','')
        nt = format(nt, tags.spaces())
        // console.log(nt);
        ns = [ tags.script.slice(0, position), tags.script.slice(position) ];
        str = ns[0] + nt + ',\n' + ns[1]
        console.log(str);
        return str
    },
}
function format(nt, spaces) {
    // console.log('----');
    let nt_split  = nt.split('\n        <style')
    let lines     = nt_split[0].split('\n')
    let firstLine = lines.shift() + '\n' + lines.shift()
    let newLines  = lines.map( line => line.replace('    ',''));
    let newStr    = [firstLine, ...newLines].join('\n')

    let result = [newStr, nt_split[1]].join('\n        <style')
    let separed = result.split('\n')
    let spaced = separed.map( line => line.replace('    ',''))
    const newresult = spaced.join('\n')
    // console.log(newresult);
    // console.log(result);
    // let result = [newStr, nt_split[1]].join('\n        <style')
    // newresult = result.replace('    ', '').replaceAll('\n    ', '')
    
    return newresult
}
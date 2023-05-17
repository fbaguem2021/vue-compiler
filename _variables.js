const arguments = process.argv.slice(2)
const fileData = { 
    hasType: Boolean, fileType: String, hasOverride: Boolean, override: Boolean,
    hasOld: Boolean, oldPath: String, oldExists: Boolean,
    hasNew: Boolean, newPath: String, newExists: Boolean
}
fileData.hasOld=false; fileData.hasType=false; fileData.hasNew=false; fileData.hasOverride=false;
module.exports = { 
    arguments: arguments, 
    fileInfo: fileData,
    readedFile: String,
    regex: {
        template:   /<template>([\s\S]+)<\/template>/m,
        script:     /<script>([\s\S]+)<\/script>/m,
        style:      /<style(\s+scoped)?>([\s\S]+)<\/style>/m,
        test:       /template:([\s\S]+)`,/m,
        spaces:     /\n\s*(\S)/,
    }
};

const arguments = process.argv.slice(2)
const fileData = { hasOld: Boolean, fileType: String, oldPath: String, hasNew: Boolean, newPath: String }

module.exports = { 
    arguments: arguments, 
    fileInfo: fileData, 
    readedFile: String,
    regex: {
        template:   /<template>([\s\S]+)<\/template>/m,
        script:     /<script>([\s\S]+)<\/script>/m,
        style:      /<style(\s+scoped)?>([\s\S]+)<\/style>/m
    }
};
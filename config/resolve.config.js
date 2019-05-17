const path = require('path')
const paths = {
    rootpath: '../',
    staticPath: '../www'
}
const config = {
    alias: {
        src: path.resolve(__dirname, `${paths.rootpath}/src`),
        lib: path.resolve(__dirname, `${paths.rootpath}/lib`),
    }
}
module.exports = config

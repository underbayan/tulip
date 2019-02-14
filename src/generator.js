/**
 * @description extract propterties specified from a json Object using AST
 * @param {object} ast  ast should be plain object
 * @param {object} obj  obj should be a json object
 */
export default function generator(ast, obj) {
    if (!(typeof obj === 'object') || obj === null) return obj
    let result = {}
    const keys = Object.keys(ast)
    if (keys.length) {
        if (Object.prototype.toString.call(obj) === '[object Array]') {
            return obj.map(o => generator(ast, o))
        } else {
            keys.map(key => {
                result[key] = generator(ast[key], obj[key])
            })
        }
    } else {
        result = obj
    }
    return result
}

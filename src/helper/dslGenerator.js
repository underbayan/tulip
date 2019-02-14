import TOKENS from '../token'
const rand = range => Math.floor(Math.random() * range) || 1
export const generateTag = () =>
    '_' +
    Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1)
export default function dsl() {
    const depth = rand(300)
    const wide = rand(10)
    const aux = (depth, wide) => {
        let result = ''
        if (!depth || wide <= 0) return result
        result += TOKENS.BRACE_L
        while (wide--) {
            result += generateTag() + ' '
            result += aux(rand(depth) - 1, wide - 1)
        }

        result += TOKENS.BRACE_R
        return result
    }
    return aux(depth, wide)
}

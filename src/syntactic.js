import TOKENS from './token'
const { BRACE_L, BRACE_R, SQUARE_L, SQUARE_R } = TOKENS
const MAX_LEVEL = 12
const plainObject = _ => (Object.create ? Object.create(null) : {})
/**
 * @description get A AST from tokens array
 * @param {array} tokens
 */
export default function syntactic(tokens, level = 1) {
    let AST = plainObject()

    if (level > MAX_LEVEL) {
        //limit max level for security and performance
        return AST
    }
    let pToken = ''
    let token
    while ((token = tokens.shift())) {
        switch (token) {
            case BRACE_L:
                if (!pToken) AST = syntactic(tokens, ++level)
                else AST[pToken] = syntactic(tokens, ++level)
                break
            case BRACE_R:
                pToken = ''
                return AST
            default:
                pToken = token
                AST[token] = plainObject()
        }
    }
    return AST
}

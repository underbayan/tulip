import TOKENS from './token'
const { BRACE_L, BRACE_R, SQUARE_L, SQUARE_R } = TOKENS
const MAX_LENGTH = 2048
/**
 * @description tokenize the string
 * lexer won't deal with special char like \u2028 \u2029 ex.
 * @param {string} str
 * if in put is '{name make [fun]}' will return as ['{',name',make,'{','fun','}','}']
 * @retrun { [string] }
 */
export default function lexer(str) {
    const length = str.length
    /** limit str lenght and filter the content */
    if (length > MAX_LENGTH) return {}
    // str = str.replace(/[^\w\s{}\[\]]/gi, '')
    const toks = []
    let tmp
    let label = ''
    for (let i = 0; i < length; i++) {
        tmp = str.charAt(i)
        switch (tmp) {
            case '\r':
                continue
            case '\n':
            case '\t':
            case ' ':
            case SQUARE_L:
            case SQUARE_R:
            case BRACE_L:
            case BRACE_R:
                if (label) {
                    toks.push(label)
                    label = ''
                }
                if (tmp === BRACE_L || tmp === SQUARE_L) toks.push(BRACE_L)
                if (tmp === BRACE_R || tmp === SQUARE_R) toks.push(BRACE_R)
                break
            default:
                label += tmp
        }
    }
    return toks
}

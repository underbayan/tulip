import lexer from './lexer'
import syntactic from './syntactic'
import generator from './generator'

export default function compiler(str, obj) {
    const tokens = lexer(str)
    const ast = syntactic(tokens)
    const output = generator(ast, obj)
    return output
}

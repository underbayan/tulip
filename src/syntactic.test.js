const lexer = require('./lexer').default
const syntactic = require('./syntactic').default
const dsl = require('./helper/dslGenerator').default
test('', () => {
    const tokens = lexer(dsl())
    const ast = syntactic(tokens)
    console.log(ast)
    expect(2).toBe(2)
})

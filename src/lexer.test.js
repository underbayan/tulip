const lexer = require('./lexer').default
const dsl = require('./helper/dslGenerator').default
test('', () => {
    const str = dsl()
    const tokens = lexer(str)
    console.log(tokens)
    expect(tokens[0]).toBe('{')
})

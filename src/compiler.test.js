const compiler = require('./compiler').default
const JSON_DATA = {
    feeds: [
        { name: { person: { id: '__', age: 11, parent: { friend: [{ name: 'tony11', age: 23 }, { name: 'tony12', age: 23 }, { name: 'tony13', age: 23 }] } } } },
        {
            name: {
                person: {
                    id: '__',
                    age: 12,
                    parent: { friend: [{ name: 'tony21', age: 23 }, { name: 'tony22', age: 23 }, { name: 'tony23', age: 23 }, { name: 'tony24', age: 23 }] }
                }
            }
        },
        { name: { person: { id: '__', age: 13, parent: { friend: [{ name: 'tony31', age: 23 }, { name: 'tony32', age: 23 }, { name: 'tony33', age: 23 }] } } } },
        { 中国: { person: { id: '__', age: 14, parent: { friend: [{ name: 'tony34', age: 23 }, { name: 'tony35', age: 23 }] } } } }
    ]
}
const JSON_DATA_ARRAY = JSON_DATA['feeds']
let SPECIFIC_OBJ
SPECIFIC_OBJ = {
    _1: {
        _2: [
            { _3: { _4: [{ _5: '_51', _51: '_51' }, { _5: '_52' }, { _5: void 0 }, { _5: null }], _5: '_53' } },
            {},
            null,
            '__test__',
            void 0,
            '_test_',
            { _3: { _4: { _5: '___5' } } }
        ]
    },
    _1_1: { _2: {} }
}
SPECIFIC_OBJ._1_1._2 = SPECIFIC_OBJ

test('Test specific js objdata', () => {
    const result = compiler(` { _1 {_2[_3{_4[_5]}]} _1_1{_2 { _1 {_2[_3{_4[_5]}]} }}}`, SPECIFIC_OBJ)
    console.log('Test specific js objdata:', JSON.stringify(result))
})
test('Normal test:', () => {
    const result = compiler(` { name { person { id age parent{ friend[name] } region} 中国 }}`, JSON_DATA_ARRAY)
    console.log('Normal test:', JSON.stringify(result))
    expect(result[0].name.person.parent.friend[0].age).toBe(undefined)
})

test('return all array data', () => {
    const result = compiler(`{}`, JSON_DATA_ARRAY)
    console.log('return all array data: ', JSON.stringify(result))
    expect(result.length).toBe(4)
})
test('return all obj data', () => {
    const result = compiler(`{}`, JSON_DATA)
    console.log('return all obj data: ', JSON.stringify(result))
    expect(result['feeds'].length).toBe(4)
})

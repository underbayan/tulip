const Benchmark = require('benchmark')
const DSL_FOR_TEST = ` { name { person { id age parent { friend[name] } region } } }`
const JSON_STRING = ` { "name": { "person": { "id":1, "age":12, "parent": { "friend":{"name":12} }, "region":23 } } }`
const JSON_OBJ = require('./fakeData').default
const {
    default: tulip,
    lexer,
    syntactic,
    generator
} = require('../dev/tx-tulip')

const TOKENS = lexer(DSL_FOR_TEST)
const AST = syntactic(TOKENS)
const result1 = []
const result2 = []
const result3 = []
const result4 = []
new Benchmark.Suite('___TOCKENIZE___')
    .add('Tokenize', function() {
        lexer(DSL_FOR_TEST)
    })
    .add('String split', function() {
        DSL_FOR_TEST.split(' ')
    })
    .on('cycle', function(event) {
        result1.push(String(event.target))
        // console.log(String(event.target))
    })
    .on('complete', function() {
        console.log('\n========= TOKEN =====================\n', result1)
        // console.log('Fastest is ' + this.filter('fastest').map('name'))
    })
    // run async
    .run({ async: true, queued: true })
new Benchmark.Suite('___AST___')
    .add('AST', function() {
        syntactic(TOKENS)
    })
    .add('JSON Parse', function() {
        JSON.parse(JSON_STRING)
    })
    .on('cycle', function(event) {
        result2.push(String(event.target))
    })
    .on('complete', function() {
        console.log('\n========== AST =====================\n', result2)
    })
    // run async
    .run({ async: true, queued: true })
new Benchmark.Suite('___GEN___')
    .add('Filter Data By AST', function() {
        generator(AST, JSON_OBJ)
    })
    .add('Filter data directly', function() {
        const result = JSON_OBJ.map(i => ({
            name: {
                person: {
                    id: i.name.person.id,
                    age: i.name.person.age,
                    parent: {
                        friend: i.name.person.parent.friend.map(o => ({
                            name: o.name
                        }))
                    },
                    region: i.name.person.region
                }
            }
        }))
    })
    .on('cycle', function(event) {
        result3.push(String(event.target))
    })
    .on('complete', function() {
        console.log('\n========== GENERATOR =====================\n', result3)
    })
    // run async
    .run({ async: true, queued: true })
new Benchmark.Suite('___ALL___')
    .add('Filter Data By AST', function() {
        tulip(DSL_FOR_TEST, JSON_OBJ)
    })
    .add('Filter data directly', function() {
        const result = JSON_OBJ.map(i => ({
            name: {
                person: {
                    id: i.name.person.id,
                    age: i.name.person.age,
                    parent: {
                        friend: i.name.person.parent.friend.map(o => ({
                            name: o.name
                        }))
                    },
                    region: i.name.person.region
                }
            }
        }))
    })
    .add('JSON PARSE directly', function() {
        JSON.parse(JSON_STRING)
    })
    .on('cycle', function(event) {
        result4.push(String(event.target))
    })
    .on('complete', function() {
        console.log('\n========== ALL =====================\n', result4)
    })
    // run async
    .run({ async: true, queued: true })

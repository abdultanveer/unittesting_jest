const sum = require('./sum');


test('desc of add test',()=>{
    expect(sum(1, 5)).toBe(6);
})
var test = require('tape');
var logic = require('../public/js/logic.js');
const url="https://yts.am/api/v2/list_movies.json?"

// test('tape is working', function(t) {
//     const actual = 1;
//     const expected = 1;
//     t.equals(actual, expected, 'one should equal one');
//     t.end();
//   })

let actual = 0;
test("insure Status is equal 200",function(t){
    const expected = 200;
    logic.fetchApi(url,function(xhr){
        actual=xhr.status;
        t.equal(actual,expected,"should State equal 200");
        t.end();
    });
});
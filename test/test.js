var test = require("tape");
var logic = require("../public/js/logic.js");

var url = "https://yts.am/api/v2/list_movies.json?";


// test  State equal 200
test("insure Status is equal 200", function(test) {
  const expected = "ok";
  logic(url, function(xhr) {
    actual = xhr.status;
    test.equal(actual, expected, "should State equal 200");
    test.end();
  });
});


// test function to check return responseText 
test("insure responseText retreve object  ",function(test){
    const expected = typeof({});
    logic(url,function(xhr){
        actual=typeof(xhr.responseText);
        test.isNotEqual(actual,expected,'the responseText not  object');
        test.end();
    });
  
});

test("status_message  was successful ", function(test) {
    const expected = "Query was successful";
    logic(url, function(xhr) {
      actual = xhr.status_message;
      test.equal(actual, expected, " successful");
      test.end();
    });
  });
const test = QUnit.test;


function fizzBizz(num) {
    if(num % 5 === 0 && num % 3 === 0) {
        return 'fizzbizz';
    }
    else if(num % 3 === 0) {
        return 'fizz';
    }     
    else if(num % 5 === 0) {
        return 'bizz';
    }
}

test ('numbers that are divisible by 3, replace with fizz', function(assert) {
    const result = fizzBizz(3);
    assert.equal(result, 'fizz');
});

test ('numbers that are divisible by 5, replace with bizz', function(assert) {
    const result = fizzBizz(5);
    assert.equal(result, 'bizz');
});

test ('numbers that are divisible by 5 AND 3, replace with fizzbizz', function(assert) {
    const result = fizzBizz(15);
    assert.equal(result, 'fizzbizz');
});





//1. Numbers evenly divisable by 3 should be replace with `Fizz`
//1. Numbers evenly divisable by 5 should be replace with `Bizz`
////1. Numbers evenly divisable by 3 **and** 5 should be replace with `FizzBuzz`
//For example, calling the function with 16 would return:

//

const test = QUnit.test;


function fizzBizz(num) {
    if(num % 3 === 0) {
        return 'Fizz';
    }     
}

fizzBizz(3);


test ('numbers that are divisible by 3, replace with fizz'), function(assert) {
    let fizzBizz = true;
    assert.equal(true, 'Fizz');
};













//1. Numbers evenly divisable by 3 should be replace with `Fizz`
//1. Numbers evenly divisable by 5 should be replace with `Bizz`
////1. Numbers evenly divisable by 3 **and** 5 should be replace with `FizzBuzz`
//For example, calling the function with 16 would return:

//

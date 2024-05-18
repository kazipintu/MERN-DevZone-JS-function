// FUNCTION //

/* 1. Name function
   2. Anonymous function
   3. Arrow function
   4. Call-back function */

// Name function

{
  function leapYearCheck(data) {
    if (

      (data % 4 == 0 && data % 100 != 0) || (data % 400 == 0)

    ) {

      console.log('It is leap year');

    } else {
      console.log('It is not a leap year');
    }

  }

  leapYearCheck(2024)

}

// (condition) ? (return data) : (else data)

/*      true =  " ", "text", number, true
        false = undefined, "", 0, false, null, {}       */

{
  function dataChecking(data) {
    console.log(data);

  }
  dataChecking('It is a data');       // data - as a string
}

{
  function dataChecking(data) {
    console.log(data);

  }

  dataChecking({                       // data - as an object
    name: 'ABC',
    age: 35,

  });

}

{
  function dataChecking(data) {
    if (data == 1) {
      console.log(true);
    } else {
      console.log(false);
    }

  }

  dataChecking(1 + 1)                     // data - check with condition

}

{
  function dataChecking(data) {
    if (data == 1) {
      console.log(true);
    } else {
      console.log(false);
    }

  }

  dataChecking(0 + 1)                     // data - check with condition

}

{
  function dataChecking(data) {
    if (data == 1) {
      console.log(true);
    } else {
      console.log(false);
    }

  }

  dataChecking(2 - "1")                     // data - check with condition

}

{
  function dataChecking(data) {
    if (data == 1) {
      console.log(true);
    } else {
      console.log(false);
    }

  }

  dataChecking(0 + "1")                     // data - check with condition

}

{
  function dataChecking(data) {
    if (data == 1) {
      console.log(true);
    } else {
      console.log(false);
    }

  }

  dataChecking(0 + "1")                     // data - check leap year with condition

}

// { // Anonymous function
//   addEventListener('click', function () {

//   })
// }

{ // Arrow function
  const functionName = (dataParameter) => {

  }
}

{ // Call-back function
  const callBack = (data) => {
    nameFunction(data)
  }

}

{
  function func1(params) {
    console.log('abul ' + 'habul');
  }
  func1();
}

{
  let firstName = 'Afdal';
  let lastName = 'is a bad student'
  function fun2() {
    console.log(firstName + ' ' + lastName);
  }
  fun2()
}

{
  let x = 2;
  let y = 3;
  function fun3() {
    if (y > x) {
      console.log('y is greater than x: ' + y);
    }
    else {
      console.log('error');
    }
  }
  fun3();
}

{
  let first = 'Afdal';
  let last = 'is a bad student'
  function fun4() {
    let statement = first + ' ' + last;
    console.log(statement);
  }
  fun4();
}

{
  let a = 'mushfiq';
  let b = 4;
  function fun5() {
    let output = a + b;
    console.log(output);

  }
  fun5()
}

{
  let a = '50';
  let b = 4;
  function fun6() {
    let output = a + b;
    console.log(output);

  }
  fun6()
}

{
  let a = '50';
  let b = '4';
  function fun7() {
    let output = a + b;
    console.log(output);

  }
  fun7()
}

{
  let a = 50;
  let b = '4';
  function fun7() {
    let output = a + b;
    console.log(output);

  }
  fun7()
}

{
  let a = 50;
  let b = -'4';
  function fun7() {
    let output = a + b;
    console.log(output);

  }
  fun7()
}

{

  function fun8(a, b) {
    let name1 = a + ' ' + b;
    return console.log(name1);

  }
  fun8('Kazi', 'Afzaluddin')
}

{
  function startCooking() {
    console.log('Cook noodles for me');
  }
  startCooking() /// we call the function by name and ( ) bracket
}

{
  function cookFood(cook) {  // (parameter) of the function name within the bracket
    console.log(cook, 'is cooking noodles for me');
  }
  cookFood('brother')  //(value) of the parameter of the same function name
  cookFood('sister')
  cookFood('Amma')
}

{
  function name(params) {
    console.log(params, "is the parameter");
  }
  name('Here, number')
}

{
  function writeName(assignedParameter) {
    console.log(assignedParameter);
  }
  writeName('Write the value of assignedParameter')
}

{
  function WriteTwoNames(person, identity) {
    console.log(person, identity);
  }
  WriteTwoNames('Johny', 666);
}

{
  function twoNumbersAdd(number1, number2) {
    const add = number1 + number2;
    console.log(add);
  }
  twoNumbersAdd(15, 18);
}

{
  function mathRound(number1) {
    const roundedNumber = Math.round(number1);
    console.log(roundedNumber);
  }
  mathRound(45.102)
}


{
  function mathToFixed(number) {
    const toFixedNumber = number.toFixed(2);
    console.log(toFixedNumber);
  }
  mathToFixed(45.505);
  mathToFixed(45.504)
}

{
  function mathRandom() {
    const randomNumber = Math.random();
    console.log(randomNumber);
  }
  mathRandom()
}

{
  function mathRandom() {
    const randomNumber = Math.random() * 10000;
    const randomNumberInteger = parseInt(randomNumber)
    //console.log(randomNumberInteger);

    if (String(randomNumberInteger).length == 4) {
      console.log(randomNumberInteger);
      return randomNumberInteger;
    }
    else {
      console.log('error');
    }
  }
  mathRandom();
}

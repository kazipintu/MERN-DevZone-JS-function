// FUNCTION //

// function declaration
/*  1. Function Creation, 2. Function starting, 3. call, 4. Function Return (call)  */

/* 1. Name function
   2. Anonymous function
   3. Arrow function
   4. Call-back function */

// Name function

{
  function startFan() {
    console.log('function is running');
  }
  startFan()
}


{
  function takeShower(people) {
    console.log('Now in shower', people);
  }
  takeShower('Shorif bhai')
}


{
  function name(params) {
    console.log(params, 'parameters');
  }
  name('number')
}


{
  function startTheFan() { //function starting (parameter, lika a variable)
    console.log('Fan is started'); //rerturning
  }
  startTheFan()  //calling (input)
}


{
  function takeShower(people) {
    console.log(people, 'now in shower');
  }
  takeShower('Ali Bhaiya')
}


{
  function takeShower(people) {
    console.log(people);
  }
  takeShower('Ali Bhaiya')
}


{
  function takeShower(people, group) {
    console.log();
  }
  takeShower(101, 'who')
}


{
  function addTwoNumbers(num1, num2) {
    const total = num1 + num2;
    console.log(total);
  }
  addTwoNumbers(5, 10)
  addTwoNumbers(15, 10)
}


{
  function addTwoNumbers(num1, num2) {
    const total = num1 + num2;
    console.log(total);
    return total;
  }
  const dadi2 = addTwoNumbers(12, 15);
  console.log(dadi2);
}


{
  function blenderJuicer(l1, p1, s1, w1) {
    juice = l1 + p1 + s1 + w1;
    return juice;
  }
  const kabab = 'beefpaste'
  const filler = 'besan'
  const customer = blenderJuicer('lemon', 'pineapple', 'salt', 'water');
  console.log(customer);
  const maa1 = blenderJuicer('onion', 'ginger', 'garlic', 'salt');
  console.log(maa1 + kabab + filler);
}


{
  function whetherEvenOrOdd(numb) {
    if (numb == 0) {
      return "Not a natural number";
    }
    else {
      if (numb != 0 && numb % 2 == 0) {
        return "Even number"
      };
      return "Odd number"
    }
  }

  const mama = whetherEvenOrOdd(-325)
  console.log(mama);

  const result = whetherEvenOrOdd(5624)
  console.log(result);

  const maa = whetherEvenOrOdd(15264)
  console.log(maa);

  const baba = whetherEvenOrOdd(15635)
  console.log(baba);

  const vai = whetherEvenOrOdd(0)
  console.log(vai);

  const apu = whetherEvenOrOdd(-35)
  console.log(vai);
}


{
  function isLeapYear(year) {
    if ((year > 0 && year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0)) {
      return "Leap Year"
    }
    return "Not a Leap Year"
  }

  const time = isLeapYear(1300);
  console.log(time);

  const asif = isLeapYear(1500);
  console.log(asif);
}


{
  function addTwoNumbers(num1, num2) {
    const total = num1 + num2;
    console.log(total);
    return total;

  }
  const dadi1 = addTwoNumbers(12, 15);
  console.log(dadi1);
  const baba1 = addTwoNumbers(18, 20);
  console.log(baba1);
}


/*  ~ FACTORIAL ~  */

//3! = 3 * 2 * 1
//4!= 4 * 3 * 2 * 1
//5! = 5 * 4 * 3 * 2 * 1

{
  function calculateFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
      factorial = factorial * i;
    }
    return factorial
  }
  const alo = calculateFactorial(7);
  console.log(alo);
}


{
  function determineFactorial(number) {
    let factorial = 1;
    let i = 1;
    while (i <= number) {
      factorial = factorial * i;
      i++;
    }
    return factorial
  }
  const chand = determineFactorial(8);
  console.log(chand);
}


{
  function inchesToFeet(inches) {
    const feet = inches / 12;
    return feet
  }

  const result10 = inchesToFeet(2345);
  console.log(result10.toFixed(2));

  const maa2 = inchesToFeet(1402);
  console.log(maa2.toFixed(3));

  const baba2 = inchesToFeet(1305);
  console.log(baba2.toFixed(2));

  const vai2 = inchesToFeet(5201);
  console.log(parseFloat(vai2));

  const apu2 = inchesToFeet(76054);
  console.log(parseInt(apu2));
}


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

{
  function inchToFeet(number) {
    let result;
    result = number / '12';
    console.log(typeof (result));

  }
  inchToFeet('100');

}


{
  function meterToKm(distance) {
    let result;
    result = distance / '1000';
    console.log(result);

  }
  meterToKm('100');

}


{
  function isEven(number) {
    let isEven;
    isEven = (number % 2 == 0);
    console.log(isEven);

  }
  isEven(15)

}

{
  function isEven(number) {
    let isEven;
    isEven = (number % 2 == 0);
    if (isEven) {
      console.log('It is even number');
    }
    else {
      console.log('It is odd number');
    }

  }
  isEven(2)

}

// (condition) ? (return data) : (else data)

/*      true =  " ", "text", number, true, array.length
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



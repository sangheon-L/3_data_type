/*자료형 확인*/
var stringVar = '안녕하세요.';
console.log(typeof(stringVar));
var numberVar = 20210405;
console.log(typeof(numberVar));
var booleanVar = true;
console.log(typeof(booleanVar));
var functionVar = function(){};
console.log(typeof(functionVar));
var objectVar = {};
console.log(typeof(objectVar));

console.log('null type : '+typeof(null));
console.log('undefined type : '+typeof(undefined));

/*숫자 문자 연산*/
// console.log(typeof(1+'14'));   //넘버와 스트링이 합치면 스트링이된다 즉, 계산이 안됨
console.log(1+'4'+'5'+15);
console.log(1+4+5+15);


// var num = '';
// num += 1;

// 위에 것은 풀어쓰면 공백 +1 이니간 스트링으로 뜸

// num = num + 1;
// num = '' + 1;


// console.log(typeof(num))




/*숫자형 수자형 조합 연산*/
var numberVar = 50;
var numberVar2 = 10;
var sum = numberVar + numberVar2;


alert(numberVar+','+typeof(numberVar));
alert(numberVar2+','+typeof(numberVar2));
alert(sum+','+typeof(sum));

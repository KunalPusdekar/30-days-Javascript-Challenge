//LOOPS

//Day 4:

// *** Activity 1 : For Loop ***
//Task 1 :
for(let i=1; i<=10 ; i++){
      console.log(i);
}

//Task 2 :
for(let i=1 ; i<=10 ; i++)
{
    console.log(`5 * ${i} = ${i*5}`);
}

//  *** Activity 2 :While loop ***
//Task 3:
let sum=0;
let i=0;
while (i<11) {
  sum +=i;
  i++;
}
console.log(sum);

//Task 4:
let num=10;
while( num >0){
    console.log(num);
    num--;
}

//  *** Activity 3 : Do...While Loop ***
//Task 5;
let n=1;
do {
    console.log(n);
    n++;
} while (n<=5);

//Task 6:
let number =5;
let fact =1;
do{
   fact *= number;
   number--;
}while(number>=1);
console.log(fact);

// *** Activity 4 : Nested Loops ***
//Task 7:
    //pattern :*
    //         * *
    //         * * *  
    //         * * * *
    //         * * * * *
     
    let value=5
    for(let i=1 ; i<=value ;i++)
    {    let asterick="";
        for(let j=1; j<=i ; j++)
        {
            asterick +="* ";
        }
        console.log(asterick);
    }

// *** Activity 5 : Loop Control Statements ***
//Task 8:

//continue
for (let i = 1; i <= 10; i++) {
    if(i == 5)
    continue;
    console.log(i);
}

//Task 9:

//break
for(let i=1 ; i<= 10 ; i++)
{
    console.log(i);
    if(i==7)
    break;
}

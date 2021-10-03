
//ใช้ switch case
let year = 2002;

switch (year % 12){
    case 0 : 
        console.log ('monkey');
        break;
    case 1 :
        console.log ('rooster');
        break;
    case 2 :
        console.log ('dog');
        break;
    case 3 : 
        console.log ('pig');
        break;
    case 4 :
        console.log ('rat');
        break;
    case 5 :
        console.log ('ox');
        break;
    case 6 : 
        console.log ('tiger');
        break;
    case 7 :
        console.log ('rabbit');
        break;
    case 8 :
        console.log ('dragon');
        break;
    case 9 : 
        console.log ('snake');
        break;
    case 10 :
        console.log ('horse');
        break;
    case 11 :
        console.log ('sheep');
        break;
}

/*-------------------------------------------*/

//ใช้ Function
function zodiac(year) {
    return[
        'monkey','rooster','dog',
        'pig','rat','ox',
        'tiger','rabbit','dragon',
        'snake','horse','sheep'
    ]
    [Number(year) % 12];
};

console.log(zodiac('1900'));
console.log(zodiac(2002));
console.log(zodiac('2021'));


/*--------------------------------ที่อาจารย์ทำ--------------------------------------*/

function findZodiac(year){
    switch (year % 12) {
               case 0:
                   return zodiac.MONKEY;
               case 1:
                   return zodiac.ROOSTER;
               case 2:
                   return zodiac.DOG;
               case 3:
                   return zodiac.PIG;
               case 4:
                   return zodiac.RAT;
               case 5:
                   return zodiac.OX;
               case 6:
                   return zodiac.TIGER;
               case 7:
                   return zodiac.RABBIT;
               case 8:
                   return zodiac.DRAGON;
               case 9:
                   return zodiac.SNAKE;
               case 10:
                   return zodiac.HORSE;
               case 11:
                   return zodiac.SHEEP;
              
           }
    }
   
    const zodiac = {
      MONKEY: "monkey",
      ROOSTER: "rooster",
      DOG: "dog",
      PIG: "pig",
      RAT: "rat",
      OX: "ox",
      TIGER: "tiger",
      RABBIT: "rabbit",
      DRAGON: "dragon",
      SNAKE: "snake",
      HORSE: "horse",
      SHEEP: "sheep",
    };
   
    let year=prompt("Enter a year ");
    alert(findZodiac(year));
   

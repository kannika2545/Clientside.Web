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

"use strict"
function getResult(a,b,c){
    let discriminant = b**2 - 4 * a * c;
    let x = [];
    if(discriminant < 0){
        return x;
    }
    else if(discriminant == 0){
        x[0] = -b/(2*a);
    }
    else if(discriminant > 0){
        x[0] = (-b + Math.sqrt(discriminant))/(2 * a);
        x[1] = (-b - Math.sqrt(discriminant))/(2 * a);
    }
    return x;
}

function getAverageMark(marks){
    let sum = 0;
    let averageMark = 0;
    if(marks.length == 0){
        return 0;
    }
    else if(marks.length > 5){
        console.log('Колличество данных превышает установленное значение');
        marks.splice(5);
    for(let i = 0; i < marks.length; i++){
        sum += marks[i];  
        averageMark = sum/marks.length;
        } 
    } 
    else{
    for(let i = 0; i < marks.length; i++){
        sum += marks[i];  
        averageMark = sum/marks.length;
        } 
    }
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    let year = new Date().getFullYear();
    let age = year - dateOfBirthday.getFullYear();
    let result;
    if(age >= 18){
       result = `Не желаете ли олд-фэшн, ${name}?`;
    }
    else if(age < 18){
       result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
    return result;
}
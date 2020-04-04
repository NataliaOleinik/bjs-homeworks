"use strict"
function getSolutions (a,b,c){
    let D = b**2 - 4 * a * c;
    if(D < 0){
        return{
            D,
            roots: []
        }
    }
    if(D == 0){
        let x1 = -b/(2*a);
        return{
            D,
            roots: [x1]
        }
    }
    else if(D > 0){
        let x1 = (-b + Math.sqrt(D))/(2 * a);
        let x2 = (-b - Math.sqrt(D))/(2 * a);
        return{
            D,
            roots: [x1,x2]
        }
    }
}

function showSolutionMessage(a,b,c){
    let result = getSolutions(a,b,c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x2 + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if(result.D < 0){
        console.log(`Уравнение не имеет вещественных корней`);
    }
    if(result.D == 0){
        console.log(`Уравнение имеет один корень Х1 = ${result.roots[0]}`);
    }
    if(result.D > 0){
        console.log(`Уравнение имеет два корня. Х1 = ${result.roots[0]}, Х2 = ${result.roots[1]}`)
    }
}


function getAverageScore(data){
    let averageMarks = {};
    let sumAverageMarks = 0;
    let subjects = 0;
    for( let prop in data){
        averageMarks[prop] = getAverageMark(data[prop]);
        sumAverageMarks += averageMarks[prop];
        subjects++;
    }
    if (sumAverageMarks !== 0){
        averageMarks.average = sumAverageMarks / subjects;
    }
    else{
        averageMarks.average = 0;
    }
    return averageMarks;
}
function getAverageMark(marks){
    let sum = 0;
    let averageMark = 0;
    if(marks.length == 0){
        return 0;
    }
    else{
        for(let i = 0; i < marks.length; i++){
            sum += marks[i];
        }
        averageMark = sum / marks.length;
    }
    return averageMark;
}


function getPersonData(secretData){
    let personData = {};
    personData.firstName = getDecodedValue(secretData.aaa),
    personData.lastName = getDecodedValue(secretData.bbb);
    return personData;
} 

function getDecodedValue(secret){
    if(secret == 0){
        return 'Родриго';
    }
    else if(secret == 1){
        return 'Эмильо';
    }
}

let secretData = {
    aaa: 1,
    bbb: 0
}
getPersonData(secretData)
function getAnimalSound(animal) {
    if(animal == undefined){
        return null;
    }
    const sound = animal.sound;
    if(animal !== undefined){
        return sound;
    }
}


function getAverageMark(marks) {
    let sum = 0;
    let average = 0;
    let roundedAverage = 0;
    if(marks.length == 0){
        return 0;
    }
    for(let i = 0; i < marks.length; i++){
            sum += Number(marks[i]); 
        } 
        average = sum/marks.length;
        roundedAverage = Math.round(average);
    return roundedAverage;
}


function checkBirthday(birthday) {
    let now =  Date.now();
    birthday = new Date(birthday);
    let diff = now - birthday;
    let age = diff / ((((365 * 13) + (366 * 5)) / 18) * 1000 * 60 * 60 * 24);
    // return verdict = Math.floor(age);
    return verdict = (Math.floor(age) >= 18) ? true : false; 
}

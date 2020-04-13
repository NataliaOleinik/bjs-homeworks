class Weapon {
    constructor(name, attack, durability, range){
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
    }

    takeDamage(damage){
        this.durability -= damage;
        if(this.durability > 0){
            return this.durability;
        }
        else if(this.durability <= 0){
            return this.durability = 0;
        }
        else if(this.durability == Infinity){
            return Infinity;
        }
    }

    getDamage(){
        if(this.durability >= durability * 0.3){
            return this.attack;
        }
        else if(this.durability == 0){
            return this.attack = 0;
        }
        else{
            return this.attack/2;
        }
    }

    isBroken(){
        if(this.durability > 0){
            return false;
        }
        else{
            return true;
        }
    }
}

const arm = new Weapon('Рука', 1, Infinity, 1);
const bow = new Weapon('Лук', 10, 200, 3);
const sword = new Weapon('Меч', 25, 500, 1);
const knife = new Weapon('Нож', 5, 300, 1);
const staff = new Weapon('Посох', 8,300,2);

console.log(knife.name);
sword.takeDamage(5);
console.log(sword.durability);

class SuperWeapon extends Weapon{
    constructor(name, attack, durability, range){
        super(name,attack, durability, range);
    }
}

const longArm = new SuperWeapon('Длинный лук', 15, 4, bow.durability);
const axe = new SuperWeapon('Секира', 27, sword.durability, 800);
const stormStaff = new SuperWeapon('Посох Бури', 10, 3, staff.durability);

class Arm extends Weapon{}
class Bow extends Weapon{}
class Sword extends Weapon{}
class Knife extends Weapon{}
class Staff extends Weapon{}
class LongArm extends SuperWeapon{}
class Axe extends SuperWeapon{}
class StormStaff extends SuperWeapon{}
const redBow = new Bow();
console.log(bow.name)

class StudentLog{
    constructor(name){
        this.name = name;
        this.marks = [];
        this.totalSubjects = {};
    }
    getName(){
        return this.name;
    }
    addGrade(grade, subject){
        if(typeof grade !== Number || grade >= 6 || grade <= 0){
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
        }
        else{
            this.totalSubjects[subject].push(grade);
        }
        return this.totalSubjects.length;
    }
    getAverageBySubject(subject){
        let sum = 0;
        let totalSum;
        for(grade in this.marks){
            totalSum = sum += grade;
          }
        if(subject == undefined){
            return 0;
        }
        else{
            return totalSum / this.marks.length;
        }
    }
    getTotalAverage(){
       
    }
}
const log = new StudentLog('Вася Ианов');
console.log(log.getName);
console.log(log.addGrade(3, 'algebra'));

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
console.log (log.getAverageBySubject('algebra'));
console.log (log.getAverageBySubject('math'));
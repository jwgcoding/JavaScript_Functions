console.log("Hello World!\n==========\n");


// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    
for (let i = 1; i <= count; i++){
    if(i % 2 != 0){
        console.log(i)
         }
    
    }
}
printOdds(10);
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName,age){
    var aboveSixteen = `Congrats ${userName}, you can drive!`;
    var belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if(age >= 16){
        console.log(aboveSixteen);
    }
    else if (age < 16){
        console.log(belowSixteen);
    }
}
checkAge("Gary", 16);

// Exercise 3 Section

function quadrant (x,y){
    if (x > 0 && y > 0){
        return "Quadrant 1";
    }
    else if (x < 0 && y > 0){
        return "Quadrant 2";
    }
    else if (x < 0 && y < 0){
        return "Quadrant 3";
    }
    else if (x > 0 && y > 0){
        return "Quadrant 4";
    }
    else if (x == 0 && y != 0){
        return "X Axis";    
    }
    else if (x != 0 && y == 0){
        return "Y Axis";
    }
}
console.log(quadrant(0,100));

// Exercise 4 Section

function isTriangle(a,b,c){
    return a + b >= c || a + c >= b || b + c >= a;
}
function checkTriangle(a,b,c){
    let isValid = isTriangle(a,b,c);
    if(isValid){
        if(a==b && b == c ){
            return "Equilateral Triangle.";
        }
        else if 
            (a == b || b == c || a==c){
                return "Isosceles Triangle.";
            }
        else
         {
                return "Scalene Triangle."
        }
        
    }
    else 
        { 
            return "Not a valid triangle."
        }
}

console.log(checkTriangle(1,2,2));
console.log(checkTriangle(4,4,5));
console.log(checkTriangle(4,4,4));

// Exercise 5 Section

function dataPlanStatus(planLimit,day,usage){
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingData = planLimit - usage;
    let remainingDays = periodLength - day;
    let statusMsg;
    let projectedUsage = remainingDays * currentAvg;
    console.log(`You have ${day} days used, ${remainingDays} days remaining.`);
    console.log(`Average daily use: ${currentAvg} GB/day.`);

    if(currentAvg > projectedAvg){
        statusMsg = console.log(`You are EXCEEDING your average daily use of ${projectedAvg.toFixed(2)} GB/DAY, continuing this high usage, you'll end up using ${Math.abs(planLimit - (usage + projectedUsage))} gbs than allowed. 
To stay below your data plan, use no more than ${(remainingData / remainingDays).toFixed(2)} GB/day.`);
    }
    else if (currentAvg < projectedAvg){
        statusMsg = "You are currently under daily limit data use."
    }

    
}

dataPlanStatus(100,15,56);
// UC 1
// Checks if employee is present or absent
const IS_ABSENT = 0;
let empCheck = 0;
empCheck = Math.floor(Math.random()*10)%2;
if(empCheck==IS_ABSENT)
{
    console.log("employee is absent");
}
else
{
    console.log("employee is present");
}

// UC 2
// Calculates wage for employee
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
let empHrs=0;
empCheck=Math.floor(Math.random()*10)%3;
switch (empCheck)
{
    case IS_PART_TIME:
        empHrs=PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs=FULL_TIME_HOURS;
        break;
    default:
        empHrs=0;
}
let empWage=empHrs*WAGE_PER_HOUR;
console.log("Employee wage: "+empWage);

// UC 3
// Get working hours using function
function GetWorkingHours(empCheck)
{
    switch(empCheck)
    {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
            break;
        default:
            return 0;
    }
}
empCheck=Math.floor(Math.random()*10)%3;
empHrs=GetWorkingHours(empCheck);
console.log("UC3 Employee hours: "+empHrs);

// UC 4
// Calculates wage for a total month
const NO_OF_WORKING_DAYS=20;
for(let day=0; day<NO_OF_WORKING_DAYS; day++)
{
    empCheck=Math.floor(Math.random()*10)%3;
    empHrs+=GetWorkingHours(empCheck);
}
empWage=empHrs*WAGE_PER_HOUR;
console.log("UC4 Total Hrs: "+empHrs+" Employee Wage: "+empWage);

// UC 5
// Calculate employee wage for a maximmum of 100 hours
let dailyWages = [];
const MAX_HRS_IN_MONTH=100;
let dailyEmpHours = 0;
let totalEmpHrs=0;
let totalWorkingDays=0;
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NO_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    empCheck=Math.floor(Math.random()*10)%3;
    dailyEmpHours = GetWorkingHours(empCheck);
    totalEmpHrs += dailyEmpHours;
    dailyWages.push(dailyEmpHours*WAGE_PER_HOUR);

}
empWage=totalEmpHrs*WAGE_PER_HOUR;
console.log("UC5 Total No of Days: "+totalWorkingDays+" Total Hrs Worked: "+totalEmpHrs+ "Total Employee Wage: "+empWage);

// UC6 Store Daily Wage
dailyWages.forEach(p=> console.log("UC6 DailyWage on day is "+ p));
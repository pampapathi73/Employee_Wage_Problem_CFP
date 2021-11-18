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

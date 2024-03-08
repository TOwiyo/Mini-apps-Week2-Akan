const FFEMALE_NAMES=[
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"

];
const MALE_NAMES=[
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
];
const DAYS_OF_THE_WEEK=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

// calculate day of the week as an interger btween 0-6
function computeDayOfTheweek(){

    let MM = parseInt(getMonth());
    let DD = parseInt(getDay());
    let YY = (getYear());
    let CC = parseInt (YY.substring(0,2));
    YY=parseInt(YY.substring(2,4));

    let dayOfTheWeek =parseInt(CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) %
    7;
let updateddayoftheweek=dayOfTheWeek+1;
    return dayOfTheWeek;
    
}

function checkRadiobutton() { //check what button is selected and return it

    let gender = null;
    let ele = document.getElementsByName('gender');
      
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        gender = ele[i].value;
    }
    return gender;
}

function main(){ // compute for the Akan name and return it
    let akanName = null;
    let gender = getGender();
    let dayOfTheweek = computeDayOfTheweek();

    if(gender.toLocaleLowerCase().startsWith('m')){ // check if the gender is male
        akanName=MALE_NAMES[dayOfTheweek];
    } else{
        akanName= FFEMALE_NAMES[dayOfTheweek];
    }

    // check if valid inputs were provided otherwise the computation will result to undefined
    if (akanName==undefined){
        akanName="Error: please use number within the ranges provided."
    }
    // Output the name of the user for the birthday given
     document.getElementById("name_label").innerHTML = " " + akanName;
    
    
}
//get and validate the month
function getMonth(){
    let month = document.getElementById("month").value;
    if(month > 0  && month <=12){
    return month;
    }else{
        document.getElementById("month").value="";
        alert (" Month must be between 1 - 12.");
     
    }
}

//get and validate the year
function getYear(){

    let year = document.getElementById("year").value;
    if(year.length != 4){
        document.getElementById("year").value="";
        alert("year must be 4 digits i.e 1989");
    }else{

    return year;
    }
}
// get gender
function getGender(){    
    let gender = checkRadiobutton();
     return gender;
}
//get and validate the day
function getDay(){
    let day = document.getElementById("day").value;
    if(day > 0 && day<=31){
    return day;
    }else{
        document.getElementById("day").value="";
        alert (" Day must be between 1 - 31.");
    
    }
}

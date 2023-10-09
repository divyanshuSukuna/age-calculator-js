const ageInput=document.getElementById("dob");


function calculateAge() {

    const currentDate = new Date();
    const birthDate = new Date(ageInput.value);

    let ageInMilliseconds = currentDate - birthDate;

    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
    const years = Math.floor(ageInMilliseconds / millisecondsInYear);

    const remainingMilliseconds = ageInMilliseconds % millisecondsInYear;
    const months = Math.floor(remainingMilliseconds / (1000 * 60 * 60 * 24 * 30.44));

    const days = Math.floor((remainingMilliseconds % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));

    let remainingYears=document.getElementById("years");
    remainingYears.innerHTML=years;

    let remainingMonths=document.getElementById("months");
    remainingMonths.innerHTML=months;

    let remainingDays=document.getElementById("days");
    remainingDays.innerHTML=days;


    
}
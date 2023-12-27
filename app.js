

function shuffle() {

    const image = document.getElementById("img");
    let dice = Math.ceil(Math.random() * 6);


    // console.log(image);

    image.setAttribute("src", `/img/${dice}.png`)

    console.log(dice);

}
function anim() {
    setTimeout(shuffle, 500);
    const image = document.getElementById("img");
    image.setAttribute("src", "dice.gif");
}

// document.getElementById('generate').addEventListener('click', function () {
//     var length = document.getElementById('length').value;
//     var uppercase = document.getElementById('uppercase').checked;
//     var lowercase = document.getElementById('lowercase').checked;
//     var numbers = document.getElementById('numbers').checked;
//     var symbols = document.getElementById('symbols').checked;

//     document.getElementById('password').value = generatePassword(length, uppercase, lowercase, numbers, symbols);
// });
// function generatePassword(length, uppercase, lowercase, numbers, symbols) {
//     var charset = '';
//     var password = '';

//     if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
//     if (numbers) charset += '0123456789';
//     if (symbols) charset += '!@#$%^&*()_+[]{}|;:,.<>?';

//     for (var i = 0; i < length; i++) {
//         var randomIndex = Math.floor(Math.random() * charset.length);
//         password += charset.charAt(randomIndex);

//         // console.log(randomIndex);
//     }

//     return password;
// }



function checkAge() {
    let birthdayDate = document.getElementById('birthdayDate').value;
    let ageResult = document.getElementById("ageResult")

    if (birthdayDate) {
        let birthdayObj = new Date(birthdayDate);
        let currentYear = new Date();


        let Year = currentYear.getFullYear() - birthdayObj.getFullYear();
        let month = currentYear.getMonth() - birthdayObj.getMonth();
        let day = currentYear.getDate() - birthdayObj.getDate();
        let time = currentYear.getTime() - birthdayObj.getTime();

        let minutes = Math.floor(time / (1000 * 60));
        let hours = Math.floor(time / (1000 * 60 * 60));
        let seconds = Math.floor((time / 1000));
        let days = Math.floor(time / (1000 * 60 * 60 * 24));

        console.log(days)

        if (day < 0) {
            month--;
            // Calculate the days in the birth month
            let daysInBirthMonth = new Date(currentYear.getFullYear(), currentYear.getMonth(), 0).getDate();

            // console.log(daysInBirthMonth)
            day += daysInBirthMonth;
            // console.log(day)
        }


        if (month < 0) {
            Year--;
            month += 12;
        }


        console.log(typeof currentYear.getDate());
        console.log(typeof birthdayObj.getDate());

  
        // ageResult.innerHTML = (`${Year} years ${month} months and ${day} days. </br> or ${Year * 12 + month} Months and ${day} days. </br> or ${days} Days </br> or ${hours} Hours </br> or ${minutes} Minutes </br> or ${seconds} seconds`)
        document.querySelector("#ageResult").style.display='flex'
        document.querySelector("#year").innerHTML = `${Year}`
        document.querySelector("#month").innerHTML = `${month}`
        document.querySelector("#day").innerHTML = `${day}`
    }


}


//  Ramzan Count Down 

const countDown = new Date("Mar 24, 2024 00:00:00").getTime();

// console.log(countDown);

function ramzanCOuntDown() {

    let currentTime = new Date().getTime();

    // console.log(currentTime)

    let difference = countDown - currentTime;

    // console.log(difference);

    let ramzanDays = Math.floor (difference / (1000 * 60 * 60 * 24) );

    let ramzanHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    let ramzanMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    let ramzanSeconds = Math.floor((difference % (1000 * 60 )) /  1000);

    // console.log(`Days ${ramzanDays} Hours ${ramzanHours} Minutes ${ramzanMinutes} Seconds ${ramzanSeconds}`)

    document.querySelector("#remDay").innerHTML = ramzanDays;
    document.querySelector("#remHour").innerHTML = ramzanHours;
    document.querySelector("#remMinute").innerHTML = ramzanMinutes;
    document.querySelector("#remSecond").innerHTML = ramzanSeconds;


    
}

setInterval(ramzanCOuntDown , 1000);
ramzanCOuntDown()
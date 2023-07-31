let today = new Date();
let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day = weekDay[today.getDay()];
let date = today.getDate();
if( date === 1){date += "st"}  
if( date === 2){date += "nd"}  
if( date === 3){date += "rd"} 
if( date > 3){date += "th"} 
let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let monthCurrent = month[today.getMonth()];

document.getElementById("date").innerHTML = `${day}, ${date} ${monthCurrent}`;

let currentHr = today.getHours()
let wish
if (currentHr < 12) {
  wish = "Good Morning"
} else if (currentHr < 18) {
  wish = "Good Afternoon"
} else {
  wish = "Good Evening"
}

document.getElementById("wish").innerHTML = wish;


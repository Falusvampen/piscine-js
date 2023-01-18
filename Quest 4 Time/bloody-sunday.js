// Instructions
// Let's eliminate Sundays by taking them out of the calendar, making a week only six days long, from "Monday" to "Saturday".

// Create a function called bloodySunday that takes a Date as an argument and returns the weekday as a string.

// 01/01/0001 is a Monday.


function bloodySunday(date) {
    let date001 = new Date("0001-01-01")
    let result = date-date001;
    let second = (result * 0.001)
    let calcul = (second / 3600) / 24

    switch (calcul % 6) {
        case 0: 
            return "Monday"
        case 1:
            return "Tuesday"
        case 2: 
            return "Wednesday"
        case 3:
            return "Thursday"
        case 4: 
            return "Friday"
        case 5:
            return "Saturday"
        default:
            return "Error"
    }
}
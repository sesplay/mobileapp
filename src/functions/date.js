const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

export function dateFormat(date) {
    let newDate = new Date(date)
    return `${newDate.getDate()} ${months[newDate.getMonth()]}`
}
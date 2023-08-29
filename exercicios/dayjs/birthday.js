const dayjs = require("dayjs")

function birthday(date){
    const birthday = dayjs(date)
    const today = dayjs() // ver qual é o dia de hj

    const ageInYears = today.diff(birthday, 'year')
    const nextBirthday = birthday.add(ageInYears + 1, 'year')
    const daysToNextBirthday = nextBirthday.diff(today, 'day') + 1

    console.log(`idade: ${ageInYears}
    next birthday: ${nextBirthday.format("DD/MM/YYYY")}
    dias até completar ${ageInYears + 1} anos: ${daysToNextBirthday}`)
}

birthday("09-22-2004")
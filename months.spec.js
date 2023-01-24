// Given a number, return the month using switch statements
// ex: getMonth(0) => January, getMonth(1) => February, etc.

function getMonth(N) {
    switch(N){
        case 0:
            return "January";
            break;
        case 1:
            return "February";
            break;
        case 2:
            return "March";
            break;
        case 3:
            return "April";
            break;
        case 4:
            return "May";
            break;
        case 5:
            return "June";
            break;
        case 6:
            return "July";
            break;
        case 7:
            return "August";
            break;
        case 8:
            return "September";
            break;
        case 9:
            return "October";
            break;
        case 10:
            return "November";
            break;
        case 11:
            return "December";
            break;
    }
}

test("May", () => {
    expect(getMonth(4)).toBe("May");
})

test("December", () => {
    expect(getMonth(11)).toBe("December");
})

test("January", () => {
    expect(getMonth(0)).toBe("January");
})
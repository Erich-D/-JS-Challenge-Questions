// Given a number, return the month using switch statements
// ex: getMonth(0) => January, getMonth(1) => February, etc.

function getMonth(N) {
    
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
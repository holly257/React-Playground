import leapYear from './index';

it('should not be a leap year if divisible by 100, not 400', () => {
    const input = 1900;
    const expectedOutput = false;
    expect(leapYear(input)).toBe(expectedOutput);
})

it('should be a leap year if divisible by 4, not 100', () => {
    const input = 1984;
    const expectedOutput = true;
    const actualOutput = leapYear(input);
    expect(actualOutput).toBe(expectedOutput);
})

it('should NOT be a leap year if divisible by 100, not 400', () => {
    expect(leapYear(1700)).toBe(false);
})

it('should be a leap year if divisible by 4, not 100', () => {
    expect(leapYear(2020)).toBe(true);
})

it('should NOT be a leap year if not divisible by 4', () => {
    expect(leapYear(1641)).toBe(false);
})

it('should be a leap year if divisible by 400', () => {
    expect(leapYear(2000)).toBe(true);
})

it('should throw an error for years before 1582', () => {
    expect(() => {
        leapYear(1580);
    }).toThrow();
})



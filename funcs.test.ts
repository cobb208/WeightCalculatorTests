import { calculateRequiredPlates } from './funcs';
import PlateResult from './models';


const result135: PlateResult[] = [
    { weight: 45, count: 2},
    { weight: 35, count: 0},
    { weight: 25, count: 0},
    { weight: 15, count: 0},
    { weight: 10, count: 0},
    { weight: 5, count: 0},
    { weight: 2.5, count: 0},
];

const result220: PlateResult[] = [
    { weight: 45, count: 2},
    { weight: 35, count: 2},
    { weight: 25, count: 0},
    { weight: 15, count: 0},
    { weight: 10, count: 0},
    { weight: 5, count: 2},
    { weight: 2.5, count: 2},
];

const result315: PlateResult[] = [
    { weight: 45, count: 6},
    { weight: 35, count: 0},
    { weight: 25, count: 0},
    { weight: 15, count: 0},
    { weight: 10, count: 0},
    { weight: 5, count: 0},
    { weight: 2.5, count: 0},
]



test('135 on a 45 bench should be: 2 45s', () => {
    expect(calculateRequiredPlates(135)).toStrictEqual(result135);
});

test('220 on a 45 bench should be: 2 45s 2 35s 2 5s, 2 2.5s', () => {
    expect(calculateRequiredPlates(220)).toStrictEqual(result220);
});

test('315 on a 45 bench should be: 6 45s', () => {
    expect(calculateRequiredPlates(315)).toStrictEqual(result315);
});
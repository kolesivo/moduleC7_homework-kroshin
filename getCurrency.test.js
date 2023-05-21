const getCurrency = require('./getCurrency');

test('7 коробок', () => {
    expect(getCurrency(7)).toBe('7 рублей');
});

const list = {
    0: '0 рублей',
    1: '1 рубль',
    101: '101 рубль',
    11: '11 рублей',
    21: '21 рубль',
    54: '54 рубля',
    121224: '121224 рубля',
    80: '80 рублей',
};

for(let i in list) {
    test(list[i], () => {
        expect(getCurrency(+i)).toBe(list[i]);
    })
}

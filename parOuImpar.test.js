const parOuImpar = require ('./parOuImpar');

test('parOuImpar verificar se 7 é impar', () => {
    expect(parOuImpar(7)).toBe('ímpar');
});

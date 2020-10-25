import { add } from './calculator';

describe('Calculator', () => {

  it('Should add 2 numbers', () => {
    expect(add(2, 2)).toEqual(4)
  });

  it('Should add 3 numbers', () => {
    expect(add(2, 2, 2)).toEqual(6)
  });

})

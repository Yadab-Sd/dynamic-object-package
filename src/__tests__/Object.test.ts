import { getDynamicObject } from '../index';

test('Check Object', () => {
  expect(
    getDynamicObject(
      [
        { a: 1, b: 2 },
        { a: 2, b: 2 },
        { a: 1, b: 3 },
      ],
      'a',
    ),
  ).toStrictEqual({
    1: [
      { a: 1, b: 2 },
      { a: 1, b: 3 },
    ],
    2: [{ a: 2, b: 2 }],
  });
});

test('Check Object With Skiping Key', () => {
  expect(
    getDynamicObject(
      [
        { a: 1, b: 2 },
        { a: 2, b: 2 },
        { a: 1, b: 3 },
      ],
      'a',
      true,
    ),
  ).toStrictEqual({
    1: [{ b: 2 }, { b: 3 }],
    2: [{ b: 2 }],
  });
});

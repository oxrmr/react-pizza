import { classNames } from './classNames';

describe('classNames', () => {
  it('should return the concatenated class names correctly', () => {
    // 1: when only className is provided
    expect(classNames('button-sm')).toBe('button-sm');

    // 2: when className and mods are provided
    expect(classNames('button-sm', { active: true })).toBe('button-sm active');

    // 3: when className and additional are provided, but mods is empty
    expect(classNames('button-sm', {}, ['dark'])).toBe('button-sm dark');

    // 4: when className and additional are provided
    expect(classNames('button-sm', { outlined: true }, ['light'])).toBe('button-sm outlined light');

    // 5: when className is empty, and no mods and additional are provided
    expect(classNames('')).toBe('');
  });

  it('should ignore falsy value in mods and addition array', () => {
    expect(classNames('', { active: false }, [''])).toBe('');
  });
});

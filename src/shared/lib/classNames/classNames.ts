/* eslint-disable @typescript-eslint/no-unused-vars */
type Mods = Record<string, boolean | string>;

export const classNames = (className: string, mods: Mods = {}, additional: string[] = []) => {
  return [
    className,
    ...Object.entries(mods)
      .filter(([key, value]) => Boolean(value))
      .map(([key, value]) => key),
    ...additional.filter(Boolean),
  ].join(' ');
};

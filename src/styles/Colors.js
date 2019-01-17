// @flow

const black = '#000000';
const blue = '#165A78';
const esBrightBlue = '#24B5C9';
const white = '#FFFFFF';
const lightGrey = '#EAEAE8';

// General theme color
export const primaryColor = '#03a9f4';
export const primaryColorLight = '#67daff';
export const primaryColorDark = '#007ac1';

// export const secondaryColor = '#546e7a';
// export const secondaryColorLight = '#819ca9';
// export const secondaryColorDark = '#29434e';

export const secondaryColor = '#00838f';
export const secondaryColorLight = '#4fb3bf';
export const secondaryColorDark = '#005662';

export const backgroundColor = '#F5F5F6';

// Text color
export const brightText = white;
export const darkText = black;

export const colorGraph1 = primaryColor;
export const colorGraph2 = secondaryColor;

export const getColor = (props: any) => eval(props.palette);

export type Color =
  | 'primaryColor'
  | 'secondaryColor'
  | 'brightText'
  | 'darkText'
  | 'colorGraph1'
  | 'colorGraph2';

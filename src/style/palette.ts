const defaultPalette = {
  whites: [
    '#ffffff',
    '#E5E5E5',
    '#CCCCCC',
    '#B2B2B2',
    'rgba(255,255,255,.5)',
    'rgba(255,255,255,.1)',
  ],
  blacks: [
    '#000000',
    '#111111',
    '#222222',
    '#333333',
    'rgba(0,0,0,.5)',
    'rgba(0,0,0,.3)',
    'rgba(0,0,0,.1)',
  ],

  themeIcons: { light: ['#f5dd4b', '#E5E5E5'], dark: ['#767577', '#828080'] },

  success: '#33cd5f',
  warning: '#ff5a00',
  error: '#ef473a',
  misc: '#886aea',
  dark: '#444444',

  transparent: 'transparent',
}

export const palette = {
  light: {
    ...defaultPalette,
    brand: ['#f6b033', '#ea4c1a', '#c2471b'],
    background: defaultPalette.whites[4],
    text: defaultPalette.blacks[3],
  },
  dark: {
    ...defaultPalette,
    brand: ['#8461f9', '#3e40f8', '#fb86a0'],
    background: defaultPalette.blacks[2],
    text: defaultPalette.whites[0],
  },
}

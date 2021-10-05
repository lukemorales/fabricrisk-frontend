import { createStitches } from '@stitches/react';

const config = createStitches({
  theme: {
    colors: {
      background: '#0c0e12',
      shapes: '#faf8f8',

      text: '#222222',

      'button-text': '#ffffff',
      'button-bg': '#406593',
      'button-hover': '#396a9b',
      'button-active': '#334c69',

      'input-untouched': '#e9f0f1',
      'input-active': '#4a5464',

      'error-text': '#ce3a36',
      'error-bg': '#f7d0d1',
    },
  },
});

export const { globalCss, styled } = config;

export const globalStyles = globalCss({
  '@import':
    "url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap')",

  '*': {
    margin: 0,
    padding: 0,
    border: 0,
    listStyle: 'none',
    boxSizing: 'border-box',
  },

  'html, body, #root': {
    minHeight: '100%',
  },

  body: {
    margin: 0,
    color: '$text',
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },

  'body, #root': {
    background: '$background',
    minHeight: '100vh',
    position: 'relative',
    display: 'grid',
    placeContent: 'center',
  },

  '#root': {
    height: '100%',
  },

  'body, input, button': {
    font:
      "1rem/1.48 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji','Segoe UI Emoji', 'Segoe UI Symbol'",
    fontWeight: 400,
  },

  'h1, h2, h3, strong': {
    fontWeight: 600,
  },

  'h4, h5, h6': {
    fontWeight: 500,
  },

  'h1, h2, h3, h4, h5, h6': {
    marginBottom: 16,
  },

  p: {
    marginBottom: 8,
  },

  a: {
    textDecoration: 'none',
    color: 'inherit',
    background: 'none',
    fontWeight: 600,
    cursor: 'pointer',
    border: 0,

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  button: {
    border: 0,
    padding: 0,
    background: 'none',

    '&:not(:disabled)': {
      cursor: 'pointer',
    },
  },

  'a, button': {
    '-webkit-tap-highlight-color': 'transparent',
  },

  img: {
    imageRendering: 'pixelated',
  },

  ul: {
    listStyle: 'none',
    textAlign: 'left',
    padding: 0,
  },
});

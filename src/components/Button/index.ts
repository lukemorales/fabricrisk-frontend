import { styled } from '../../styles';

export const Button = styled('button', {
  padding: '8px 20px',
  borderRadius: 4,
  transition: '180ms ease-in-out',

  variants: {
    variant: {
      primary: {
        background: '$button-bg',
        color: '$button-text',

        '&:hover': {
          background: '$button-hover',
        },

        '&:active': {
          background: '$button-active',
        },
      },
      secondary: {
        border: '1px solid $button-bg',

        '&:hover': {
          background: '$button-hover',
          color: '$button-text',
        },

        '&:active': {
          background: '$button-active',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
});

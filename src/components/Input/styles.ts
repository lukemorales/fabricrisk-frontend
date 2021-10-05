import { styled } from '../../styles';

export const Label = styled('label', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

  '& > span': {
    display: 'block',
    marginBottom: 4,
  },

  '& + &': {
    marginTop: 16,
  },
});

export const Input = styled('input', {
  width: '100%',
  padding: '8px 16px',
  borderRadius: 4,
  background: '$input-untouched',
  border: '1px solid transparent',

  variants: {
    filled: {
      true: {
        borderColor: '$input-active',
      },
    },
  },
});

export const ErrorMessage = styled('div', {
  marginTop: 8,
  padding: '4px 8px',
  borderRadius: 4,
  fontSize: 14,
  background: '$error-bg',
  color: '$error-text',
});

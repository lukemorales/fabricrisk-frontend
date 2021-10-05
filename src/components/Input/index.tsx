import { ComponentPropsWithoutRef, useEffect, useState } from 'react';

import { FieldError, useFormContext } from 'react-hook-form';

import * as S from './styles';

type InputElementProps = ComponentPropsWithoutRef<'input'> & {
  name: string;
  label: string;
};

type InputProps = Omit<InputElementProps, 'value' | 'children'>;

export const Input = (props: InputProps) => {
  const { register, formState, watch } = useFormContext();

  const [isFilled, setIsFilled] = useState(false);

  const {
    name,
    id,
    type = 'text',
    required,
    disabled,
    className,
    label,
    ...attrs
  } = props;

  const inputValue = watch(name, '');
  const inputError = formState.errors[name] as FieldError;

  const identifier = id || name;

  useEffect(() => {
    setIsFilled(!!inputValue);
  }, [inputValue]);

  return (
    <S.Label htmlFor={identifier} className={className} {...attrs.tabIndex}>
      <span>{label}</span>

      <S.Input
        id={identifier}
        type={type}
        disabled={disabled}
        readOnly={disabled}
        filled={isFilled}
        {...attrs}
        {...register(name, {
          required,
        })}
      />

      {inputError && <S.ErrorMessage>{inputError.message}</S.ErrorMessage>}
    </S.Label>
  );
};

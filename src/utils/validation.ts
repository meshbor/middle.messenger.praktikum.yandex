/* eslint-disable no-restricted-syntax */
export type TFieldNamesKeys = keyof typeof FIELD_NAMES;

export type TFormData = [TFieldNamesKeys, string];

export type TInput = { name: TFieldNamesKeys, value: string }

type TErrors = Partial<Record<string, boolean>>;

export enum FIELD_NAMES {
  first_name = "first_name",
  second_name = "second_name",
  login = "login",
  email = "email",
  oldPassword = "oldPassword",
  password = "password",
  repeatPassword = "repeatPassword",
  phone = "phone",
  message = "message",
}

const PATTERNS: Record<TFieldNamesKeys, RegExp> = {
  [FIELD_NAMES.first_name]: /^[А-ЯЁA-Z]{1}([а-яёa-z]|-[А-ЯЁA-Zа-яёa-z]{1}[а-яёa-z])*$/,
  [FIELD_NAMES.second_name]: /^[А-ЯЁA-Z]{1}([а-яёa-z]|-[А-ЯЁA-Zа-яёa-z]{1}[а-яёa-z])*$/,
  [FIELD_NAMES.login]: /^(?=.*?([a-zA-Z]|-|_))(\w|-|_){3,20}$/,
  [FIELD_NAMES.email]: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
  [FIELD_NAMES.phone]: /^\+?\d{10,15}$/,
  [FIELD_NAMES.message]: /[\s\S]+/,
  [FIELD_NAMES.oldPassword]: /^(?=.*?([A-Z]))(?=.*?\d)(\w|-|_){8,40}$/,
  [FIELD_NAMES.password]: /^(?=.*?([A-Z]))(?=.*?\d)(\w|-|_){8,40}$/,
  [FIELD_NAMES.repeatPassword]: /^(?=.*?([A-Z]))(?=.*?\d)(\w|-|_){8,40}$/,
};

const highlightErrors = (errors: TErrors, selector = '.inputItem', errorClass = 'inputItem-error') => {
  const inputWrappers: HTMLElement[] = Array.from(document.querySelectorAll(selector));

  inputWrappers.forEach((inputWrapper) => {
    const input = inputWrapper.querySelector('input') as HTMLInputElement;

    errors[input.name]
      ? inputWrapper.classList.add(errorClass)
      : inputWrapper.classList.remove(errorClass);
  });
};

const validateFormData = ([fieldName, value]: TFormData): boolean => PATTERNS[fieldName].test(value);

const validateInput = ({ name, value } : TInput) => PATTERNS[name].test(value);

export const formValidation = (formData: FormData, selector?: string, errorClass?: string) => {
  const errors: TErrors = {};

  for (const inputItem of formData) {
    if (!validateFormData(inputItem as TFormData)) {
      errors[inputItem[0]] = true;
    }
  }

  highlightErrors(errors, selector, errorClass);

  if (!Object.keys(errors).length) {
    return null;
  }
};

export const inputValidation = (input: HTMLInputElement, errorClass = 'inputItem-error') => {
  let inputError = null;
  const parentElement = input.parentElement as HTMLElement;

  if (!validateInput(input as TInput)) {
    inputError = true;
  }

  console.log('input', input);
  console.log('parentNode', input.parentElement);

  inputError
    ? parentElement.classList.add(errorClass)
    : parentElement.classList.remove(errorClass);
};

export const inputValidationHandler = (e: Event) => {
  inputValidation(e.target as HTMLInputElement);
};

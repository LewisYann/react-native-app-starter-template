import * as Yup from 'yup';

const requiredMsg = 'Ce champs est requis';
const emailFormatMsg = "L'adresse email entré est invalide";
const confirmPwdErrorMsg = 'Le mot de passe entré ne correspond pas';
const pwdRegExErrorMsg = 'Le mot de passe doit contenir 6 caractères au moins';

const requiredString = Yup.string().required(requiredMsg);
const emailValidation = requiredString.email(emailFormatMsg);

export const forgotPassFormValidationSchema = Yup.object({
  email: emailValidation,
});

const passwordRegex = '^.{6,}$';

const confirmPasswordSchema = (ref = 'password') =>
  requiredString.oneOf([Yup.ref(ref)], confirmPwdErrorMsg);

const passwordSchema = requiredString.matches(
  new RegExp(passwordRegex),
  pwdRegExErrorMsg,
);

export const resetPasswordValidationSchema = Yup.object({
  password: passwordSchema,
  passwordConfirmation: confirmPasswordSchema(),
});

export const loginFormValidationSchema = Yup.object({
  phone: requiredString.min(8, 'Le numéro doit contenir 8 chiffres au moins'),
  password: passwordSchema,
});

export const registerFormValidationSchema = Yup.object({
  email: requiredString.email(emailFormatMsg),
  password: passwordSchema,
  confirmPassword: confirmPasswordSchema(),
  lastName: requiredString,
  firstName: requiredString,
});

export const updateFormValidationSchema = Yup.object({
  email: requiredString.email(emailFormatMsg),
  lastName: requiredString,
  firstName: requiredString,
});

export const resetPasswordStepOneFormValidationSchema = Yup.object({
  email: requiredString.email(emailFormatMsg),
});

export const resetPasswordStepTwoFormValidationSchema = Yup.object({
  password: passwordSchema,
  confirmPassword: confirmPasswordSchema(),
});

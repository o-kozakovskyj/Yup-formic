import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";

import {
  FormContainer,
  FieldGroup,
  StyledField,
  StyledButton,
  ErrorText,
  Label,
} from "./RegistrationForm.styled";
import AsyncUsernameField from "./AsyncUsernameField";

const stepSchemas = [
  Yup.object({
    username: Yup.string().required("Обов’язкове поле"),
    email: Yup.string().email("Невірна адреса").required("Обов’язкове поле"),
  }),
  Yup.object({
    password: Yup.string()
      .min(6, "Мінімум 6 символів")
      .required("Обов’язкове поле"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Паролі не співпадають")
      .required("Обов’язкове поле"),
  }),
];

const MultiStepForm = () => {
  const [step, setStep] = useState(0);

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const next = () => setStep((s) => s + 1);
  const prev = () => setStep((s) => s - 1);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={stepSchemas[step]}
      onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
    >
      {({ errors, touched }) => (
        <FormContainer>
          <Form>
            {step === 0 && (
              <>
               
                <AsyncUsernameField />

                <FieldGroup>
                  <Label>Email</Label>
                  <StyledField name="email" type="email" />
                  {touched.email && errors.email && (
                    <ErrorText>{errors.email}</ErrorText>
                  )}
                </FieldGroup>
              </>
            )}

            {step === 1 && (
              <>
                <FieldGroup>
                  <Label>Password</Label>
                  <StyledField name="password" type="password" />
                  {touched.password && errors.password && (
                    <ErrorText>{errors.password}</ErrorText>
                  )}
                </FieldGroup>
                <FieldGroup>
                  <Label>Confirm Password</Label>
                  <StyledField name="confirmPassword" type="password" />
                  {touched.confirmPassword && errors.confirmPassword && (
                    <ErrorText>{errors.confirmPassword}</ErrorText>
                  )}
                </FieldGroup>
              </>
            )}

            <div>
              {step > 0 && (
                <StyledButton type="button" onClick={prev} $secondary>
                  Назад
                </StyledButton>
              )}
              {step < stepSchemas.length - 1 && (
                <StyledButton type="button" onClick={next}>
                  Далі
                </StyledButton>
              )}
              {step === stepSchemas.length - 1 && (
                <StyledButton type="submit">Відправити</StyledButton>
              )}
            </div>
          </Form>
        </FormContainer>
      )}
    </Formik>
  );
};

export default MultiStepForm;

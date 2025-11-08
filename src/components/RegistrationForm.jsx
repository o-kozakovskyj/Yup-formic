
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import {
  FormContainer,
  StyledField,
  StyledSelect,
  StyledTextarea,
  StyledCheckbox,
  StyledButton,
  ErrorText,
  FieldGroup,
  SkillGroup,
  Label,
} from "./RegistrationForm.styled";

const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Мінімум 3 символи")
    .max(20, "Максимум 20 символів")
    .required("Обов’язкове поле"),
  email: Yup.string().email("Невірна адреса").required("Обов’язкове поле"),
  password: Yup.string()
    .min(6, "Мінімум 6 символів")
    .required("Обов’язкове поле"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Паролі не співпадають")
    .required("Обов’язкове поле"),
  age: Yup.number().min(18, "Мінімум 18 років").required("Обов’язкове поле"),
  gender: Yup.string().required("Оберіть стать"),
  hobbies: Yup.array().min(1, "Оберіть хоча б одне хобі"),
  bio: Yup.string().max(200, "Максимум 200 символів"),
  terms: Yup.boolean().oneOf([true], "Потрібно погодитись з умовами"),
  website: Yup.string().url("Невірний формат URL"),
  birthDate: Yup.date()
    .max(new Date(), "Дата народження не може бути у майбутньому")
    .required("Обов’язкове поле"),
  country: Yup.string().required("Оберіть країну"),
  skills: Yup.array().of(
    Yup.object({
      name: Yup.string().required("Введіть назву навички"),
      level: Yup.string().required("Оберіть рівень"),
    })
  ),
});

const initialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  age: "",
  gender: "",
  hobbies: [],
  bio: "",
  terms: false,
  website: "",
  birthDate: "",
  country: "",
  skills: [{ name: "", level: "" }],
};

const RegistrationForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
    >
      {({ values, errors, touched }) => (
        <FormContainer>
          <Form>
            <FieldGroup>
              <Label>Ім’я користувача</Label>
              <StyledField name="username" />
              {touched.username && errors.username && (
                <ErrorText>{errors.username}</ErrorText>
              )}
            </FieldGroup>

            <FieldGroup>
              <Label>Email</Label>
              <StyledField name="email" type="email" />
              {touched.email && errors.email && (
                <ErrorText>{errors.email}</ErrorText>
              )}
            </FieldGroup>

            <FieldGroup>
              <Label>Пароль</Label>
              <StyledField name="password" type="password" />
              {touched.password && errors.password && (
                <ErrorText>{errors.password}</ErrorText>
              )}
            </FieldGroup>

            <FieldGroup>
              <Label>Підтвердіть пароль</Label>
              <StyledField name="confirmPassword" type="password" />
              {touched.confirmPassword && errors.confirmPassword && (
                <ErrorText>{errors.confirmPassword}</ErrorText>
              )}
            </FieldGroup>

            <FieldGroup>
              <Label>Вік</Label>
              <StyledField name="age" type="number" />
              {touched.age && errors.age && <ErrorText>{errors.age}</ErrorText>}
            </FieldGroup>

            <FieldGroup>
              <Label>Стать</Label>
              <StyledSelect as="select" name="gender">
                <option value="">Оберіть</option>
                <option value="male">Чоловік</option>
                <option value="female">Жінка</option>
              </StyledSelect>
              {touched.gender && errors.gender && (
                <ErrorText>{errors.gender}</ErrorText>
              )}
            </FieldGroup>

            <FieldGroup>
              <Label>Хобі</Label>
              <div>
                <label>
                  <Field type="checkbox" name="hobbies" value="reading" />
                  Читання
                </label>
                <label>
                  <Field type="checkbox" name="hobbies" value="sports" />
                  Спорт
                </label>
                <label>
                  <Field type="checkbox" name="hobbies" value="music" />
                  Музика
                </label>
              </div>
              {touched.hobbies && errors.hobbies && (
                <ErrorText>{errors.hobbies}</ErrorText>
              )}
            </FieldGroup>

            <FieldGroup>
              <Label>Біографія</Label>
              <StyledTextarea as="textarea" name="bio" />
              {touched.bio && errors.bio && <ErrorText>{errors.bio}</ErrorText>}
            </FieldGroup>

            <FieldGroup>
              <Label>Вебсайт</Label>
              <StyledField name="website" />
              {touched.website && errors.website && (
                <ErrorText>{errors.website}</ErrorText>
              )}
            </FieldGroup>

            <FieldGroup>
              <Label>Дата народження</Label>
              <StyledField name="birthDate" type="date" />
              {touched.birthDate && errors.birthDate && (
                <ErrorText>{errors.birthDate}</ErrorText>
              )}
            </FieldGroup>

            <FieldGroup>
              <Label>Країна</Label>
              <StyledSelect as="select" name="country">
                <option value="">Оберіть</option>
                <option value="ua">Україна</option>
                <option value="pl">Польща</option>
                <option value="de">Німеччина</option>
              </StyledSelect>
              {touched.country && errors.country && (
                <ErrorText>{errors.country}</ErrorText>
              )}
            </FieldGroup>

            <FieldArray name="skills">
              {({ remove, push }) => (
                <div>
                  <Label>Навички</Label>
                  {values.skills.map((skill, index) => (
                    <SkillGroup key={index}>
                      <StyledField
                        name={`skills[${index}].name`}
                        placeholder="Назва навички"
                      />
                      <StyledSelect as="select" name={`skills[${index}].level`}>
                        <option value="">Рівень</option>
                        <option value="beginner">Початковий</option>
                        <option value="intermediate">Середній</option>
                        <option value="advanced">Просунутий</option>
                      </StyledSelect>
                      <StyledButton
                        type="button"
                        onClick={() => remove(index)}
                        $secondary
                      >
                        -
                      </StyledButton>
                      {touched.skills?.[index]?.name &&
                        errors.skills?.[index]?.name && (
                          <ErrorText>{errors.skills[index].name}</ErrorText>
                        )}
                      {touched.skills?.[index]?.level &&
                        errors.skills?.[index]?.level && (
                          <ErrorText>{errors.skills[index].level}</ErrorText>
                        )}
                    </SkillGroup>
                  ))}
                  <StyledButton
                    type="button"
                    onClick={() => push({ name: "", level: "" })}
                  >
                    + Додати навичку
                  </StyledButton>
                </div>
              )}
            </FieldArray>

            <FieldGroup>
              <label>
                <StyledCheckbox type="checkbox" name="terms" />Я погоджуюсь з
                умовами
              </label>
              {touched.terms && errors.terms && (
                <ErrorText>{errors.terms}</ErrorText>
              )}
            </FieldGroup>

            <StyledButton type="submit">Надіслати</StyledButton>
          </Form>
        </FormContainer>
      )}
    </Formik>
  );
};

export default RegistrationForm;

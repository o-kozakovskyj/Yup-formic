
import { useField } from "formik";
import { ErrorText, FieldGroup, Label, StyledField } from "./RegistrationForm.styled";


const fakeTakenUsernames = ["admin", "test", "user123"];

const AsyncUsernameField = () => {
  const [field, meta, helpers] = useField("username");

  const handleBlur = async (e) => {
    field.onBlur(e);
    if (!field.value) return;

    helpers.setError(undefined);
    // Імітація API виклику
    await new Promise((r) => setTimeout(r, 1000));

    if (fakeTakenUsernames.includes(field.value.toLowerCase())) {
      helpers.setError("Це ім’я вже зайнято");
    }
  };

  return (
    <FieldGroup>
      <Label>Ім’я користувача</Label>
      <StyledField {...field} onBlur={handleBlur} placeholder="Username" />
      {meta.touched && meta.error && <ErrorText>{meta.error}</ErrorText>}
    </FieldGroup>
  );
};

export default AsyncUsernameField;

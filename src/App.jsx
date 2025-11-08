import MultiStepForm from "./components/MultiStepForm";
import RegistrationForm from "./components/RegistrationForm";


function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Formik + Yup Advanced Demo</h1>
      <RegistrationForm />
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Multi-step Form
      </h2>
      <MultiStepForm />
    </>
  );
}

export default App;

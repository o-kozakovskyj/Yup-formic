
import styled from "styled-components";
import { Field } from "formik";

export const FormContainer = styled.div`
  max-width: 600px;
  margin: 30px auto;
  padding: 30px;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const FieldGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: 600;
  margin-bottom: 6px;
`;

export const StyledField = styled(Field)`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const StyledSelect = styled(Field)`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

export const StyledTextarea = styled(Field)`
  min-height: 80px;
  resize: vertical;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 6px;
`;

export const StyledCheckbox = styled(Field)`
  margin-right: 8px;
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 0.9rem;
  margin-top: 4px;
`;

export const StyledButton = styled.button`
  background: ${(p) => (p.$secondary ? "#ccc" : "#007bff")};
  color: ${(p) => (p.$secondary ? "#333" : "white")};
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: ${(p) => (p.$secondary ? "#aaa" : "#0056b3")};
  }
`;

export const SkillGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

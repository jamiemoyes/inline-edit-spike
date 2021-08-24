import { useState } from "react";
import styled, { css } from "styled-components";
import { EditAlt, Check, X } from "@styled-icons/boxicons-regular";
import FormLayout from "./FormLayout";
import { useFormik } from "formik";
function EditableForm({ initResource, updateResource }) {
  const [editable, setEditable] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: initResource.title,
      desc: initResource.desc,
      type: initResource.type,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
      updateResource(values);
      setEditable(!editable);
    },
    validateOnBlur: false,
    validateOnChange: false,
  });

  const toggleEditable = (e) => {
    e.preventDefault();
    setEditable(!editable);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    toggleEditable(e);
    formik.resetForm();
  };

  return (
    <div>
      <FormLayout>
        <StyledForm onSubmit={formik.handleSubmit}>
          <EditableInput
            data-keyname="title"
            disabled={!editable}
            id="title"
            large
            {...formik.getFieldProps("title")}
          />
          <EditableInput
            data-keyname="type"
            id="type"
            disabled={!editable}
            {...formik.getFieldProps("type")}
          />
          <EditableTextArea
            data-keyname="desc"
            id="desc"
            disabled={!editable}
            {...formik.getFieldProps("desc")}
          />

          <ButtonRow>
            {editable ? (
              <>
                <ActionButton bgColor="#f2f2f2" onClick={handleCancel}>
                  <CancelIcon />
                </ActionButton>
                <ActionButton bgColor="#8c78ff" type="submit">
                  <ConfirmIcon />
                </ActionButton>
              </>
            ) : (
              <ActionButton bgColor={"#8c78ff"} onClick={toggleEditable}>
                <EditIcon />
              </ActionButton>
            )}
          </ButtonRow>
        </StyledForm>
      </FormLayout>
      <Notes>🕺 No external dependencies</Notes>
      <Notes>🕺 State control</Notes>
      <Notes>🙅 No HTML element injection</Notes>
      <Notes>🙅 More CSS required</Notes>
    </div>
  );
}

export default EditableForm;

const EditableInput = styled.input`
  transition: 0.4s;
  padding: 0.5em;
  font-size: 1em;
  border: none;
  background: #f2f2f2;
  border-bottom: 1px solid black;
  text-overflow: ellipsis;
  &:disabled {
    cursor: text;
    color: black;
    border: none;
    background: white;
    border-bottom: 1px solid transparent;
  }
  &:focus {
    outline: none;
  }
  ${({ large }) =>
    large &&
    css`
      font-size: 2em;
      font-weight: 650;
      padding: 0;
      width: 100%;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
    `}
`;

const EditableTextArea = styled.textarea`
  resize: none;
  transition: 0.4s;
  padding: 0.5em;
  font-size: 1em;
  border: none;
  background: #f2f2f2;
  border-bottom: 1px solid black;
  text-overflow: ellipsis;
  &:disabled {
    cursor: text;
    color: black;
    border: none;
    background: white;
    border-bottom: 1px solid transparent;
  }
  &:focus {
    outline: none;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledForm = styled.form`
  display: grid;
  max-width: 100%;
  grid-gap: 0.5em;
  min-width: 0;
`;

const ActionButton = styled.button`
  font-size: 1em;
  padding: 1em;
  background: ${({ bgColor }) => bgColor};
  border: 0;
  border-radius: 0.2em;
  -webkit-box-shadow: 5px 27px 50px -1px rgba(0, 0, 0, 0.28);
  box-shadow: 5px 27px 50px -1px rgba(0, 0, 0, 0.28);
  margin: 0.5em;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    -webkit-box-shadow: 5px 20px 30px -1px rgba(0, 0, 0, 0.28);
    box-shadow: 5px 20px 30px -1px rgba(0, 0, 0, 0.28);
  }
`;

const EditIcon = styled(EditAlt)`
  width: 1em;
  height: 1em;
`;
const ConfirmIcon = styled(Check)`
  width: 1em;
  height: 1em;
`;

const CancelIcon = styled(X)`
  width: 1em;
  height: 1em;
`;

const Notes = styled.p`
  text-align: center;
  color: darkslategray;
  font-family: Courier, monospace;
  font-size: 0.8em;
`;

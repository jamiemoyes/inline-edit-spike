import { useFormik } from "formik";
import { useState } from "react";
import styled, { css } from "styled-components";
import { EditAlt, Trash, X } from "@styled-icons/boxicons-regular";

function FullForm({ initResource, updateResource }) {

  const [editable, setEditable] = useState(false);

  const formik = useFormik({
    initialValues: initResource,
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
    <StyledFormContainer>
      <GridForm onSubmit={formik.handleSubmit}>
        {!editable && (
          <ActionRow>
            <EditIcon onClick={toggleEditable} /> <TrashIcon /> <ExitIcon />
          </ActionRow>
        )}

        <EditableLabel
          id="title"
          disabled={!editable}
          {...formik.getFieldProps("title")}
          large
        />
        <EditableTextArea
          id="desc"
          disabled={!editable}
          {...formik.getFieldProps("desc")}
        />
        <Label>
          <a target="__blank" href={initResource.link}>
            {initResource.link}
          </a>
        </Label>
	{/* TODO: Set initial value */}
        <StyledSelect
          id="type"
          {...formik.getFieldProps("type")}
          disabled={!editable}
        >
          <option>Frontend</option>
          <option>Backend</option>
        </StyledSelect>
        <Label>
          <span>{initResource.type}</span>
        </Label>
        <ImageContainer src={initResource.img} editable={editable} />
        {editable && (
          <FormControlsRow>
            <StyledButton type="button" onClick={handleCancel}>
              Cancel
            </StyledButton>
            <StyledButton type="submit" background>
              Save
            </StyledButton>
          </FormControlsRow>
        )}
      </GridForm>
    </StyledFormContainer>
  );
}

export default FullForm;

const GridForm = styled.form`
  display: grid;
  grid-template: repeat(7, auto) / 1fr 1fr;
  grid-gap: 1em;
  transition: 0.4s;
  a {
    color: blue;
    text-decoration: none;
  }
`;

const FormControlsRow = styled.div`
  grid-column: 2;
  display: flex;
  justify-content: space-around;
  padding: 1em;
`;
const StyledButton = styled.button`
  min-width: 5em;
  padding: 0.5em 1em;
  border: 0;
  font-family: avenir;
  font-size: 1em;
  cursor: pointer;
  background: none;
  border-radius: 0.3em;
  ${({ background }) =>
    background &&
    css`
      background: black;
      color: white;
    `}
`;
const ImageContainer = styled.div`
  transition: 0.4s;
  grid-row: ${({ editable }) => (editable ? "1 / 7" : "2 / 8")};
  min-height: 10em;
  grid-column: 2;
  background: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  border-radius: 2em;
  -webkit-box-shadow: 5px 27px 50px -1px rgba(0, 0, 0, 0.28);
  box-shadow: 5px 27px 50px -1px rgba(0, 0, 0, 0.28);
`;

const StyledFormContainer = styled.div`
  width: 40em;
  min-height: 10em;
  background: white;
  border-radius: 2em;
  -webkit-box-shadow: 5px 27px 50px -1px rgba(0, 0, 0, 0.28);
  box-shadow: 5px 27px 50px -1px rgba(0, 0, 0, 0.28);
  padding: 2em;
`;

const StyledSelect = styled.select`
  transition: 0.4s;
  font-size: 1em;
  padding: 1em;
  border-radius: 0.8em;
  &:disabled {
    border-radius: 0;

    color: black;
    background: white;
    font-size: 1em;
    opacity: 1;
    border: none;
    appearance: none;
    padding: 0;
  }
`;

const EditableLabel = styled.input`
  transition: 0.4s;
  background: white;
  border: none;
  font-size: 1em;
  padding: 1em;
  border: 1px solid purple;
  border-radius: 0.3em;
  &:disabled {
    padding: 0;
    color: black;
    cursor: text;
    border: 1px solid transparent;
  }
  width: 100%;
  ${({ large }) =>
    large &&
    css`
      font-family: avenir;
      font-size: 2em;
      font-weight: bolder;
      padding: 0 0.5em;
      width: calc(100% - 1em);
      grid-row: 1;
    `}
`;

const EditableTextArea = styled.textarea`
  background: white;
  border: none;
  font-size: 1em;
  padding: 1em;
  height: 5em;
  resize: none;
  font-family: inherit;
  border: 1px solid purple;
  transition: 0.4s;
  border-radius: 0.6em;
  &:disabled {
    padding: 0;
    color: black;
    cursor: text;
    border: 1px solid transparent;
  }
`;

const Label = styled.span``;

const ActionRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-column: 2;
`;

const EditIcon = styled(EditAlt)`
  width: 1.5em;
  height: 1.5em;
  cursor: pointer;
  margin: 0 .5em;
  border-radius: 50%;
  padding: .5em;
  transition: 0.2s;
  &:hover {
    background: lightgray;
  }
`;
const TrashIcon = styled(Trash)`
  width: 1.5em;
  height: 1.5em;
  cursor: pointer;
  margin: 0 .5em;
  padding: .5em;

`;
const ExitIcon = styled(X)`
  width: 1.5em;
  height: 1.5em;
  cursor: pointer;
  margin: 0 .5em;
    padding: .5em;

`;

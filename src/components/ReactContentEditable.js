import React, { createRef, useState } from "react";
import ContentEditable from "react-contenteditable";
import FormLayout from "./FormLayout";
import styled from "styled-components";
import { EditAlt, Check, X } from "@styled-icons/boxicons-regular";

function ReactContentEditable({ initResource, updateResource }) {
  const [editable, setEditable] = useState(false);
  const [resource, setResource] = useState(initResource);

  const toggleEditable = (e) => {
    e.preventDefault();
    setEditable(!editable);
  };
  const handleSave = (e) => {
    e.preventDefault();
    toggleEditable(e);
    updateResource(resource);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    toggleEditable(e);
    setResource(initResource);
  };

  const handleEdit = (e, name) => {
    console.log(e.target);
    const newResource = { ...resource };
    newResource[name] = e.target.value;
    console.log(newResource);
    setResource(newResource);
  };
  return (
    <div>
      <FormLayout>
        <StyledForm>
          <ContentEditable
            html={`<h1>${resource.title}</h1>`}
            disabled={!editable}
            onChange={(e) => handleEdit(e, "title")}
          />
	  <ContentEditable
            html={`<textarea>${resource.desc}</textarea>`}
            disabled={!editable}
            onChange={(e) => handleEdit(e, "desc")}
          />   
          <ContentEditable
            html={resource.type}
            disabled={!editable}
            onChange={(e) => handleEdit(e, "type")}
          />
          <ButtonRow>
            {editable ? (
              <>
                <ActionButton bgColor="#f2f2f2" onClick={handleCancel}>
                  <CancelIcon />
                </ActionButton>
                <ActionButton bgColor="#8c78ff" onClick={handleSave}>
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
      <Notes>🕺 HTML element injection</Notes>
      <Notes>🕺 State control</Notes>
      <Notes>🙅 Editing can be buggy</Notes>
      <Notes>🙅 Overflow issues</Notes>
      <Notes>🙅 No support for textarea</Notes>
    </div>
  );
}

export default ReactContentEditable;

const StyledForm = styled.form`
  display: grid;
  max-width: 100%;
  grid-gap: 1em;
  min-width: 0;
  h1 {
    margin: 0;
  }
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

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Notes = styled.p`
  text-align: center;
  color: darkslategray;
  font-family: Courier, monospace;
  font-size: 0.8em;
`;

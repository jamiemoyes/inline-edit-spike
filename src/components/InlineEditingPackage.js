import React, { useState } from "react";
import EditableLabel from "react-inline-editing";
import FormLayout from "./FormLayout";
import styled from "styled-components";

export default function InlineEditingPackage({ initResource, updateResource }) {
  const [editable, setEditable] = useState(false);
  const [resource, setResource] = useState(initResource);

  const handleEdit = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <FormLayout>
        <StyledForm>
          <h1>
            <EditableLabel text={resource.title} onChange={handleEdit} />
          </h1>
          <EditableLabel text={resource.desc} />
          <EditableLabel text={resource.type} />
        </StyledForm>
      </FormLayout>
      <Notes>🙅 No state control option</Notes>
    </div>
  );
}

const StyledForm = styled.form`
  display: grid;
  max-width: 100%;
  grid-gap: 1em;
  min-width: 0;
  h1 {
    margin: 0;
  }
`;

const Notes = styled.p`
  text-align: center;
  color: darkslategray;
  font-family: Courier, monospace;
  font-size: 0.8em;
`;

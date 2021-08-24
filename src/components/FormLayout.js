import React from "react";
import styled from "styled-components";

function FormLayout({ children }) {
  return <FormCard>{children}</FormCard>;
}

export default FormLayout;

const FormCard = styled.div`
  background: white;
  padding: 2em;
  border-radius: 3em;
  width: 20em;
  -webkit-box-shadow: 5px 27px 50px -1px rgba(0, 0, 0, 0.28);
  box-shadow: 5px 27px 50px -1px rgba(0, 0, 0, 0.28);
`;


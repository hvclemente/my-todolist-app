import React, { useState } from 'react';
import { getNewId } from '../services/idService';
import styled from 'styled-components';

const StyledForm: React.ComponentType<any> = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
`;

const StyledInputText: React.ComponentType<any> = styled.input`
  width: 400px;
  height: 2.5rem;
  padding: 0 10px;
  color: #595959;
  background-color: #1f2229;
  border: none;
  border-radius: 4px;
`;

const StyledButton: React.ComponentType<any> = styled.button`
  border-radius: 4px;
  border: none;
  height: 2.5rem;
  padding: 0 10px;
  background-color: #1f2229;
  color: #595959;
  text-transform: uppercase;
`;

export default function InputText() {
  const [taskDescription, setTaskDescription] = useState(
    'Create a new todo for today’s list...'
  );

  return (
    <StyledForm>
      <StyledInputText
        autoFocus={true}
        id={getNewId()}
        type='text'
        value={taskDescription}
      />
      <StyledButton>ok</StyledButton>
    </StyledForm>
  );
}

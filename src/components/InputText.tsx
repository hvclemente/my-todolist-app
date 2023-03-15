import React from 'react';
import { getNewId } from '../services/idService';

export default function InputText({
  inputValue = 'Valor padrão do input',
  onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {},
}) {
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    if (onInputChange) {
      onInputChange(event);
    }
  }

  return (
    <div>
      <input
        autoFocus={true}
        id={getNewId()}
        type='text'
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}

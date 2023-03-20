import { Box } from '@mui/material';
import styled from 'styled-components';
import { FaFlag, FaTrashAlt } from 'react-icons/fa';

const StyledInputCheck: React.ComponentType<any> = styled.input`
  width: 15px;
  height: 15px;
  border-radius: 4px;
`;

const stylingBox = {
  display: 'flex',
};

export default function TaskItem() {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#1f2229',
        padding: '0 10px',
        width: '460px',
        height: '2.5rem',
      }}
    >
      <Box display={'flex'} alignItems={'center'} gap={'10px'}>
        <StyledInputCheck
          type='checkbox'
          name='currentTask'
          value='task.value'
          id='task.id'
        ></StyledInputCheck>
        <label htmlFor='task.id'>Item 1</label>
      </Box>

      <Box display={'flex'} gap={'10px'}>
        <FaFlag color='#ff57b2' size={'15px'} />
        <FaTrashAlt color='#595959' size={'15px'} />
      </Box>
    </Box>
  );
}

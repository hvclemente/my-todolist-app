import styled from 'styled-components';
import { HiCode } from 'react-icons/hi';
import Box from '@mui/material/Box';

const StyledHiCode: React.ComponentType<any> = styled(HiCode)`
  color: #ff57b2;
  font-weight: bolder;
  font-size: 1.5rem;
`;

const StyledDiv: React.ComponentType<any> = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const StyledButtonTheme: React.ComponentType<any> = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 0.5rem;
  background-color: #1f2229;
  text-align: center;
  font-size: 12px;
`;

const stylingBox: Record<string, string> = {
  display: 'flex',
  justifyContent: 'space-between',
};

export default function Header() {
  return (
    <Box sx={stylingBox}>
      <StyledDiv>
        <StyledHiCode />
        <span>Olá, Herbert</span>
      </StyledDiv>

      <StyledButtonTheme>🌚</StyledButtonTheme>
    </Box>
  );
}

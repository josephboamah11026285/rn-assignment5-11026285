// screens/SettingsScreen.js
import React from 'react';
import styled from 'styled-components/native';
import CustomButton from '../components/CustomButton';
import { useTheme } from '../theme/ThemeContext';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

const Header = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

export default function SettingsScreen() {
  const { toggleTheme } = useTheme();

  return (
    <Container>
      <Header>Settings</Header>
      <CustomButton title="Change Theme" onPress={toggleTheme} />
      {/* Add more settings options as needed */}
    </Container>
  );
}

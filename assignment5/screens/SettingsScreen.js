import React from 'react';
import styled from 'styled-components/native';
import CustomButton from '../components/CustomButton';
import { useTheme } from '../theme/ThemeContext';

const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: ${({ theme }) => theme.background};
`;

const Header = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

const SettingOption = styled.TouchableOpacity`
  padding: 16px 0;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

const OptionText = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.text};
`;

export default function SettingsScreen() {
  const { toggleTheme } = useTheme();

  return (
    <Container>
      <Header>Settings</Header>
      <SettingOption>
        <OptionText>Change Password</OptionText>
      </SettingOption>
      <SettingOption>
        <OptionText>Privacy Policy</OptionText>
      </SettingOption>
      <SettingOption onPress={toggleTheme}>
        <OptionText>Theme</OptionText>
      </SettingOption>
      <SettingOption>
        <OptionText>Language</OptionText>
      </SettingOption>
      <SettingOption>
        <OptionText>Contact Us</OptionText>
      </SettingOption>
      <SettingOption>
        <OptionText>My Profile</OptionText>
      </SettingOption>
    </Container>
  );
}


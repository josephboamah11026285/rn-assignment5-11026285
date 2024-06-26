import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: ${({ theme }) => theme.background};
`;

const Header = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  margin-bottom: 16px;
`;

const ProfileDetail = styled.View`
  padding: 8px 0;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

const DetailText = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.text};
`;

export default function ProfileScreen() {
  return (
    <Container>
      <Header>Profile</Header>
      <ProfileDetail>
        <DetailText>Name: Eric Atsu</DetailText>
      </ProfileDetail>
      <ProfileDetail>
        <DetailText>Email: eric.atsu@example.com</DetailText>
      </ProfileDetail>
      <ProfileDetail>
        <DetailText>Phone: +123 456 7890</DetailText>
      </ProfileDetail>
    </Container>
  );
}

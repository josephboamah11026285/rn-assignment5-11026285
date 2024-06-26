import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome back,</Text>
      <Text style={styles.nameText}>Eric Atsu</Text>
      {/* Add more UI elements as needed */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  nameText: {
    fontSize: 20,
  },
});

// screens/HomeScreen.js
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

const WelcomeText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

const NameText = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.text};
`;

export default function HomeScreen() {
  return (
    <Container>
      <WelcomeText>Welcome back,</WelcomeText>
      <NameText>Eric Atsu</NameText>
      {/* Add more UI elements as needed */}
    </Container>
  );
}


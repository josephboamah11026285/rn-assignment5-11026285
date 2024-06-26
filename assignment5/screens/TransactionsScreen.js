import React from 'react';
import styled from 'styled-components/native';

const Container = styled.ScrollView`
  flex: 1;
  padding: 16px;
  background-color: ${({ theme }) => theme.background};
`;

const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 16px;
  color: ${({ theme }) => theme.text};
`;

const Transaction = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

const TransactionText = styled.Text`
  color: ${({ theme }) => theme.text};
`;

const TransactionAmount = styled.Text`
  color: ${({ theme }) => theme.text};
`;

export default function TransactionsScreen() {
  return (
    <Container>
      <SectionTitle>Transactions</SectionTitle>
      <Transaction>
        <TransactionText>Money Transfer</TransactionText>
        <TransactionAmount>$300</TransactionAmount>
      </Transaction>
      <Transaction>
        <TransactionText>Grocery Shopping</TransactionText>
        <TransactionAmount>-$88</TransactionAmount>
      </Transaction>
      <Transaction>
        <TransactionText>Apple Store</TransactionText>
        <TransactionAmount>-$5.99</TransactionAmount>
      </Transaction>
      <Transaction>
        <TransactionText>Spotify</TransactionText>
        <TransactionAmount>-$12.99</TransactionAmount>
      </Transaction>
      <Transaction>
        <TransactionText>Apple Store</TransactionText>
        <TransactionAmount>-$5.99</TransactionAmount>
      </Transaction>
    </Container>
  );
}

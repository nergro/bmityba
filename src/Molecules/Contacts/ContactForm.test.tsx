import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { renderComponent } from 'services/testFunctions';

import { ContactForm } from './ContactForm';

beforeEach(() => {
  renderComponent(<ContactForm />);
});

const existsAndHaveEmptyValue = (element: HTMLElement): void => {
  expect(element).toBeInTheDocument();
  expect(element).toHaveValue('');
};

test('renders name input', () => {
  const input = screen.getByAltText('Name input');
  existsAndHaveEmptyValue(input);
  expect(input).toHaveAttribute('type', 'text');
});

test('renders email input', () => {
  const input = screen.getByAltText('Email input');
  existsAndHaveEmptyValue(input);
  expect(input).toHaveAttribute('type', 'email');
});

test('renders subject input', () => {
  const input = screen.getByAltText('Subject input');
  existsAndHaveEmptyValue(input);
  expect(input).toHaveAttribute('type', 'text');
});

test('renders message textarea', () => {
  const input = screen.getByTestId('message-textarea');
  existsAndHaveEmptyValue(input);
});

test('check error handling', () => {
  fireEvent.click(screen.getByTestId('submit-button'));
  expect(screen.getByText('Error. Check if all fields were filled correctly.')).toBeInTheDocument();
});

import { screen } from '@testing-library/react';
import { ReactComponent as PhoneSvg } from 'assets/footer/phone.svg';
import React from 'react';
import { renderComponent } from 'services/testFunctions';

import { Contact } from './Contact';

const name = 'Phone';
const phone = '+37060000000';

test('renders contact', () => {
  renderComponent(<Contact icon={PhoneSvg} name={name} value={phone} />);
});

test('renders contact name', () => {
  renderComponent(<Contact icon={PhoneSvg} name={name} value={phone} />);
  expect(screen.queryByText(name)).not.toBeNull();
});

test('renders contact value', () => {
  renderComponent(<Contact icon={PhoneSvg} name={name} value={phone} />);
  expect(screen.queryByText(phone)).not.toBeNull();
});

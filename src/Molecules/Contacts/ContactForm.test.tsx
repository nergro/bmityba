import { fireEvent, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { sendMail } from 'apiServices/mail/mail';
import React from 'react';
import { renderComponent } from 'services/testFunctions';
import fetchMock from "jest-fetch-mock";
import { ContactForm } from './ContactForm';

fetchMock.enableMocks();

const existsAndHaveEmptyValue = (element: HTMLElement): void => {
  expect(element).toBeInTheDocument();
  expect(element).toHaveValue('');
};

describe('render proper inputs', () => {
  // beforeEach(() => {
  //   renderComponent(<ContactForm />);
  // });

  test('renders name input', () => {
    renderComponent(<ContactForm />);
    const input = screen.getByAltText('Name input');
    existsAndHaveEmptyValue(input);
    expect(input).toHaveAttribute('type', 'text');
  });

  test('renders email input', () => {
    renderComponent(<ContactForm />);
    const input = screen.getByAltText('Email input');
    existsAndHaveEmptyValue(input);
    expect(input).toHaveAttribute('type', 'email');
  });

  test('renders subject input', () => {
    renderComponent(<ContactForm />);
    const input = screen.getByAltText('Subject input');
    existsAndHaveEmptyValue(input);
    expect(input).toHaveAttribute('type', 'text');
  });

  test('renders message textarea', () => {
    renderComponent(<ContactForm />);
    const input = screen.getByTestId('message-textarea');
    existsAndHaveEmptyValue(input);
  });
});

describe('check error handling', () => {
  // renderComponent(<ContactForm />);

  test('shows error message on empty input', () => {
    renderComponent(<ContactForm />);
    fireEvent.click(screen.getByTestId('submit-button'));
    expect(
      screen.getByText('Error. Check if all fields were filled correctly.')
    ).toBeInTheDocument();
  });
});

const checkChangedInputValue = (element: HTMLElement, value: string): void => {
  fireEvent.change(element, { target: { value: value } });
  expect(element).toHaveValue(value);
};

describe('check for submission', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  const testEmail = {
    name: 'John',
    email: 'john@gmail.com',
    subject: 'some important stuff',
    message: 'hello opappa opa opa',
  };

  const fillInTheForm = ():void => {
    const nameInput = screen.getByAltText('Name input');
    const emailInput = screen.getByAltText('Email input');
    const subjectInput = screen.getByAltText('Subject input');
    const messageInput = screen.getByTestId('message-textarea');

    userEvent.type(nameInput, testEmail.name);
    userEvent.type(emailInput, testEmail.email);
    userEvent.type(subjectInput, testEmail.subject);
    userEvent.type(messageInput, testEmail.message);
  }

  test('sends email', async () => {
    fetchMock.mockResponseOnce("Message sent", { status: 200 });
    renderComponent(<ContactForm />);
    fillInTheForm();

    const submitButton = screen.getByTestId('submit-button');

    userEvent.click(submitButton);
    await waitFor(() => expect(screen.getByTestId('loader')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Thank You!')).not.toBeNull())
  });

  test('fails to sends email', async () => {
    fetchMock.mockReject(new Error('fake error message'));
    renderComponent(<ContactForm />);

    fillInTheForm();
    const submitButton = screen.getByTestId('submit-button');


    userEvent.click(submitButton);
    await waitFor(() => expect(screen.getByTestId('loader')).toBeInTheDocument());
    expect(
      screen.getByText('Error. Check if all fields were filled correctly.')
    ).toBeInTheDocument();
  });
});

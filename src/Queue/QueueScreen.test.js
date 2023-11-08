import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import QueueScreen from './QueueScreen';

describe('Queues screen', () => {
  test('renders the component', () => {
    // ARRANGE
    render(<QueueScreen />);

    // ACT
    const title = screen.getByText('Queue screen');
    screen.debug()

    // ASSERT
    expect(title).toBeInTheDocument();
  });

  test('search bar has placeholder text', () => {
    render(<QueueScreen />);
    const placeholder = screen.getByPlaceholderText('Enter Name');
    expect(placeholder).toBeInTheDocument();
  });

  test('button gets disabled after clicking', () => {
    render(<QueueScreen />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(button).toBeDisabled();
  })
})
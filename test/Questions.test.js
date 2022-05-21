import {render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import App from '../client/src/index.jsx';

describe('CardModal component', () => {
  test('CardModal component should exist', () => {
    render(<App />);
    const QuestionElement = screen.getByTestId('test_questions');
    expect(QuestionElement).toBeInTheDocument();
  });
 });
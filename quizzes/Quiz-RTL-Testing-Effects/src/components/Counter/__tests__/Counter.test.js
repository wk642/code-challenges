import React from 'react';
import Counter from '../Counter';
import { render, fireEvent, cleanup, screen, getByTestId} from '@testing-library/react';

afterEach(cleanup);

// 1️⃣ Count starts with 0 and button is disabled
test('Count starts with 0 and button is disabled', () =>{
  // - Render the Counter component
  render(<Counter />);
  // - Find the count and button elements
  const countElement = screen.getByTestId('count');
  const buttonElement = screen.getByTestId('button');
  // - Assert that the count starts at 0
  expect(countElement.textContent).toBe('Clicked 0 times');
  // - Assert that the button is disabled initially
  expect(buttonElement).toBeDisabled;
})

// 2️⃣ Checking the checkbox enables the button
test("Checking the checkbox enables the button", () => {
  // - Render the Counter component
  render(<Counter />);
  // - Find the button and checkbox elements
  const buttonElement = screen.getByTestId("button");
  // - Verify the button is initially disabled
  expect(buttonElement).toBeDisabled();
  // - Click the checkbox to check it
  const checkboxElement = screen.getByTestId("checkbox");
  fireEvent.click(checkboxElement);
  // - Verify the button is now enabled
  expect(buttonElement).not.toBeDisabled();
})

// 3️⃣ Clicking enabled button increments counter
test("Clicking enabled button increments counter", () => {
  // - Render the Counter component
  render(<Counter />)
  // - Find all necessary elements
  const buttonElement = screen.getByTestId("button");
  const checkboxElement = screen.getByTestId("checkbox");
  const countElement = screen.getByTestId("count");
  // - Enable the button by checking the checkbox
  fireEvent.click(checkboxElement);
  // - Click the button once
  fireEvent.click(buttonElement);
  // - Verify the count is now 1 (singular form)
  expect(countElement).toHaveTextContent("Clicked 1 time");
  // - Click the button again
  fireEvent.click(buttonElement);
  // - Verify the count is now 2 (plural form)
  expect(countElement).toHaveTextContent("Clicked 2 times");

})

// 4️⃣ Document title updates when checkbox is checked
  // - Set up initial document title
  // - Render the Counter component
  // - Find the button and checkbox elements
  // - Check the checkbox
  // - Verify title shows initial count of 0
  // - Click the button to increment counter
  // - Verify title updates to show count of 1
  // - Uncheck the checkbox

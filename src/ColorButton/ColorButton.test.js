import {
  render,
  screen,
  fireEvent,
} from '../SundaesOnDemand/test-utils/testing-library-utils';
import ColorButton from './ColorButton';
import { replaceCamelWithSpaces } from './ColorButton';

test('button has correct initial color and text, button turns blue when clicked and have text Change to red', () => {
  render(<ColorButton />);
  const button = screen.getByRole('button', { name: 'Change to midnightblue' });

  //button has correct initial color
  expect(button).toHaveStyle({ backgroundColor: 'mediumvioletred' });

  //click event
  fireEvent.click(button);

  //button turns blue when clicked and have text Change to red
  expect(button).toHaveStyle({ backgroundColor: 'midnightblue' });
  expect(button).toHaveTextContent('Change to mediumvioletred');
});

test('button started enabled and checkbox starts unchecked', () => {
  render(<ColorButton />);

  //button started enabled
  const button = screen.getByRole('button', { name: 'Change to midnightblue' });
  expect(button).toBeEnabled();

  //checkbox starts unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('button disabled when checkbox is ticked', () => {
  render(<ColorButton />);

  const button = screen.getByRole('button');
  const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' });

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

test('check if when checkbox is ticked, button is disabled and background color is gray', () => {
  render(<ColorButton />);

  const button = screen.getByRole('button');
  const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'mediumvioletred' });

  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: 'midnightblue' });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'midnightblue' });
});

describe('spaces before camel cases capital letters', () => {
  test('woks for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('woks for one inner capital letters', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('woks for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});

import { useState } from 'react';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function ColorButton() {
  const [buttonColor, setButtonColor] = useState('mediumvioletred');
  const [disabled, setDisabled] = useState(false);

  // const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  const newButtonColor =
    buttonColor === 'mediumvioletred' ? 'midnightblue' : 'mediumvioletred';

  const ChangeAbilityHandler = (e) => {
    setDisabled(e.target.checked);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? 'gray' : buttonColor }}
        disabled={disabled}
        onClick={() => setButtonColor(newButtonColor)}
      >
        Change to {newButtonColor}
      </button>
      <br />
      <input
        type='checkbox'
        id='disable-button-checkbox'
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={ChangeAbilityHandler}
      />
      <label htmlFor='disable-button-checkbox'>Disable Button</label>
    </div>
  );
}

export default ColorButton;

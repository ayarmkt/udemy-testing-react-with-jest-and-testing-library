import { render, screen } from '@testing-library/react';
import Options from '../Options';

test('displays image for each scoop from server', async () => {
  render(<Options optionType='scoops' />);

  //find images that ends with /scoop
  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });

  //2 images in array
  expect(scoopImages).toHaveLength(2);

  //confirm alt text of images
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

test('displays image for each toppings from server', async () => {
  render(<Options optionType='toppings' />);

  //find images that ends with /scoop
  const toppingsImages = await screen.findAllByRole('img', {
    name: /topping$/i,
  });

  //3 images in array
  expect(toppingsImages).toHaveLength(3);

  //confirm alt text of images
  const altText = toppingsImages.map((element) => element.alt);
  expect(altText).toEqual([
    'Cherries topping',
    'M&Ms topping',
    'Hot Fudge topping',
  ]);
});

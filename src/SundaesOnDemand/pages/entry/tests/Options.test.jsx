import { render, screen } from '@testing-library/react';
import Options from '../Options';

test('displays image for each scoop from server', () => {
  render(<Options optionType='scoops' />);

  //find images that ends with /scoop
  const scoopImages = screen.getAllByRole('img', { name: /scoop$/i });

  //2 images in array
  expect(scoopImages).toHaveLength(2);

  //confirm alt text of images
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

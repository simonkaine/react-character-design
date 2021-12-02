import {screen, render} from '@testing-library/react';
import Character from './Character.jsx';

it('Should display the Character from initial load', () => {
  const {container} = render(<Character head='dragon' torso='cena' legs='bird'/>);

  const head = screen.getByLabelText(/head/i);
  const torso = screen.getByLabelText(/torso/i);
  const legs = screen.getByLabelText(/legs/i);

  expect(head).toHaveStyle(`background-image: url(./dragon-head.png)`);
  expect(torso).toHaveStyle(`background-image: url(./cena-torso.png)`);
  expect(legs).toHaveStyle(`background-image: url(./bird-legs.png)`);
  expect(container).toMatchSnapshot();
});
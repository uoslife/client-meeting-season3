import Button from './Button';

it('uses custom text for the button label', () => {
  cy.mount(
    <Button primary={'disabled'} textSize={'2xl'} label={'Click me!'} />,
  );
  cy.get('button').should('contains.text', 'Click me!');
});

import Checkbox from './Checkbox';

it('Checkbox should change color by isActive props', () => {
  cy.mount(<Checkbox variant={'primary'} isActive={true} />);
  cy.get('rect').invoke('attr', 'fill').should('eq', '#2E74FF');

  cy.mount(<Checkbox variant={'primary'} isActive={false} />);
  cy.get('rect').invoke('attr', 'fill').should('eq', '#ECEEF0');
});

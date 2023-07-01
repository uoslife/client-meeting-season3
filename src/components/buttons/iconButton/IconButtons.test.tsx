import { render, fireEvent } from '@testing-library/react';
import IconButton from './IconButton';
import '@testing-library/jest-dom';

describe('IconButton', () => {
  it('icon button이 클릭될 때 onClick 함수가 실행되어야 합니다.', () => {
    const onClickIconButton = jest.fn();
    const { getByRole } = render(
      <IconButton
        iconName={'Left'}
        width={56}
        height={56}
        onClick={onClickIconButton}
      />,
    );

    fireEvent.click(getByRole('button'));

    expect(onClickIconButton).toHaveBeenCalled();
  });
});

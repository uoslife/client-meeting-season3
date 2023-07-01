import OathBox from './OathBox';
import { render, screen, fireEvent } from '@testing-library/react';

import { OATH_PHRASES } from '@/constants';

const FIRST_OATH_PHRASES = OATH_PHRASES[0];

describe('OathBox', () => {
  const onClickOathBox = jest.fn();
  render(
    <OathBox
      title={FIRST_OATH_PHRASES.title}
      desc={FIRST_OATH_PHRASES.desc}
      isActive={false}
      onClick={onClickOathBox}
    />,
  );
  it('OathBox 컴포넌트를 클릭시 onClick 함수가 작동해야합니다', () => {
    fireEvent.click(screen.getByTestId('oathBox-wrapper'));
    expect(onClickOathBox).toHaveBeenCalled();
  });
  it('OathBox 컴포넌트에는 title과 desc가 포함되어야 합니다.', () => {
    const titleText = screen.findByText(FIRST_OATH_PHRASES.title);
    expect(titleText).toBeTruthy();
    const descText = screen.findByText(FIRST_OATH_PHRASES.desc);
    expect(descText).toBeTruthy();
  });
});

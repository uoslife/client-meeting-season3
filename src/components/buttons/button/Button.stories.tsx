import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components';

const meta: Meta<typeof Button> = {
  title: 'Components/Buttons/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
    componentSubtitle: '',
    docs: {
      description: {
        component: '버튼 내부의 text를 label 속성에 추가해주세요',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    primary: 'active',
    label: '매칭 결과 확인하기  >',
    width: 'full',
    height: 56,
  },
};
export const Inactive: Story = {
  args: {
    primary: 'inactive',
    label: '신청 정보 확인하기  >',
    width: 'full',
    height: 56,
  },
};
export const Disabled: Story = {
  args: {
    primary: 'disabled',
    label: '시대팅 안내',
    width: 'full',
    height: 56,
  },
};

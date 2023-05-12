import type { Meta, StoryObj } from '@storybook/react';

import { MainHeader } from '@/components';

const meta: Meta<typeof MainHeader> = {
  title: 'Components/Header/MainHeader',
  component: MainHeader,
  parameters: {
    layout: 'fullscreen',
    componentSubtitle: '',
    docs: {
      description: {
        component: '메인페이지에 들어가는 헤더 컴포넌트 입니다',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MainHeader>;

export const Default: Story = {
  args: {},
};

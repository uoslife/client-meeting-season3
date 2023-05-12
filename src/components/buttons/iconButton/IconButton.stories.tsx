import type { Meta, StoryObj } from '@storybook/react';

import { IconButton } from '@/components';

const meta: Meta<typeof IconButton> = {
  title: 'Components/Buttons/IconButton',
  component: IconButton,
  parameters: {
    layout: 'fullscreen',
    componentSubtitle: '',
    docs: {
      description: {
        component:
          '1.public/images/icons 폴더에 svg 아이콘을 추가해주세요<br />2.iconName 타입에 아이콘 이름을 추가해주세요',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    iconName: 'Share',
    width: 56,
    height: 56,
  },
};

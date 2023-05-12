import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '@/components';

const meta: Meta<typeof Text> = {
  title: 'Components/typography/Text',
  component: Text,
  parameters: {
    layout: 'fullscreen',
    componentSubtitle: '',
    docs: {
      description: {
        component: `Text 컴포넌트입니다<br />현재 as 속성은 동작하지 않습니다`,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    label: 'Example',
    as: 'p',
    size: 'base',
    weight: 400,
    color: '#000000',
  },
};

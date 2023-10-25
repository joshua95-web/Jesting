import type { Meta, StoryObj } from '@storybook/react';
import InlineCheckbox from '@/components/shared/checkboxes/inline-checkbox';

const meta: Meta<typeof InlineCheckbox> = {
  title: 'Components/Inputs/Inline Checkbox',
  component: InlineCheckbox,
  argTypes: {
    label: {
      name: 'Label',
      defaultValue: 'Input',
      control: 'text',
    },
    name: {
      name: 'Name',
      defaultValue: 'text',
      control: 'text',
    },
    description: {
      name: 'Description',
      defaultValue: 'This is a description',
      control: 'text',
    },
    required: {
      name: 'Required field',
      defaultValue: false,
      control: 'boolean',
    },
    checked: {
      name: 'Checked',
      defaultValue: false,
      control: 'boolean',
    },
    disabled: {
      name: 'Disabled',
      defaultValue: false,
      control: 'boolean',
    },
    defaultChecked: {
      name: 'Default checked',
      defaultValue: false,
      control: 'boolean',
    },
    errors: {
      name: 'Error message',
      defaultValue: '',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof InlineCheckbox>;

export const Default: Story = {
  args: {
    label: 'Input',
    name: 'Name',
    description: 'This is a description',
    required: false,
    checked: false,
    disabled: false,
    defaultChecked: false,
    errors: '',
  },
};
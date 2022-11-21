import { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from "."

export default {
	title: 'Atoms/Button',
	component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
	label: 'Label',
	loading: false,
  onClick: action('Button Clicked')
}

export const Login = Template.bind({})
Login.args = {
	label: 'Login',
	loading: false,
  onClick: action('Button Clicked')
}

export const Register = Template.bind({})
Register.args = {
	label: 'Register',
	loading: true,
  onClick: action('Button Clicked')
}
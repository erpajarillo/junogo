import { ComponentMeta, ComponentStory } from '@storybook/react'
import Textbox from "."

export default {
	title: 'Atoms/Textbox',
	component: Textbox,
} as ComponentMeta<typeof Textbox>

const Template: ComponentStory<typeof Textbox> = (args) => <Textbox {...args} />

export const Default = Template.bind({})
Default.args = {
	placeholder: 'PlaceHolder',
	value: 'Value'
}

export const Username = Template.bind({})
Username.args = {
	placeholder: 'Types Username or Email...',
	value: ''
}

export const Password = Template.bind({})
Password.args = {
	placeholder: 'Types Password...',
  type: 'password',
	value: ''
}
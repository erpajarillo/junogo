import { ApolloProvider } from '@apollo/client'
import { client } from '../../../graphql'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import RegisterModal from "."

export default {
	title: 'Organisms/Register Modal',
	component: RegisterModal,
} as ComponentMeta<typeof RegisterModal>

const Template: ComponentStory<typeof RegisterModal> = (args) => {
  return (
    <ApolloProvider client={client}>
      <RegisterModal {...args} />
    </ApolloProvider>
  )
}

export const Default = Template.bind({})
Default.args = {}
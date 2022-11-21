import { ApolloProvider } from '@apollo/client'
import { client } from '../../../graphql'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import LoginModal from "."

export default {
	title: 'Organisms/Login Modal',
	component: LoginModal,
} as ComponentMeta<typeof LoginModal>

const Template: ComponentStory<typeof LoginModal> = (args) => {
  return (
    <ApolloProvider client={client}>
      <LoginModal {...args} />
    </ApolloProvider>
  )
}

export const Default = Template.bind({})
Default.args = {}
import { ApolloProvider } from '@apollo/client'
import { client } from '@Gql/index'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import LoginModal from "."

export default {
	title: 'Organisms/Login Modal',
	component: LoginModal,
} as ComponentMeta<typeof LoginModal>

const Template: ComponentStory<typeof LoginModal> = (args: any) => {
  return (
    <ApolloProvider client={client}>
      <LoginModal {...args} />
    </ApolloProvider>
  )
}

export const Default = Template.bind({})
Default.args = {}
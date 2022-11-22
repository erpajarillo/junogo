import { ApolloProvider } from '@apollo/client'
import { client } from '@Gql/index'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import RegisterModal from "."

export default {
	title: 'Organisms/Register Modal',
	component: RegisterModal,
} as ComponentMeta<typeof RegisterModal>

const Template: ComponentStory<typeof RegisterModal> = (args: any) => {
  return (
    <ApolloProvider client={client}>
      <RegisterModal {...args} />
    </ApolloProvider>
  )
}

export const Default = Template.bind({})
Default.args = {}
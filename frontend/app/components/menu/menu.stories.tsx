import { ApolloProvider } from '@apollo/client'
import { client } from '@Gql/index'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Menu from "."

export default {
	title: 'Organisms/Menu',
	component: Menu,
} as ComponentMeta<typeof Menu>

const Template: ComponentStory<typeof Menu> = (args: any) => {
  return (  
    <ApolloProvider client={client}>
      <Menu {...args} />
    </ApolloProvider>
  )
}

export const Default = Template.bind({})
Default.args = {}
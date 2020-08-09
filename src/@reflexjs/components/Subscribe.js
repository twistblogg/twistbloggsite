import addToMailchimp from "gatsby-plugin-mailchimp"
import React from "react"
import { Flexbox, P, Form, Label, Input, Button, VisuallyHidden, H4, Div } from "@reflexjs/components"


export default class Subscribe extends React.Component {
  constructor() {
    super()
    this.state = { name: '', email: '', result: null }
  }

  handleSubmit = async (e) => {
    const result = await addToMailchimp(this.state.email, { FNAME: this.state.name })
    if (result.result === 'error') {
      alert(`Whoops, ${this.state.name} you're already subscribed!`)
    } else {
      alert(`Thank you for subscribing ${this.state.name}!`)
    }
    this.setState({ result: result })
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value })
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value })
  }

render() {
    return (
    <Flexbox flexDirection="column" textAlign="center">
      <Div p="7" mb="7" mt="7" borderRadius="2xl" boxShadow="3xl" bg="postblock"> 
      <H4>Sign up for The Best Bits</H4>
      <P fontSize="xl" mt="2" textAlign="center">
      A weekly round up of the best content from In Plain English, handpicked by our Founder
      </P>
      <Form d="grid" col="2|auto auto" gap="4" onFinish={this.handleSubmit}>
      <VisuallyHidden>
          <Label htmlFor="form-04-email">Email</Label>
          <Label htmlFor="form-04-name">Name</Label>
        </VisuallyHidden>
        <Input
          type="email"
          id="form-04-email"
          name="email"
          placeholder="Type your email"
          variant="md"
          onChange={this.handleEmailChange}
          rules={[{ required: true, message: 'Please input your email.' }]}
        />
        <Input
          type="name"
          id="form-04-name"
          name="name"
          placeholder="Type your name"
          variant="md"
          onChange={this.handleNameChange}
          rules={[{ required: true, message: 'Please input your name.' }]}
        />
        <Button
          variant="primary md"
          label="Submit"
          type="submit"
        > Join
        </Button>
      </Form>
      </Div>
      </Flexbox>
    )
  }
}
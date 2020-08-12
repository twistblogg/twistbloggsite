import addToMailchimp from "gatsby-plugin-mailchimp"
import React from "react"
import { Flexbox, P, Form, Label, Input, Button, VisuallyHidden, H3, A, Div } from "@reflexjs/components"

export default class Subscribe extends React.Component {
  constructor() {
    super()
    this.state = { name: '', email: '', result: null }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
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
      <H3>Sign up for The Best Bits</H3>
      <P fontSize="xl" mt="2" textAlign="center">
      Get all of our posts, straight to your email. Opt-out any time.
      </P>
      <Form d="grid" mt="10" col="1|repeat(3, auto)" gap="4" onSubmit={this.handleSubmit}>
      <VisuallyHidden>
          <Label htmlFor="form-04-email">Email</Label>
          <Label htmlFor="form-04-name">Name</Label>
        </VisuallyHidden>
        <Input
          type="email"
          id="form-04-email"
          name="email"
          placeholder="john@example.com"
          variant="md"
          onChange={this.handleEmailChange}
          required
        />
        <Input
          type="name"
          id="form-04-name"
          name="name"
          placeholder="John"
          variant="md"
          onChange={this.handleNameChange}
          required
        />
        <Button
          variant="primary md"
          label="Submit"
          type="submit"
        > Join Us
        </Button>
      </Form>
      <P fontSize="md" mt="10" textAlign="center">Not into email list things, but still want to read more?</P>
      <P fontSize="md" textAlign="center"><A href="https://www.twitter.com/twistblogg" rel="nofollow noopener noreferrer" target="_blank">Follow us on Twitter</A></P>
      </Div>
      </Flexbox>
    )
  }
}
import addToMailchimp from "gatsby-plugin-mailchimp"
import React from "react"
import { Flexbox, P, Form, Label, Input, Button, VisuallyHidden } from "@reflexjs/components"


export default class Subscribe extends React.Component {
  constructor() {
    super()
    this.state = { email: '', result: null }
  }

  handleSubmit = async (e) => {
    const result = await addToMailchimp(this.state.email)
    if (result.result === 'error') {
      alert(`Whoops, ${this.state.email} you're already subscribed!`)
    } else {
      alert(`Thank you for subscribing ${this.state.email}!`)
    }
    this.setState({ result: result })
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value })
  }
render() {
    return (
    <Flexbox flexDirection="column" textAlign="center">
      <P fontSize="xl|2xl" mt="2" textAlign="center">
      Like the article? Subscribe to get notified whenever a new article gets published!
      </P>
      <Form d="grid" col="1|auto auto" gap="4" w="full|auto" onSubmit={this._handleSubmit}>
          <VisuallyHidden>
          <Label htmlFor="form-04-email">Email</Label>
          
        </VisuallyHidden>
        <Input
          type="email"
          id="form-04-email"
          name="email"
          placeholder="Type your email"
          variant="lg"
          onChange={this.handleEmailChange}
          rules={[{ required: true, message: 'Please input your email.' }]}
        />
        <br />
        <Button
          variant="primary lg"
          label="Submit"
          type="submit"
        > Join
        </Button>
      </Form>
      </Flexbox>
    )
  }
}
import React from 'react'

export default class CommentBox extends React.Component {

  static get defaultProps() {
    return {
    }
  }

  static get propTypes() {
    return {
    }
  }

  constructor(props) {
    super(props)
    this.state = this.initialState
  }

  get initialState() {
    return {
    }
  }

  render() {
    return (
      <div>
        Hello, world! I am CommentBox.
      </div>
    )
  }
}

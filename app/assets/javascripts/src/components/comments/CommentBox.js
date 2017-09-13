import React from 'react'
import CommentList from './CommentList'
import CommentForm from './CommentForm'

export default class CommentBox extends React.Component {
  render() {
    return (
      <div>
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    )
  }
}
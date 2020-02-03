import React from 'react'
import marked from 'marked'

interface IProps {
  children: string
}

export default class Marked extends React.Component<IProps> {
  getMarkdownText() {
    const rawMarkup = marked(this.props.children)
    return { __html: rawMarkup }
  }

  render() {
    return <div dangerouslySetInnerHTML={this.getMarkdownText()} />
  }
}

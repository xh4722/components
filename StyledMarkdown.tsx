import React from 'react'
import styled from 'styled-components'

class MarkdownBody extends React.Component<any> {
  render() {
    const { className } = this.props
    return (
      <article className={`markdown-body ${className ? className : ''}`}>
        {this.props.children}
      </article>
    )
  }
}

export default styled(MarkdownBody)`
  width: 100%;
`

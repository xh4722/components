/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import React from 'react'
import { Icon, Tooltip, message } from 'antd'

import Highlight from '../Highlight'
import { StyledCodeBox } from './style'

interface IProps {
  title: string | React.ReactNode
  desc?: string | React.ReactNode
  demo: React.ReactElement
  sourceCode: string | { default: string }
}

export default class CodeBox extends React.Component<IProps> {
  state = {
    expanded: false,
  }

  get sourceCode() {
    const { sourceCode } = this.props

    if (typeof sourceCode === 'string') {
      return sourceCode
    } else if (sourceCode.default) {
      return sourceCode.default
    }

    return ''
  }

  toggleCode = () => {
    this.setState({
      expanded: !this.state.expanded,
    })
  }

  copy = () => {
    const textArea = document.createElement('textarea')
    textArea.textContent = this.sourceCode
    document.body.append(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)

    message.success('复制成功')
  }

  render() {
    const { expanded } = this.state
    const { title, desc, demo } = this.props

    return (
      <StyledCodeBox>
        <div className="header">
          <div className="title">{title}</div>
          {desc && <div className="desc">{desc}</div>}
        </div>

        <div className="demo">{demo}</div>
        <div className="actions">
          <Tooltip title="复制代码">
            <Icon type="copy" onClick={this.copy} />
          </Tooltip>
          {expanded ? (
            <Tooltip title="收起代码">
              <Icon type="code" onClick={this.toggleCode} />
            </Tooltip>
          ) : (
            <Tooltip title="显示代码">
              <Icon type="code" onClick={this.toggleCode} />
            </Tooltip>
          )}
        </div>
        {expanded && (
          <div className="source">
            <Highlight>{this.sourceCode}</Highlight>
          </div>
        )}
      </StyledCodeBox>
    )
  }
}

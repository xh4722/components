import React from 'react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'

interface IProps {
  language?: Language
  children: string
}
const theme: any = {
  plain: {
    color: '#9CDCFE',
    backgroundColor: '#1E1E1E',
  },
  styles: [
    {
      types: ['prolog'],
      style: {
        color: 'rgb(0, 0, 128)',
      },
    },
    {
      types: ['comment'],
      style: {
        color: 'rgb(106, 153, 85)',
      },
    },
    {
      types: ['builtin', 'changed', 'keyword'],
      style: {
        color: 'rgb(86, 156, 214)',
      },
    },
    {
      types: ['number', 'inserted'],
      style: {
        color: 'rgb(181, 206, 168)',
      },
    },
    {
      types: ['constant'],
      style: {
        color: 'rgb(100, 102, 149)',
      },
    },
    {
      types: ['attr-name', 'variable'],
      style: {
        color: 'rgb(156, 220, 254)',
      },
    },
    {
      types: ['deleted', 'string', 'attr-value'],
      style: {
        color: 'rgb(206, 145, 120)',
      },
    },
    {
      types: ['selector'],
      style: {
        color: 'rgb(215, 186, 125)',
      },
    },
    {
      // Fix tag color
      types: ['tag'],
      style: {
        color: 'rgb(78, 201, 176)',
      },
    },
    {
      // Fix tag color for HTML
      types: ['tag'],
      languages: ['markup'],
      style: {
        color: 'rgb(86, 156, 214)',
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: 'rgb(212, 212, 212)',
      },
    },
    {
      // Fix punctuation color for HTML
      types: ['punctuation'],
      languages: ['markup'],
      style: {
        color: '#808080',
      },
    },
    {
      types: ['function'],
      style: {
        color: 'rgb(220, 220, 170)',
      },
    },
    {
      types: ['class-name'],
      style: {
        color: 'rgb(78, 201, 176)',
      },
    },
    {
      types: ['char'],
      style: {
        color: 'rgb(209, 105, 105)',
      },
    },
  ],
}

export default class HighlightCom extends React.Component<IProps> {
  render() {
    const { language } = this.props

    return (
      <Highlight
        {...defaultProps}
        theme={theme}
        code={this.props.children}
        language={language || 'jsx'}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    )
  }
}

import React from 'react'
import Markdown from 'markdown-to-jsx'

const Reptext = (props) => {
  return (
    <div id="description">
      <Markdown>{props.repository}</Markdown>
    </div>
  )
}

Reptext.propTypes = {}

export default Reptext

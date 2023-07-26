import React from 'react'
import { Helmet } from 'react-helmet'

// Helmet is used for setting the title of page to which ever page we visit

const MetaData = (props) => {
  return (
    <>
    <Helmet>
        <title>{props.title}</title>
    </Helmet>
    </>
  )
}

export default MetaData ;
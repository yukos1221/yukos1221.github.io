import React from 'react'
import Helmet from "react-helmet"

import favicon from '../../assets/images/lpoLogo.png'

const Head = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Либертарианский проектный офис</title>
      <link rel="shortcut icon" href={favicon} type="image/x-icon" />
    </Helmet>
  )
}

export default Head

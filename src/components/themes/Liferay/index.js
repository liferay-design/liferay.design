// This theme affects global styles, it's meant for sections of the site like Blueprints or Lexicon

import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle `
    body {
        font-family: 'Source Sans Pro', Tahoma, 'Trebuchet MS', sans-serif;
    }
`

export default () => (
    <GlobalStyle/>
)


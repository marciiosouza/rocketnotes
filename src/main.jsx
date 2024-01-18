import React from 'react'
import ReactDOM from 'react-dom/client'
import { Details } from './pages/Datails'
import { ThemeProvider } from 'styled-components'
import { GlobalStyled } from './styles/global';
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <Details />
    </ThemeProvider>
  </React.StrictMode>,
)

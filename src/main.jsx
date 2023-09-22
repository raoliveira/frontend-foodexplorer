import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'
import GlobalStyles from './styles/global'

import { SearchProvider } from "./hooks/search";
import { AuthProvider } from './hooks/auth'
import { Routes } from './routes';

//import { SignIn } from './pages/SignIn'
//import { Home } from './pages/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <SearchProvider>
          <Routes />
        </SearchProvider>
        
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)

import 'regenerator-runtime/runtime'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme'

import { HomePage } from './pages/Home'
import { AuthPage } from './pages/Auth'
import { SupplyChainPlayerDetailsPage } from './pages/PlayerDetails';
import { NewChainInfo } from './pages/ChainInfo';
import { PlayerDashboardPage } from './pages/PlayerDashBoard';
import { PlayerProductPage } from './pages/PlayerProducts';
import { ProductQrPage } from './pages/ProductQr';

const App = () => {
  return (
    <Router>
      <Switch>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Route path='/' exact component={HomePage}/>
          <Route path='/auth' exact component={AuthPage}/>
          <Route path='/dashboard' exact component={PlayerDashboardPage}/>
          <Route path='/batch' exact component={PlayerProductPage}/>
          <Route path='/details/:role' exact component={SupplyChainPlayerDetailsPage}/>
          <Route path='/qr' exact component={ProductQrPage}/>
          <Route path='/new' exact component={NewChainInfo}/>
        </ThemeProvider>
      </Switch>
    </Router>
  )
}

export default App
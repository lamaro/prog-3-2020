import React from 'react';
import '../App/index.css';
import Home from '../../pages/Home'
import Category from '../../pages/Category'
import Search from '../../pages/Search'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/category/:slug">
                        <Category />
                    </Route>
                    <Route path="/search/:query">
                        <Search />
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;

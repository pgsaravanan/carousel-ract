import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from '@components/Navigation/Nav';
import { ThemeContext } from './store/context/themeContext';
import CarouselContainer from './containers/ui/carousel/carouselContainer';

const App = () => {
  const [theme, setTheme] = useState('light');
  const updateTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <Router>
        <Nav />
        <Switch>
          <Route
            path="/"
            exact
            component={CarouselContainer}
          />
        </Switch>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;

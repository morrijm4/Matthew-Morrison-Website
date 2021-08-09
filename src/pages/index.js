import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import SpotifyRestApi from './SpotifyRestApi';
import { ColorModeScript } from '@chakra-ui/react';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description} />
      </Helmet>
      <Router>
        <Switch>
          <Route path="/">
            <App />
          </Route>
          <Route path="/spotify-rest-api">
            <ColorModeScript />
            <SpotifyRestApi />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

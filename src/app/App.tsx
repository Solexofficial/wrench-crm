import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppLayout from './layouts/app-layout';
import './scss/app.scss';
import { createStore } from './store/createStore';

const store = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' component={AppLayout} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;

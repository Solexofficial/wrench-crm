import { Redirect, Route, Switch } from 'react-router-dom';
import AddressPage from './pages/AddressPage';
import HomePage from './pages/HomePage';

export const AppViews = () => {
  return (
    <Switch>
      <Route path='/address' component={AddressPage} />
      <Route path='/' component={HomePage} />

      <Redirect to='/' />
    </Switch>
  );
};

export default AppViews;

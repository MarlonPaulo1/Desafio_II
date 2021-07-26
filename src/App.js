import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Form from './pages/Form';
import Product from "./pages/Product";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Product} exact />
        <Route path="/form" component={Form} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
import React from 'react';
import Navi from '../navi/Navi'
import Dashboard from './Dashboard';
import {Container} from "reactstrap";
import { Route ,Switch} from 'react-router-dom';
import CartDetails from '../cart/CartDetails';
import AddorUpdateProduct from '../products/AddorUpdateProduct';
import NotFound from '../common/NotFound';
function App() {
  return (
  
    <div >
        <Navi/>

        <Container>
          <Switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/products" exact component={Dashboard}/>
            <Route path="/cart" exact component={CartDetails}/>
            <Route path="/saveProduct/:productId" exact component={AddorUpdateProduct}/>
            <Route path="/saveProduct" exact component={AddorUpdateProduct}/>
            <Route  exact component={NotFound}/>



          </Switch>
         </Container>
      
      
    </div>
  );
}

export default App;

import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {  ProductButtons, ProductCard, ProductoImage, ProductoTitle } from '../.';

const product = {

  id: '1',
  title: 'Coffeee Mug- card!',
 // img: './coffee-mug.png'

}

const App = () => {
  return (
    <>
      <ProductCard
                
                product={product}
                
                initialValues={{
                    count: 4,
                    maxCount: 10
                }}
            >

                {
                    ({reset, isMaxCountReached, count, increaseBy, maxCount}) => (
                        <>
                            <ProductoImage />
                            <ProductoTitle  />
                            <ProductButtons />                                                       
                        </>
                    )
                }

            </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

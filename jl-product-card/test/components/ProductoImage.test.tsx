import React from 'react';
import renderer from 'react-test-renderer';
import ProductCard, { ProductoImage } from '../../src/components'
import { product2 } from '../data/products';


describe('Funcionamiento de <ProductImage/>', () => { 
    test('debe de funcionar correctamente', () => { 

        const wrapper = renderer.create(
            <ProductoImage img='http:dddd.png'/>
          )

          expect(wrapper.toJSON()).toMatchSnapshot();

     })

     test('debe  de mostar el componente con la imagen del producto', () => { 
        const wrapper = renderer.create(
            <ProductCard product={product2}>
              {
                () => (
                  <ProductoImage />
                )
      
              }
      
            </ProductCard>
          )
          expect(wrapper.toJSON()).toMatchSnapshot();
      })
 })
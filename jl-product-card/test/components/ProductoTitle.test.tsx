
import React from 'react';
import renderer from 'react-test-renderer';
import ProductCard, { ProductoTitle } from '../../src/components'
//import { ProductCard } from '../../src/components/ProductCard';
import { product1 } from '../data/products';


describe('ProductTitle', () => {
  test('debe de mostrar el componente correctamente con el titulo personalizado', () => {

    const wrapper = renderer.create(
      <ProductoTitle title='Custom PRoduct' />
    )

    expect(wrapper.toJSON()).toMatchSnapshot();

  })

  test('debe de mostar el componente con el nombre del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {
          () => (
            <ProductoTitle/>
          )

        }

      </ProductCard>
    )
    expect(wrapper.toJSON()).toMatchSnapshot();
  })
});

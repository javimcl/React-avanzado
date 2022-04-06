#jl-Product-card

Este es un paquete de despliegue en NPM

### Javier Lucero

## Ejemplo

```
import { ProductButtons, ProductCard, ProductoImage, ProductoTitle } from 'jl-product-card';

```

```
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
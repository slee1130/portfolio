import React, { useState } from "react";
import Product from "./Product";
import Title from "./Title";
import { storeProducts } from "../data";
import styled from "styled-components";
import { ProductConsumer } from "../context";



function ProductList(){
    const [products] = useState(storeProducts);
    return (
        <React.Fragment>
            <ProductWrapper className="py-5">
                <div className="container">
                    <Title name="best" title="sellers" />
                    <div className="row">
                        <ProductConsumer>
                            {value => {
                                return value.products.map(product => {
                                    return <Product key={product.id} product={product} />;
                                });
                            }}
                        </ProductConsumer>
                    </div>
                </div>
            </ProductWrapper>
        </React.Fragment>
    );
}

export default ProductList;






const ProductWrapper = styled.section``;

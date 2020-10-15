import React, { useState } from "react";
import Product from "./Product";
import { storeProducts } from "../data";
import styled from "styled-components";
import { ProductConsumer } from "../context";



function ProductList(props){
    const [products] = useState(storeProducts);
    return (
        <React.Fragment>
            <ProductWrapper className="py-5">
                <div className="container">
                    <div className="row">
                        <ProductConsumer>
                            {value => {
                                return value.products.map(product => {
                                  if( "/" + product.type == props.match.path){
                                    return <Product key={product.id} product={product} />;
                                  }
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

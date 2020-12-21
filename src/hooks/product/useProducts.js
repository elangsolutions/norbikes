import React from 'react';
import _ from 'lodash';

import {useQuery, gql} from "@apollo/client";

const QUERY_PRODUCTS =   `query products($category:String){
  products(category: $category ){
    code
    name
    categories {
      code
    }
  }
}`

const useProducts = (category) => {

    const variables = {category};
    const {loading, error, data} = useQuery(gql`${QUERY_PRODUCTS}`, {
        variables
    });

    const products= _.get(data,"products",[]);

    return { products, loading, error};
}


export default useProducts;
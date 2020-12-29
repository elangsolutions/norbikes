import React from 'react';
import _ from 'lodash';

import {useQuery, gql} from "@apollo/client";

const QUERY_CATEGORY =   `query categories($client:String!){
  categories(client: $client ){
    code
    name
    subCategories {
      code
      name
      imageUrl
    }
  }
}`

const useCategories = (client) => {

    const variables = {client};
    const {loading, error, data} = useQuery(gql`${QUERY_CATEGORY}`, {
        variables
    });

    const categories= _.get(data,"categories",[]);

    return { categories, loading, error};
}


export default useCategories;
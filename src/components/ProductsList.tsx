'use client'
import { Product } from "@/models/Product.model";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { IconCircle } from "@tabler/icons-react";

function ProductsList({ products }:{ products: Product[] }) {
  return (
    <List spacing={10}>
      {
        products.length > 0 && products.map((product: Product) => (
          <ListItem key={product}>
            <ListIcon as={IconCircle}/>
            {product}
          </ListItem>
        ))
      }
    </List>
  );
}

export default ProductsList;

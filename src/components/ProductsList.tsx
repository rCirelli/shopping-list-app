'use client';
import { Product } from '@/models/Product.model';
import { List, ListIcon, ListItem } from '@chakra-ui/react';
import { IconCircle, IconGripVertical } from '@tabler/icons-react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { useCallback } from 'react';

function ProductsList({ products }: { products: Product[] }) {
  const onDragEnd = useCallback(() => {}, []);

  function getDraggableList(products: Product[]) {
    return products.map((product: Product, i) => (
      <Draggable key={product} draggableId={product} index={i}>
        {(provided, snapshot) => (
          <ListItem
            className="bg-foreground-base py-2 flex items-center rounded-md text-text-main-base"
          >
            <ListIcon
              as={IconCircle}
              className="mx-2 text-text-secondary-base"
            />
            <span className="flex-grow">{product}</span>
            <IconGripVertical
              className="text-text-secondary-base mx-2"
              size={20}
            />
          </ListItem>
        )}
      </Draggable>
    ))
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <List spacing={12}>
        <Droppable droppableId='mainList'>
          {getDraggableList(products)}
        </Droppable>
      </List>
    </DragDropContext>
  );
}

export default ProductsList;

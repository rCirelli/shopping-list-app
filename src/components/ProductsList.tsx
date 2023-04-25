'use client';
import { Product } from '@/models/Product.model';
import { List, ListIcon, ListItem } from '@chakra-ui/react';
import { IconCircle, IconGripVertical } from '@tabler/icons-react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { useCallback, useState } from 'react';

function ProductsList({ products }: { products: Product[] }) {
  const [ productsList, setProductsList ] = useState(products);

  const reorderList = useCallback((startIndex: number, endIndex: number) => {
    const result = [...productsList];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  }, [productsList]);

  const onDragEnd = useCallback((result: DropResult) => {
    if (!result.destination) {
      return;
    }
    const items = reorderList(
      result.source.index,
      result.destination.index
    );
    setProductsList(items);
  }, [reorderList]);


  function getDraggableList(products: Product[]) {
    return products.map((product: Product, i) => (
      <Draggable key={product} draggableId={product} index={i}>
        {(provided, snapshot) => (
          <ListItem
            className="bg-foreground-base py-3 flex items-center rounded-md text-text-main-base"
            ref={provided.innerRef}
            {...provided.draggableProps}
          >
            <ListIcon
              as={IconCircle}
              className="mx-2 text-text-secondary-base"
            />
            <span className="flex-grow">{product}</span>
            <div {...provided.dragHandleProps}>
              <IconGripVertical
                className="text-text-secondary-base mx-2"
                size={20}
              />
            </div>
          </ListItem>
        )}
      </Draggable>
    ));
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="mainList">
        {(provided, snapshot) => (
          <List
            className='min-h-full'
            spacing={15}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {getDraggableList(productsList)}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default ProductsList;

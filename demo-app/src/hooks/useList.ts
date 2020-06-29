import { useState } from 'react';

import { Item } from '../models/Item';

type AppendItem<S> = (item: S) => void;

type UseList = <T extends Item>(initialItems: T[]) => ([
  T[], AppendItem<T>,
]);

export const useList: UseList = <T extends Item>(initialItems: T[]) => {

  const [ items, setItems ] = useState(initialItems);

  const appendItem: AppendItem<T> = (item) => {

    const nextItemId = Math.max(...items.map(c => c.id!), 0) + 1;

    setItems([
      ...items,
      {
        ...item,
        id: nextItemId,
      },
    ]);
  };

  return [ items, appendItem ];

};
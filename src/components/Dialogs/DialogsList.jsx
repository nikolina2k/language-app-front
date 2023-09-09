// src/components/Dialog.jsx

import React from 'react';
import items from './Items';
import SingleDialog from './SingleDialog';

const DialogsList = () => {
  // Sample data for the list of items

  const sortedItems = items.slice().sort((a, b) => b.voteCount - a.voteCount);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">List of Dialogs</h2>
      <ul>
        {sortedItems && sortedItems.map((item) => (
          <SingleDialog
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          voteCount={item.voteCount}
          />
        ))}
      </ul>
    </div>
  );
};

export default DialogsList;

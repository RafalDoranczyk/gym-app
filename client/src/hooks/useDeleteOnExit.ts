import { useState } from "react";

const UseDeleteOnExit = () => {
  const [deletedItem, setDeletedItem] = useState(0);

  const onDeleteClick = (itemId: number) => {
    setDeletedItem(itemId);
  };

  return {
    deletedItem,
    onDeleteClick,
  };
};

export default UseDeleteOnExit;

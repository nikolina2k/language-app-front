import itemsFinished from "./ItemsFinished";
import SingleDialog from "./SingleDialog";

const DialogsListFinished = () => {
  const sortedItems = itemsFinished.slice().sort((a, b) => b.voteCount - a.voteCount);
  
  return (
    <div className="p-4 mt-6">
      <ul>
        {sortedItems &&
          sortedItems.map((item) => (
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

export default DialogsListFinished;

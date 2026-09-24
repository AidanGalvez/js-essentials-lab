import BookmarkItem from './BookmarkItem';

const BookmarkList = props => {
  if (props.items.length === 0) {
    return <p>No bookmarks found in this category.</p>;
  }
  
  return (
    //Dynamic Inline Styling
    <ul style={{
      listStyle: "none", 
      padding: 0, 
      margin: 0, 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center",
      backgroundColor: props.items.length >= 3 ? "#793e85" : "#a1104c"
      }}>
      {props.items.map(bookmark => (
        <BookmarkItem
          key={bookmark.id}
          id={bookmark.id}
          title={bookmark.title}
          url={bookmark.url}
          category={bookmark.category}
          isFavorite={bookmark.isFavorite}
          onToggleFavorite={props.onToggleFavorite}
          onDelete={props.onDelete}
        />
      ))}
    </ul>
  );
};

export default BookmarkList;
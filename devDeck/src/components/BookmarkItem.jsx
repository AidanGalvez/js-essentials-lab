import styled from 'styled-components'

// Styled Components
const Button = styled.button`
font: inherit;
padding: 0.5rem 1.5rem; 
border: none; 
background-color: #492365;
color: #ffffff; 
cursor: pointer;
margin-right: 1rem;
&:hover,
  &:active {
  background-color: #36194b;
}
`;

const Div = styled.div`
overflowX: auto;
width: 18rem;
padding: 1rem;
background-color: #18002b;
border-radius: 2rem;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
margin: 1rem;
}
`;

const BookmarkItem = props => {
  return (
    <Div>
      <li>
        <div>
          <h3>{props.title}</h3>
          <span>{props.category}</span>
        </div>

        <p style={{marginBottom: "1rem"}}>
          <a href={props.url} target="_blank" rel="noreferrer">
            {props.url}
          </a>
        </p>

        <div>
          <Button onClick={() => props.onToggleFavorite(props.id)}>
            {props.isFavorite ? '★ Favorited' : '☆ Favorite'}
          </Button>
          <Button onClick={() => props.onDelete(props.id)}>
            Delete
          </Button>
        </div>
      </li>
    </Div>
  );
};

export default BookmarkItem;
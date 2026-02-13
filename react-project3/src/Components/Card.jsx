
import './Card.css'

function Card({ data2 }) {
  if (!data2) return null;

  return (
    <>
      {data2.map(item => 
        <div key={item.id} className='card'>
          <h4>Product Name: {item.name}</h4>
          <p>Product color: {item.color}</p>
        </div>
      )}
    </>
  );
}

export default Card;
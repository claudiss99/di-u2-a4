import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  // Filtramos la lista de personas en dos categorías: Químicos y Todos los demás
  const chemists = people.filter(person => person.profession === 'químico');
  const others = people.filter(person => person.profession !== 'químico');

  // Mapeamos cada lista a un conjunto de elementos <li>
  const chemistItems = chemists.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        conocido/a por {person.accomplishment}
      </p>
    </li>
  );

  const otherItems = others.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        conocido/a por {person.accomplishment}
      </p>
    </li>
  );

  return (
    <article>
      <h1>Químicos</h1>
      <ul>{chemistItems}</ul>
      
      <h1>Todos los demás</h1>
      <ul>{otherItems}</ul>
    </article>
  );
}

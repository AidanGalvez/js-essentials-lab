import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

function PropertiesPage() {
  const properties = useLoaderData();
  const [filterTerm, setFilterTerm] = useState("");

  const filteredProperties = properties.filter((property) =>{
    const filter = filterTerm.toLowerCase();
    return(
      property.title.toLowerCase().includes(filter) ||
      property.address.toLowerCase().includes(filter)
    );
  })

  return (
    <section>
      <h1>All Properties</h1>
      <input type= "text" placeholder='Filer Properties...' value = {filterTerm} onChange={(e) => setFilterTerm(e.target.value)}></input>
      <ul>
        {filteredProperties.map((property) => (
          <li key={property.id}>
            <Link to={property.id}>
              <img src={property.image} alt={property.title} style={{ maxWidth: '200px' }} />
              <h2>{property.title}</h2>
              <p>{property.address}</p>
              <p>${property.rent} / month</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PropertiesPage;

export async function propertiesLoader() {
  const response = await fetch('http://localhost:3000/properties');

  if (!response.ok) {
    throw new Response(
      JSON.stringify({title: "Load error", message: "Unable to load property data."}),
      {status: 500}
    );
  } else {
    const data = await response.json();
    return data;
  }

}
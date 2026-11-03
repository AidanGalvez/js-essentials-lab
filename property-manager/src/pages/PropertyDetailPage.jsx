import { Link, useRouteLoaderData, redirect, useSubmit } from 'react-router-dom';

function PropertyDetailPage() {
  const property = useRouteLoaderData("property-detail");
  const submit = useSubmit();

  function startDeleteHandler(){
    const proceed = window.confirm("Are you sure you would like to delete this property?");

    if(proceed)
      submit(null, {method: "delete"});
  }

  return (
    <section>
      <article>
        <h1>{property.title}</h1>
        <img src={property.image} alt={property.title} style={{ maxWidth: "400px" }}></img>
        <p>Address: {property.address}</p>
        <p>Rent: {property.rent} per month</p>
        <p>{property.description}</p>
        <div>
          <Link to="edit">Edit Property</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </div>
      </article>
    </section>
  );
}

export default PropertyDetailPage;

export async function propertyDetailLoader({request, params}) {
  const id = params.propertyId;
  const response = await fetch('http://localhost:3000/properties/' + id);

  if (!response.ok) {
    throw new Response(
      JSON.stringify({title: "Load error", message: "Unable to load selected property data"}),
      {status: 500}
    );
  } else {
    return response;
  }

}

export async function deletePropertyAction({request, params}) {
 const id = params.propertyId;
  const response = await fetch ("http://localhost:3000/properties/" + id, {
    method: request.method
  });

  if(!response.ok){
    throw new Response(
      JSON.stringify({title: "Delete Error", message: "Could not delete property."}),
      {status: 500}
    );
  }

  return redirect("/properties");
}
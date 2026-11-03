import { useNavigate, Form, redirect, useNavigation} from 'react-router-dom';

function PropertyForm({ method, property }) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method = { method }>
      <p>
        <label htmlFor="title">Property Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={property ? property.title : ""}
        />
      </p>

      <p>
        <label htmlFor="image">Image URL</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={property ? property.image : ""}
        />
      </p>

      <p>
        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          name="address"
          required
          defaultValue={property ? property.address : ""}
        />
      </p>

      <p>
        <label htmlFor="rent">Monthly Rent ($)</label>
        <input
          id="rent"
          type="number"
          name="rent"
          required
          defaultValue={property ? property.rent : ""}
        />
      </p>

      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={property ? property.description : ""}
        />
      </p>

      <div>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmitting}>Save</button>
      </div>
    </Form>
  );
}

export default PropertyForm;

export async function manipulatePropertyAction({request, params}) {
  const method = request.method;
  const data = await request.formData();

  const propertyData = {
    title: data.get("title"),
    image: data.get("image"),
    address: data.get("address"),
    rent: data.get("rent"),
    description: data.get("description")
  };
  
  let url = "http://localhost:3000/properties"

  if (method === "PATCH")
    url += "/" + params.propertyId;

  const response = await fetch (url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(propertyData)
    });

  if(!response.ok){
    throw new Response(
      JSON.stringify({title: "Update Error", message: "could not update property."}),
      {status: 500}
    );
  }

  return redirect("/properties");
}
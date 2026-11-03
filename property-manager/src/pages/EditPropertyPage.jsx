import { useRouteLoaderData } from 'react-router-dom';
import PropertyForm from '../components/PropertyForm';

function EditPropertyPage() {
  const property = useRouteLoaderData("property-detail");

  return <PropertyForm method="patch" property={property}/>;
}

export default EditPropertyPage;
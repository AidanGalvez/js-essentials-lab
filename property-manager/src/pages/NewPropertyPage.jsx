import PropertyForm from '../components/PropertyForm';
import { redirect } from 'react-router-dom';

function NewPropertyPage() {
  return <PropertyForm method="post" />;
}

export default NewPropertyPage;


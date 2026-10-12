import { useRef } from 'react';
import styles from './SelectCity.module.css';

function SelectCity(props) {
  const cityInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const city = cityInputRef.current.value;

    props.onSelectedCity(city);
    cityInputRef.current.value = '';
  }

  return (
    <form onSubmit={submitHandler} className={styles['city-search-form', 'container']}>
      <div className={styles['form-group']}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} required />
      </div>
      <button type="submit">Select City</button>
    </form>
  );
}

export default SelectCity;
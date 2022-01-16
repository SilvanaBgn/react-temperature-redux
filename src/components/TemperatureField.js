import { useSelector } from 'react-redux';

function TemperatureField(props) {
  console.log(props.scaleName, 'render');

  const tempValue = useSelector(state => state.temperature);
  return (
    <fieldset>
       <legend>Enter temperature in {props.scaleName}:</legend>
       <input value={tempValue}></input>
    </fieldset>
  )
}

export default TemperatureField;
import { useDispatch, useSelector } from 'react-redux';
import { SCALES, SCALE_CONVERSION } from '../utils/TempUnits';
import tempHasChanged from '../actions';

function TemperatureField(props) {
  console.log('TemperatureField', SCALES[props.scaleLetter].scaleName, 'render');

  const temperature = useSelector(state => state.temperature);
  const dispatch = useDispatch();

  function handleTemperature(e) {
    dispatch(tempHasChanged(e.target.value, props.scaleLetter));
  }

  function getValue() {
    const stateScale = temperature.scale;
    const myScale = props.scaleLetter;
    const stateValue = temperature.value;

    if(stateScale !== myScale) {
      return SCALE_CONVERSION[`${stateScale}${myScale}`](stateValue);
    }

    return stateValue;
  }

  return (
    <fieldset>
       <legend>Enter temperature in {SCALES[props.scaleLetter].scaleName}:</legend>
       <input value={getValue()}
              type="number"
              onChange={handleTemperature} >
       </input>
    </fieldset>
  )
}

export default TemperatureField;
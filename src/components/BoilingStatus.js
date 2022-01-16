import { useSelector } from "react-redux";
import { SCALES } from "../utils/TempUnits";

const isBoilingMessage = (temp, scale) => {
  if(temp >= SCALES[scale].boilTemp) {
    return 'Water IS boiling'
  }
  return 'There is still no heat to boil the water';
}

function BoilingStatus(props) {
  console.log('BoilingStatus');

  const {value: tempValue, scale} = useSelector(state => state.temperature);

  return (
    <p><b>{ isBoilingMessage(tempValue, scale)}</b></p>
  )
}

export default BoilingStatus;
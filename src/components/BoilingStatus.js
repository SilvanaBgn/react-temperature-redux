import { useSelector } from "react-redux";

const isBoiling = (celsiusTemperature) => {
  return celsiusTemperature >= 100;
}

function BoilingStatus(props) {
  console.log('BoilingStatus');

  const tempValue = useSelector(state => state.temperature);

  return (
    <p><b>{ isBoiling(tempValue) ? 'Water IS boiling': 'There is still no heat to boil the water' }</b></p>
  )
}

export default BoilingStatus;
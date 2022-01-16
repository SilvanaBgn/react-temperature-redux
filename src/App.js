import Field from './components/TemperatureField';
import BoilingStatus from './components/BoilingStatus';
// import {toCelsius, toFahrenheit} from './utils/TempUnits'

function App() {
  console.log('App');
  // const [temp, setTemp] = useState({ value: 0, scale: 'c'});

  // function updateTemp(pNewTemp, pScale) {
  //   setTemp((prevTemp) => {
  //     if(prevTemp.value !== pNewTemp) {
  //       return {
  //         value: pNewTemp,
  //         scale: pScale
  //       }
  //     }
  //   });
  // }

  // function handleTempCelsius(newTempC) {
  //   console.log('Celsius newTemp', newTempC);
  //   updateTemp(newTempC, 'c');
  // }
  // function handleTempFahrenheit(newTempF) {
  //   console.log('Fahrenheit newTemp', newTempF);
  //   updateTemp(newTempF, 'f');
  // }

  // let celsius, fahrenheit;
  // if(temp.scale === 'c') {
  //   celsius = temp.value;
  //   fahrenheit = toFahrenheit(temp.value);
  // } else {
  //   fahrenheit = temp.value;
  //   celsius = toCelsius(temp.value);
  // }


  return (
    <section className="App">
      <h1>Temperature</h1>
      <p><i>State handled with Redux</i></p>
      <Field scaleName = "Celsius" />
      {/* <Field scaleName = "Fahrenheit" tempValue = {fahrenheit} handleTemp = {handleTempFahrenheit} /> */}
      <BoilingStatus />
    </section>
  );
}

export default App;

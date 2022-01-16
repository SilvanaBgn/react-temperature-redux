import Field from './components/TemperatureField';
import BoilingStatus from './components/BoilingStatus';

function App() {
  console.log('App');

  return (
    <section className="App">
      <h1>Temperature</h1>
      <p><i>State handled with Redux</i></p>
      <Field scaleName = "Celsius" scaleLetter="C" />
      <Field scaleName = "Fahrenheit" scaleLetter="F" />
      <BoilingStatus />
    </section>
  );
}

export default App;

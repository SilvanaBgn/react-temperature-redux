import Field from './components/TemperatureField';
import BoilingStatus from './components/BoilingStatus';

function App() {
  console.log('App');

  return (
    <section className="App">
      <h1>Temperature</h1>
      <p><i>State handled with Redux</i></p>
      <Field scaleLetter="C" /> {/* Celsius */}
      <Field scaleLetter="F" /> {/* Fahrenheit */}
      <BoilingStatus />
    </section>
  );
}

export default App;

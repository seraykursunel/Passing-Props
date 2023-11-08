import "./styles.css";

//arrow function ile yazılmış function component
const Dog = (props) => {
  return (
    <h1>
      Köpeğim {props.color} {props.breed}.
    </h1>
  );
};

//function declaration ile yazılmış function component
function Car(props) {
  return (
    <h1>
      Arabam {props.carModel} {props.carMake}.
    </h1>
  );
}

//function expression ile yazılmış function component
const Location = function (props) {
  return <h1>Adresim {props.city}.</h1>;
};

const App = function () {
  const state = {
    dogColor: "black",
    dogBreed: "Scottish Terrier",
    carMake: "Nissan",
    carModel: "GT-R",
    city: "Mars"
  };
  return (
    <div>
      <Dog breed={state.dogBreed} />
      <Car carModel={state.carModel} carMake={state.carMake} />
      <Location city={state.city} />
    </div>
  );
};

export default App;

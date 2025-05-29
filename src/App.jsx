import "./App.css";

function App() {
  return (
    <>
      <div>
        <p>hello world</p>
      </div>
      <Text display="hello world" />
      <Text display="yes" />
      <Text display="no" />
      <Text display="oops" />
    </>
  );
}

function Text({ display }) {
  return (
    <div>
      <p>{display}</p>
    </div>
  );
}

export default App;

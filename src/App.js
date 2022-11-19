import Form from "./form";
import logo from "./images/logo.png"

function App() {
  return (
    <div className="relative"
    style={{
      background:"#252525"
    }}>
      <h1 className="text-center font-bold text-black text-3xl md:p-8 py-10 ">
        ISTE REGISTRATION
      </h1>
      <div class="relative ">
        <div class="logo absolute pt-36"><img className="animate-spin  " src={logo}/></div>
        <Form  />
      </div>
    </div>
  );
}

export default App;

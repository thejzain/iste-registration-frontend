import Form from "./form";
import logo from "./images/logo.png"
import logotxt from "./images/logo_txt(2).png"

function App() {
  return (
    <div className="relative"
    style={{
      background:"#252525"
    }}>
    <nav className="bg-nav pb-3">
      <div className="pt-4 pl-5 "><img src={logotxt} className="h-11"/></div>
    </nav>
      <h1 className="text-center font-bold text-black text-3xl md:p-8 pb-10 pt-6 ">
        ISTE REGISTRATION
      </h1>
      <div class="relative ">
        <div class="logo absolute pt-36 opacity-30"><img className="animate-spin  " src={logo}/></div>
        <Form  />
      </div>
    </div>
  );
}

export default App;

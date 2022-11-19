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
      <h1 className="text-center font-bold text-black text-4xl  pb-20 pt-6 ">
        ISTE REGISTRATION
      </h1>
      <div class=" relative grid md:grid-cols-2">
      
        <div class="logo absolute  pt-36 opacity-30 "><img className="animate-spin w-5/6 md:w-100 " src={logo}/>
        </div>
        <Form  />
        <div className=" px-7 lx:pl-0 text-center relative pb-16">
          <div className="border px-10 rounded-xl justify-center">
            <h2 className="  text-3xl font-bold text-center pt-10 xl:pt-10">ISTE</h2>
            <p className="py-5 pb-10 text-lg ">ISTE Students Chapter TKMCE is dedicated in fulfilling the goals set by the national professional society for the overall development of the technical education system. It assists and contributes to the production and development of professional engineers, providing guidance and training to them to develop better learning skills and personalities.</p>
          </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;

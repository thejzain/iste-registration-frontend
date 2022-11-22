import Form from "./form";
import logo from "./images/logo.png"
import leap from "./images/leap.png"
import logotxt from "./images/logo_txt(2).png"
const backendurl = "https://app.istetkmce.in"
function App() {
  return (
    <div className="relative  background color"
    >
    <nav className="bg-nav grid grid-cols-2">
      <div className="pt-4 pl-5 "><img src={logotxt} className="h-11"/></div>
      <div className="pr-4 flex justify-end"><img className="h-20" src={leap}/></div>
    </nav>
      <h1 className="text-center font-bold grid place-items-center border-b text-black mb-12 pb-4 pt-6 ">
        <span className="text-4xl flex items-center justify-center">ISTE</span><span className="flex text-xl">MEMBERSHIP DRIVE</span> 
      </h1>
      <div className=" relative grid md:grid-cols-2 overflow-hidden md:px-36">
      <div className=" logo absolute min-h-screen w-screen grid place-items-center min-w-screen opacity-30"><img className="  animate-spin w-[300px] md:w-1/2 opacity-50" src={logo}/>
        
        </div>
        <Form  backendurl={backendurl}/>
        <div className=" px-7 lx:pl-0 text-center relative pb-16 ">
          <div className="border px-10 rounded-xl bg-[#2F366A] justify-center shadow-xl">
            <h2 className="  text-3xl font-bold text-center pt-10 xl:pt-10 ">ISTE</h2>
            <p className="py-5 pb-10 text-lg opacity-75 text-left">ISTE Students Chapter TKMCE is dedicated in fulfilling the goals set by the national professional society for the overall development of the technical education system. It assists and contributes to the production and development of professional engineers, providing guidance and training to them to develop better learning skills and personalities.</p>
          </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;

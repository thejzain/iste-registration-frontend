import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify";
import { usePromiseTracker, trackPromise } from "react-promise-tracker";
const Form = ({ backendurl }) => {
  const [file, setFile] = useState(null);
  const [state, setState] = useState({})
  const [open, setOpen] = useState(false)
  const [amount, setAmount] = useState("Rs. 600")
  function handleChange(evt) {
    const value = evt.target.value;
    console.log(state)

    setState({
      ...state,
      [evt.target.name]: value
    });
  }
  function handleFile(e) {

    setFile(e.target.files[0])

  }
  const LoadingIndicator = (props) => {
    const { promiseInProgress } = usePromiseTracker();
    return (
      promiseInProgress && (
        <>
          <br></br>
          <progress className="progress progress-info bg-black w-full md:w-full md:pr-4 my-6"></progress>
          <br></br>
        </>
      )
    );
  };

  const onSubmit = (event) => {
    if (!state.name || !state.email || !state.phonenumber || !state.dob || !state.branch || !state.batch || !state.year || !state.admissionyear || !state.address || !state.specialinterests || !state.careerpreference || !state.typeofservice || !state.accholdersname || !state.transactionid || !file || !state.istemember || !state.leapmembership) {
      toast.error("Fill all the fields to submit")
    }
    else {

      const data = new FormData();


      data.append('file', file);

      data.append('data', JSON.stringify(state))
      console.log("clicked", file)
      trackPromise(axios.put(`${backendurl}/user`, data, { headers: { 'Content-Type': 'multipart/form-data' }, body: JSON.stringify(state) }).then(response => {

        if (response.data.status === 200) {
          console.log("success")
          console.log(response.message)
          toast.success("User registered")
        }
        else if (response.data.status === 403) {
          toast.warning("Email already in use. Contact admin for assistance")
        }
        else {
          console.log("error")
          toast.error("Couldn't register user. Contact admin for help")
        }
      }))
    }

    event.preventDefault();
  }

  useEffect(() => {

    state.specialinterests === "Other" ? setOpen(true) : setOpen(false)
    if(state.istemember === "true" && state.leapmembership === "true"){
      setAmount("Rs 100")
    }
    else if(state.istemember === "true"){
      setAmount("Rs 0")
    }

    if (state.branch === "arch") {
      if (state.year === "1") {
        setAmount("Rs 700")
      }
      else if (state.year === "2") {
        setAmount("Rs 600")
      }
      else if (state.year === "3") {
        setAmount("Rs 500")
      }
      else if (state.year === "4") {
        setAmount("Rs 400")
      }
    }
    else {
      if (state.year === "1") {
        setAmount("Rs 600")
      }
      else if (state.year === "2") {
        setAmount("Rs 500")
      }
      else if (state.year === "3") {
        setAmount("Rs 400")
      }
    }
  }, [state.specialinterests, state.year, state.branch, state.istemember, state.leapmembership])


  return (
    <form className="md:pl-10  grid place-items-start pl-5 text-white opacity-75 transition-all text-xl" onSubmit={onSubmit}>
      <div className="name grid grid-rows-2 w-3/4 pb-7">
        <span className="pb-3">
          <label>Name</label>
        </span>
        <input
          className="input w-full max-w-xs"
          type={"text"}
          placeholder="Name"
          name="name"
          onChange={handleChange}
        ></input>
      </div>
      <div className="email grid grid-rows-2 w-3/4 pb-7">
        <span className="pb-3">
          <label>Email</label>
        </span>

        <input
          className="input w-full max-w-xs"
          type={"email"}
          placeholder="Email"
          name="email"
          onChange={handleChange}
        ></input>
      </div>
      <div className="phone grid grid-rows-2 w-3/4 pb-7">
        <span className="pb-3">
          <label>Phone Number</label>
        </span>

        <input
          className="input w-full max-w-xs"
          type={"number"}
          placeholder="Phone Number"
          name="phonenumber"
          onChange={handleChange}
        ></input>
      </div>

      <div className="add-year grid grid-rows-2 w-3/4 pb-7">
        <span className="pb-3">
          <label>Date of Birth</label>
        </span>



        <input className="w-3/4 px-2 py-4 rounded-lg gray-bg " type={"date"} name="dob" onChange={handleChange}></input>
      </div>
      <div className="branch grid grid-rows-2 w-3/4 pb-7 ">
        <span className="pb-3">
          <label>Branch</label>
        </span>

        <div>
          <select onChange={handleChange} name="branch" className="w-3/4 py-4 px-1 rounded-lg gray-bg">
            <option value={"null"} disabled selected >choose branch</option>
            <option value={"ece"}>ECE (T)</option>
            <option value={"mech"}>Mech (M)</option>
            <option value={"civil"}>Civil (C)</option>
            <option value={"cs"}>CS (R)</option>
            <option value={"eee"}>EEE (E)</option>
            <option value={"chem"}>Chem(H)</option>
            <option value={"arch"} >Arch(A)</option>
            <option value={"mech-pro"}>Mech Pro</option>
            <option value={"electrical&computer"}>ERE</option>
          </select>
        </div>
      </div>
      <div className="branch grid grid-rows-2 w-3/4 pb-7 ">
        <span className="pb-3">
          <label>Batch</label>
        </span>

        <div>
          <select onChange={handleChange} name="batch" className="w-3/4 py-4 px-1 rounded-lg gray-bg">
            <option value={"null"} disabled selected>choose batch</option>
            <option value={"A"}>A</option>
            <option value={"B"}>B</option>
            <option value={"C"}>C</option>
          </select>
        </div>
      </div>

      <div className="branch grid grid-rows-2 w-3/4 pb-7 ">
        <span className="pb-3">
          <label>Year</label>
        </span>

        <div>
          <select onChange={handleChange} name="year" className="w-3/4 py-4 rounded-lg gray-bg">
            <option value={"null"} disabled selected>choose year</option>
            <option value={"1"}>1</option>
            <option value={"2"}>2</option>
            <option value={"3"}>3</option>
            {state.branch === "arch" ? <option value={"4"}>4</option> : null}
          </select>
        </div>
      </div>

      <div className="add-year grid grid-rows-2 w-3/4 pb-7">
        <span className="pb-3">
          <label>Admission Year</label>
        </span>
        <div className="form-check dropdown-item ">
          <select className="w-3/4 py-4 rounded-lg gray-bg " name="admissionyear" onChange={handleChange}>
            <option value={"null"} disabled selected>choose admission year</option>
            <option value={"2019"}> 2019</option>
            <option value={"2020"}> 2020</option>
            <option value={"2021"}> 2021</option>
            <option value={"2022"}> 2022</option>
          </select>
        </div>
      </div>
      <div className="add-number grid grid-rows-2 w-3/4 pb-7">
        <span className="pb-3">
          <label>Admission Number</label>
        </span>

        <input
          className="input w-full max-w-xs"
          type={"number"}
          placeholder={"Addmission Number"}
          name="admissionnumber"
          onChange={handleChange}
        ></input>
      </div>
      <div className="address grid grid-rows-2 w-3/4 pb-7">
        <span className="pb-3">
          <label>Address</label>
        </span>

        <input
          className="textarea"
          type={"text"}
          placeholder={"Address"}
          name="address"
          onChange={handleChange}
        ></input>
      </div>
      <div className="sp-intrest grid grid-rows-2 w-3/4 pb-7">
        <span className="">
          <label>Special Interests</label>
        </span>
        <br />
        {open === true ?
          <input
            className="input w-full max-w-xs"
            type={"text"}
            placeholder="special interests"
            name="specialinterests"
            onChange={handleChange}
          ></input>
          : <div className="form-check dropdown-item ">
            <select className="w-3/4 py-4 rounded-lg gray-bg " name="specialinterests" onChange={handleChange}>
              <option value={"null"} disabled selected>choose option</option>
              <option value={"Sports"}> Sports</option>
              <option value={"Games"}> Games</option>
              <option value={"Reading"}> Reading</option>
              <option value={"Literary"}> Literary</option>
              <option value={"Drama"}> Drama</option>
              <option value={"Music"}> Music</option>
              <option value={"Photography"}> Photography</option>
              <option value={"Other"}>Other</option>
            </select>
          </div>}
      </div>
      <div className="career grid grid-rows-2 w-3/4 pb-7">
        <span className="pb-3"><label>Career Preference</label></span>
        <div>
          <select className="w-3/4 py-4 rounded-lg gray-bg" name="careerpreference" onChange={handleChange}>
            <option value={"null"} disabled selected>choose option</option>
            <option value={"Teaching "}> Teaching </option>
            <option value={"Research"}> Research Work </option>
            <option value={" Govt. Jobs"}> Govt. Jobs </option>
            <option value={"Public Sector Undertaking"}> Public Sector Undertaking</option>
            <option value={" Private Industries"}> Private Industries</option>
            <option value={"Higher Studies"}> Higher Studies</option>
            <option value={"Managment Studies"}> Managment Studies</option>

          </select>
        </div>
      </div>
      <div className="service grid grid-rows-2 w-3/4 pb-7">
        <span className="pb-3"><label>Preferred Type Of Services</label></span>
        <div>
          <select name="typeofservice" onChange={handleChange} className="w-3/4 py-4 rounded-lg gray-bg">
            <option value={"null"} disabled selected>choose option</option>
            <option value={" Coaching for competitive examination, job interview "}> Coaching for competitive examination, job interview </option>
            <option value={" Supervisory and communication skill "}> Supervisory and communication skill </option>
            <option value={"Training for self-employment"}> Training for self-employment </option>
            <option value={"Guidence on job oppertunities in India and abroad"}> Guidence on job oppertunities in India and abroad</option>
            <option value={"Arranging training in industries and visit to industry"}> Arranging training in industries and visit to industry</option>
            <option value={" Awareness on social, cultural and ethical values and norms"}> Awareness on social, cultural and ethical values and norms</option>
            <option value={"General counselling services"}> General counselling services</option>

          </select>
        </div>
      </div>
      <div className="grid grid-rows-2  w-3/4 pb-7">
        <span className="pb-7"><label>Are You ISTE Member ?</label></span>
        <div className="grid grid-cols-2 w-2/4">
          
          
          <div><input type={'radio'} className="radio" name='istemember' onChange={handleChange} value={true}/>Yes</div>
          <div><input type={'radio'} className="radio" name='istemember' onChange={handleChange} value={false}/>No</div>

         
        </div>
      </div>
      <div className="grid grid-rows-2  w-3/4 pb-7">
        <span className="pb-7"><label>ISTE LEAP Membership</label></span>
        <div className="grid grid-cols-2 w-2/4">
          <div><input type={"radio"} className={"radio"} onChange={handleChange} name="leapmembership" value={true}/> Yes</div>
          <div><input type={"radio"} className={"radio"} onChange={handleChange} name="leapmembership" value={false}/> No</div>

        </div>
      </div>
      <div className="bg-[#2F366A] hover:font-bold rounded-md w-3/4 p-4 mb-4 grid place-items-center border">
        <label className="">Amount</label>
        <div className="bg-black hover:font-bold bg-opacity-50 rounded w-3/4 flex items-center justify-center">
          {amount}
        </div>
      </div>
      <div className="acc-name grid grid-rows-2  w-3/4 pb-7">
        <span className="pb-3">
          <label>Account Holders Name</label>
        </span>
        <input
          className="input w-full max-w-xs"
          type={"text"}
          placeholder="Account Holders Name"
          name="accholdersname"
          onChange={handleChange}
        ></input>
      </div>
      <div className="trans-id grid grid-rows-2  w-3/4 pb-7">
        <span className="pb-3">
          <label>Transaction ID</label>
        </span>
        <input
          className="input w-full max-w-xs"
          type={"number"}
          placeholder="Transaction ID"
          name="transactionid"
          onChange={handleChange}
        ></input>
      </div>
      <div className="ss grid grid-rows-2 w-3/4 pb-7">
        <span className="pb-3">
          <label>Screenshot</label>
        </span>
        <input type="file" name="file" onChange={handleFile} className="file-input file-input-bordered w-full max-w-xs" />
      </div>

      <div className="place-self-center sub-btn flex justify-center py-10">
        <button type="submit" className="btn btn-normal bg-[#162173]">Submit</button>
      </div>

      <LoadingIndicator />
    </form>
  );
};

export default Form;

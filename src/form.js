const Form = () => {
  return (
    <div className="pl-5 text-white opacity-75 transition-all text-xl">
      <div class="name grid grid-rows-2  w-3/4 pb-7">
        <span className="pb-3">
          <label>Name</label>
        </span>
        <input
          className="input w-full max-w-xs"
          type={"text"}
          placeholder="Name"
        ></input>
      </div>
      <div class="email grid grid-rows-2 w-3/4 pb-7">
        <span className="pb-3">
          <label>Email</label>
        </span>

        <input
          className="input w-full max-w-xs"
          type={"email"}
          placeholder="Email"
        ></input>
      </div>
      <div class="phone grid grid-rows-2 w-3/4 pb-7">
        <span className="pb-3">
          <lable>Phone Number</lable>
        </span>

        <input
          className="input w-full max-w-xs"
          type={"number"}
          placeholder="Phone Number"
        ></input>
      </div>
      <div class="dob grid grid-rows-2 w-3/4 pb-7">
        <span className="pb-3">
          <label>Date Of Birth</label>
        </span>

        <input className="w-3/4 py-4 rounded-lg gray-bg " type={"date"}></input>
      </div>
      <div class="branch grid grid-rows-2 w-3/4 pb-7 ">
        <span className="pb-3">
          <label>Branch</label>
        </span>

        <div>
          <select className="w-3/4 py-4 rounded-lg gray-bg">
            <option value={"ece"}>ECE (T)</option>
            <option value={"mech"}>Mech (M)</option>
            <option value={"civil"}>Civil (C)</option>
            <option value={"cs"}>CS (R)</option>
            <option value={"eee"}>EEE (E)</option>
            <option value={"chem"}>Chem(H)</option>
            <option value={"arch"}>Arch(A)</option>
          </select>
        </div>
      </div>
      <div class="batch grid grid-rows-2 w-3/4 pb-7">
        <span className="pb-3">
          <label>Batch</label>
        </span>

        <div>
          <span className="px-3">
            <input className="radio-md" type={"radio"} value="A" name="batch" />
            <spn className="text-lg"> A</spn>
          </span>
          <span className="px-3">
            <input className="radio-md" type={"radio"} value="B" name="batch" />
            <spn className="text-lg"> B</spn>
          </span>
          <span className="px-3">
            <input className="radio-md" type={"radio"} value="C" name="batch" />
            <spn className="text-lg"> C</spn>
          </span>
        </div>
      </div>
      <div class="year grid grid-rows-2 w-3/4 pb-7">
        <span className="pb-3">
          <label>Year</label>
        </span>

        <div>
          <span className="px-3">
            <input className="radio-md" type={"radio"} value="1" name="year" />
            <span className="text-xl"> 1</span>
          </span>
          <span className="px-3">
            <input className="radio-md" type={"radio"} value="2" name="year" />
            <span className="text-xl"> 2</span>
          </span>
          <span className="px-3">
            <input className="radio-md" type={"radio"} value="3" name="year" />
            <span className="text-xl"> 3</span>
          </span>
          <span className="px-3">
            <input className="radio-md" type={"radio"} value="4" name="year" />
            <span className="text-xl"> 4</span>
          </span>
        </div>
      </div>
      <div class="ad-year grid grid-rows-2 w-3/4 pb-7">
        <span className="pb-3">
          <label>Admission Year</label>
        </span>

        <input className="w-3/4 py-4 rounded-lg gray-bg "type={"date"}></input>
      </div>
      <div class="add-number grid grid-rows-2 w-3/4 pb-7">
        <span className="pb-3">
          <label>Admission Number</label>
        </span>

        <input
          className="input w-full max-w-xs"
          type={"number"}
          placeholder={"Addmission Number"}
        ></input>
      </div>
      <div class="address grid grid-rows-2 w-3/4 pb-7">
        <span className="pb-3">
          <lable>Address</lable>
        </span>

        <input
          className="textarea"
          type={"text"}
          placeholder={"Address"}
        ></input>
      </div>
      <div class="sp-intrest grid grid-rows-2 w-3/4 pb-7">
        <span className="">
          <label>Special Interests</label>
        </span>
        <be />
        <div className="form-check dropdown-item ">
          <select className="w-3/4 py-4 rounded-lg gray-bg ">
            <option value={""}> Sports</option>
            <option value={""}> Games</option>
            <option value={""}> Reading</option>
            <option value={""}> Literary</option>
            <option value={""}> Drama</option>
            <option value={""}> Music</option>
            <option value={""}> Photography</option>
          </select>
        </div>
      </div>
      <div className="career grid grid-rows-2 w-3/4 pb-7">
        <span className="pb-3"><label>Career Preferance</label></span>
        <div>
            <select className="w-3/4 py-4 rounded-lg gray-bg">
                <option value={""}> Teaching </option>
                <option value={""}> Research Work </option>
                <option value={""}> Govt. Jobs </option>
                <option value={""}> Public Sector Undertaking</option>
                <option value={""}> Private Industries</option>
                <option value={""}> Higher Studies</option>
                <option value={""}> Managment Studies</option>
                
            </select>
        </div>
      </div>
      <div className="service grid grid-rows-2 w-3/4 pb-7">
        <span className="pb-3"><label>Preffered Type Of Services</label></span>
        <div>
            <select className="w-3/4 py-4 rounded-lg gray-bg">
                <option value={""}> Coaching for competitive examination, job interview </option>
                <option value={""}> Supervisory and communication skill </option>
                <option value={""}> Training for self-employment </option>
                <option value={""}> Guidence on job oppertunities in India and abroad</option>
                <option value={""}> Arranging training in industries and visit to industry</option>
                <option value={""}> Awareness on social, cultural and ethical values and norms</option>
                <option value={""}> General counselling services</option>
                
            </select>
        </div>
      </div>
      <div class="acc-name grid grid-rows-2  w-3/4 pb-7">
        <span className="pb-3">
          <label>Account Holders Name</label>
        </span>
        <input
          className="input w-full max-w-xs"
          type={"text"}
          placeholder="Account Holders Name"
        ></input>
      </div>
      <div class="trans-id grid grid-rows-2  w-3/4 pb-7">
        <span className="pb-3">
          <label>Transaction ID</label>
        </span>
        <input
          className="input w-full max-w-xs"
          type={"number"}
          placeholder="Transaction ID"
        ></input>
      </div>
      <div class="ss grid grid-rows-2  w-3/4 pb-7">
        <span className="pb-3">
          <label>Screenshot</label>
        </span>
        <input type="file" class="file-input file-input-bordered w-full max-w-xs" />
      </div>
      
      <div class="sub-btn flex justify-center py-10">
        <button className="btn btn-warning">Submit</button>
      </div>
    </div>
  );
};

export default Form;

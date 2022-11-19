const Form = () => {
  return (
    <div className="pl-5">
      <div class="name grid grid-rows-2  w-3/4">
        <span className="pb-2">
          <label>Name</label>
        </span>
        <input type={"text"} placeholder="Name"></input>
      </div>
      <div class="email grid grid-rows-2 w-3/4">
        <span className="pb-2">
          <label>Email</label>
        </span>

        <input type={"email"} placeholder="Email"></input>
      </div>
      <div class="phone grid grid-rows-2 w-3/4">
        <span className="pb-2">
          <lable>Phone Number</lable>
        </span>

        <input type={"number"} placeholder="Phone Number"></input>
      </div>
      <div class="dob grid grid-rows-2 w-3/4">
        <span className="pb-2">
          <label>Date Of Birth</label>
        </span>

        <input type={"date"}></input>
      </div>
      <div class="branch grid grid-rows-2 w-3/4">
        <span className="pb-2"><label>Branch</label></span>

        <div>
          <select className="opacity-75">
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
      <div class="batch grid grid-rows-2 w-3/4">
        <span className="pb-2"><label>Batch</label></span>

        <div>
          <span className="px-3"><input type={"radio"} value="A" name="batch" />A</span>
          <span className="px-3"><input type={"radio"} value="B" name="batch" />B</span>
          <span className="px-3"><input type={"radio"} value="C" name="batch" />C</span>
        </div>
      </div>
      <div class="year grid grid-rows-2 w-3/4">
        <span className="pb-2"><label>Year</label></span>

        <div>
          <span className="px-3"><input type={"radio"} value="1" name="year" />1</span>
          <span className="px-3"><input type={"radio"} value="2" name="year" />2</span>
          <span className="px-3"><input type={"radio"} value="3" name="year" />3</span>
          <span className="px-3"><input type={"radio"} value="4" name="year" />4</span>
        </div>
      </div>
      <div class="adyear grid grid-rows-2 w-3/4">
        <label>Admission Year</label>

        <select>{/* Year slider */}</select>
      </div>
      <div class="add-number grid grid-rows-2 w-3/4">
        <label>Admission Number</label>

        <input type={"number"} placeholder={"Addmission Number"}></input>
      </div>
      <div class="address grid grid-rows-2 w-3/4">
        <lable>Address</lable>

        <input type={"text"} placeholder={"Address"}></input>
      </div>
      <div class="sp-intrest grid grid-rows-2 w-3/4">
        <label>Special Interests</label>
        <be />
        <div className="form-check dropdown-item ">
          <select>
            <option value={""}></option>
            <option value={""}></option>
            <option value={""}></option>
            <option value={""}></option>
            <option value={""}></option>
          </select>
        </div>
      </div>
      <button className="bg-blue-500 rounded">Submit</button>
    </div>
  );
};

export default Form;

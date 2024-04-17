import React from "react";
import FieldResident from "./FieldResident";
import ButtonComp2 from "./ButtonComp2";

function AddResident({ handleClick, cancel, setNewResident }) {
  return (
    <div className="bg-[var(--bg-color)] absolute w-[550px] rounded-[15px] right-[10px] top-[30px] px-[30px] py-[20px] ">
      <div className="text-white mb-[5px] flex flex-col gap-[3px]">
        <h1 className="font-bold border-b-2 border-solid border-white text-[16px]">
          Add New Resident
        </h1>
        <p className="text-[12px]">
          Fill out the following fields. Use “N/A” if not applicable.
        </p>
      </div>
      <div className="flex flex-col gap-[7px]">
        {/* first row */}
        <div className="w-full flex justify-between ">
          <FieldResident
            inputDisplay={"Surname"}
            type={"text"}
            width={"w-[130px]"}
            handleChange={(e) => {
              setNewResident((prev) => ({ ...prev, surname: e.target.value }));
            }}
          />
          <FieldResident
            inputDisplay={"First Name"}
            type={"text"}
            width={"w-[130px]"}
            handleChange={(e) => {
              setNewResident((prev) => ({ ...prev, first_name: e.target.value }));
            }}
          />
          <FieldResident
            inputDisplay={"Middle Name"}
            type={"text"}
            width={"w-[130px]"}
            handleChange={(e) => {
              setNewResident((prev) => ({ ...prev, middle_name: e.target.value }));
            }}
          />
          <FieldResident
            inputDisplay={"Suffix"}
            type={"text"}
            width={"w-[80px]"}
            handleChange={(e) => {
              setNewResident((prev) => ({ ...prev, suffix: e.target.value }));
            }}
          />
        </div>
        {/* second row */}
        <div className="w-full flex justify-between">
          <FieldResident
            inputDisplay={"Birthdate(mm/dd/yyyy)"}
            type={"date"}
            width={"w-[180px]"}
            handleChange={(e) => {
              setNewResident((prev) => ({ ...prev, birthday: e.target.value }));
            }}
          />
          <FieldResident
            inputDisplay={"Birthplace"}
            type={"text"}
            width={"w-[200px]"}
            handleChange={(e) => {
              setNewResident((prev) => ({ ...prev, birth_place: e.target.value }));
            }}
          />
          <FieldResident
            inputDisplay={"Sex (M/F)"}
            type={"text"}
            width={"w-[80px]"}
            handleChange={(e) => {
              setNewResident((prev) => ({ ...prev, sex: e.target.value }));
            }}
          />
        </div>
        {/* third row */}
        <div className="w-full flex justify-between">
          <FieldResident
            inputDisplay={"Civil Status"}
            type={"text"}
            width={"w-[235px]"}
            handleChange={(e) => {
              setNewResident((prev) => ({ ...prev, status: e.target.value }));
            }}
          />
          <FieldResident
            inputDisplay={"Religion"}
            type={"text"}
            width={"w-[235px]"}
            handleChange={(e) => {
              setNewResident((prev) => ({ ...prev, religion: e.target.value }));
            }}
          />
        </div>
        {/* fourth row */}
        <div className="w-full flex justify-between">
          <FieldResident
            inputDisplay={"Residence Address"}
            type={"text"}
            width={"w-[285px]"}
            handleChange={(e) => {
              setNewResident((prev) => ({ ...prev, address: e.target.value }));
            }}
          />
          <FieldResident
            inputDisplay={"Citizenship"}
            type={"text"}
            width={"w-[185px]"}
            handleChange={(e) => {
              setNewResident((prev) => ({ ...prev, citizenship: e.target.value }));
            }}
          />
        </div>
        {/* fifth row */}
        <div className="w-full flex justify-between">
          <FieldResident
            inputDisplay={"Profession/Occupation"}
            type={"text"}
            width={"w-[235px]"}
            handleChange={(e) => {
              setNewResident((prev) => ({ ...prev, work: e.target.value }));
            }}
          />
          <FieldResident
            inputDisplay={"Contact Number"}
            type={"tel"}
            width={"w-[235px]"}
            handleChange={(e) => {
              setNewResident((prev) => ({ ...prev, phone_number: e.target.value }));
            }}
          />
        </div>
        {/* sixth row */}
        <div className="w-full flex justify-between">
          <FieldResident
            inputDisplay={"Email Address"}
            type={"text"}
            width={"w-[285px]"}
            handleChange={(e) => {
              setNewResident((prev) => ({ ...prev, email: e.target.value }));
            }}
          />
          <FieldResident
            inputDisplay={"Household Number"}
            type={"text"}
            width={"w-[185px]"}
            handleChange={(e) => {
              setNewResident((prev) => ({ ...prev, household: e.target.value }));
            }}
          />
        </div>
        <div className="w-full flex gap-[20px] justify-end">
          <button className="p-[5px] bg-white rounded-[10px] text-black min-w-[70px] cursor-pointer" onClick={cancel}>
            Cancel
          </button>
          <ButtonComp2 text="Add" otherStyle={"p-[5px] rounded-[10px]"} handleClick={handleClick}/>
        </div>
      </div>
    </div>
  );
}

export default AddResident;

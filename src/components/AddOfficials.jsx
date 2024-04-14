import React from "react";
import FieldResident from "./FieldResident";
import ButtonComp2 from "./ButtonComp2";

function AddOfficials({setNewOfficial, handleClick, cancel}) {
  return (
    <div className="w-[550px] absolute bg-[var(--bg-color)] top-0 px-[30px] py-[30px] right-[20px] rounded-[15px] z-[99]">
      <div className="text-white mb-[10px] flex flex-col gap-[3px]">
        <h1 className="font-bold border-b-2 border-solid border-white text-[16px]">
          Add New Barangay Official
        </h1>
        <p className="text-[12px]">
          Fill out the following fields. Use “N/A” if not applicable.
        </p>
      </div>
      <div className="flex flex-col gap-[10px]">
        {/* first row */}
        <div className="w-full flex justify-between ">
          <FieldResident
            inputDisplay={"Surname"}
            type={"text"}
            width={"w-[150px]"}
          />
          <FieldResident
            inputDisplay={"First Name"}
            type={"text"}
            width={"w-[150px]"}
          />
          <FieldResident
            inputDisplay={"Middle Name"}
            type={"text"}
            width={"w-[150px]"}
          />
        </div>
        {/* second row */}
        <div className="w-full flex justify-between ">
          <FieldResident
            inputDisplay={"Address"}
            type={"text"}
            width={"w-[235px]"}
          />
          <FieldResident
            inputDisplay={"Birthplace"}
            type={"text"}
            width={"w-[235px]"}
          />
        </div>
        {/* third row */}
        <div className="w-full flex justify-between ">
          <FieldResident
            inputDisplay={"Birthdate(mm/dd/yyyy)"}
            type={"text"}
            width={"w-[150px]"}
          />
          <FieldResident
            inputDisplay={"Citizenship"}
            type={"text"}
            width={"w-[150px]"}
          />
          <FieldResident
            inputDisplay={"Age"}
            type={"text"}
            width={"w-[80px]"}
          />
          <FieldResident
            inputDisplay={"Sex (M/F)"}
            type={"text"}
            width={"w-[80px]"}
          />
        </div>
        {/* fourth row */}
        <div className="w-full flex justify-between ">
          <FieldResident
            inputDisplay={"Status"}
            type={"text"}
            width={"w-[200px]"}
          />
          <FieldResident
            inputDisplay={"Phone Number"}
            type={"text"}
            width={"w-[270px]"}
          />
        </div>
        {/* fifth row */}
        <div className="w-full flex justify-between ">
          <FieldResident
            inputDisplay={"Position in Barangay(Ex: Barangay Councilor)"}
            type={"text"}
            width={"w-[300px]"}
          />
        </div>
        <div className="w-full flex gap-[20px] justify-end">
          <button className="p-[5px] bg-white rounded-[10px] text-black min-w-[70px] cursor-pointer">
            Cancel
          </button>
          <ButtonComp2 text="Add" otherStyle={"p-[5px] rounded-[10px]"} />
        </div>
      </div>
    </div>
  );
}

export default AddOfficials;

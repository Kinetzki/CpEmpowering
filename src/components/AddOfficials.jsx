import React from "react";
import FieldResident from "./FieldResident";
import ButtonComp2 from "./ButtonComp2";

function AddOfficials({ setNewOfficial, handleClick, cancel }) {
  return (
    <div className="w-[550px] fixed bg-[var(--bg-color)] top-[100px] px-[30px] py-[30px] right-[50px] rounded-[15px] z-[99]">
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
            handleChange={(e) => {
              setNewOfficial((prev) => ({ ...prev, surname: e.target.value }));
            }}
          />
          <FieldResident
            inputDisplay={"First Name"}
            type={"text"}
            width={"w-[150px]"}
            handleChange={(e) => {
              setNewOfficial((prev) => ({
                ...prev,
                first_name: e.target.value,
              }));
            }}
          />
          <FieldResident
            inputDisplay={"Middle Name"}
            type={"text"}
            width={"w-[150px]"}
            handleChange={(e) => {
              setNewOfficial((prev) => ({
                ...prev,
                middle_name: e.target.value,
              }));
            }}
          />
        </div>
        {/* second row */}
        <div className="w-full flex justify-between ">
          <FieldResident
            inputDisplay={"Address"}
            type={"text"}
            width={"w-[235px]"}
            handleChange={(e) => {
              setNewOfficial((prev) => ({ ...prev, address: e.target.value }));
            }}
          />
          <FieldResident
            inputDisplay={"Birthplace"}
            type={"text"}
            width={"w-[235px]"}
            handleChange={(e) => {
              setNewOfficial((prev) => ({
                ...prev,
                birth_place: e.target.value,
              }));
            }}
          />
        </div>
        {/* third row */}
        <div className="w-full flex justify-between ">
          <FieldResident
            inputDisplay={"Birthdate(mm/dd/yyyy)"}
            type={"date"}
            width={"w-[150px]"}
            handleChange={(e) => {
              setNewOfficial((prev) => ({ ...prev, birthday: e.target.value }));
            }}
          />
          <FieldResident
            inputDisplay={"Citizenship"}
            type={"text"}
            width={"w-[150px]"}
            handleChange={(e) => {
              setNewOfficial((prev) => ({
                ...prev,
                citizenship: e.target.value,
              }));
            }}
          />
          <FieldResident
            inputDisplay={"Sex (M/F)"}
            type={"text"}
            width={"w-[80px]"}
            handleChange={(e) => {
              setNewOfficial((prev) => ({ ...prev, sex: e.target.value }));
            }}
          />
        </div>
        {/* fourth row */}
        <div className="w-full flex justify-between ">
          <FieldResident
            inputDisplay={"Status"}
            type={"text"}
            width={"w-[100px]"}
            handleChange={(e) => {
              setNewOfficial((prev) => ({ ...prev, status: e.target.value }));
            }}
          />
          <FieldResident
            inputDisplay={"Phone Number"}
            type={"text"}
            width={"w-[180px]"}
            handleChange={(e) => {
              setNewOfficial((prev) => ({
                ...prev,
                phone_number: e.target.value,
              }));
            }}
          />
          <FieldResident
            inputDisplay={"Term End"}
            type={"date"}
            width={"w-[150px]"}
            handleChange={(e) => {
              setNewOfficial((prev) => ({
                ...prev,
                term_end: e.target.value,
              }));
            }}
          />
        </div>
        {/* fifth row */}
        <div className="w-full flex justify-between ">
          <FieldResident
            inputDisplay={"E-mail Address"}
            type={"text"}
            width={"w-[200px]"}
            handleChange={(e) => {
              setNewOfficial((prev) => ({ ...prev, email: e.target.value }));
            }}
          />
          <FieldResident
            inputDisplay={"Position in Barangay(Ex: Barangay Councilor)"}
            type={"text"}
            width={"w-[200px]"}
            handleChange={(e) => {
              setNewOfficial((prev) => ({ ...prev, position: e.target.value }));
            }}
          />
        </div>
        <div className="w-full flex gap-[20px] justify-end">
          <button
            className="p-[5px] bg-white rounded-[10px] text-black min-w-[70px] cursor-pointer"
            onClick={cancel}
          >
            Cancel
          </button>
          <ButtonComp2
            text="Add"
            otherStyle={"p-[5px] rounded-[10px]"}
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}

export default AddOfficials;

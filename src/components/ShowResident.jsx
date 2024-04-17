import React, { useEffect, useState } from "react";
import FieldResident from "./FieldResident";
import ButtonComp2 from "./ButtonComp2";

function ShowResident({ entry, handleClick }) {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(entry);
  }, [entry]);
  return (
    <div className="bg-[var(--bg-color)] absolute w-[550px] rounded-[15px] right-[10px] top-[30px] px-[30px] py-[20px] ">
      <div className="text-white mb-[5px] flex flex-col gap-[3px]">
        <h1 className="font-bold border-b-2 border-solid border-white text-[16px]">
          {`${data.first_name} ${data.middle_name} ${data.surname}`}
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
            value={data.surname || ""}
            handleChange={(e) => {
              setData((prev) => ({ ...prev, surname: e.target.value }));
            }}
          />
          <FieldResident
            inputDisplay={"First Name"}
            type={"text"}
            width={"w-[130px]"}
            value={data.first_name || ""}
            handleChange={(e) => {
              setData((prev) => ({ ...prev, first_name: e.target.value }));
            }}
          />
          <FieldResident
            inputDisplay={"Middle Name"}
            type={"text"}
            width={"w-[130px]"}
            value={data.middle_name || ""}
            handleChange={(e) => {
              setData((prev) => ({ ...prev, middle_name: e.target.value }));
            }}
          />
          <FieldResident
            inputDisplay={"Suffix"}
            type={"text"}
            width={"w-[80px]"}
            value={data.suffix || ""}
            handleChange={(e) => {
              setData((prev) => ({ ...prev, suffix: e.target.value }));
            }}
          />
        </div>
        {/* second row */}
        <div className="w-full flex justify-between">
          <FieldResident
            inputDisplay={"Birthdate(mm/dd/yyyy)"}
            type={"date"}
            width={"w-[180px]"}
            value={data.birthday || ""}
            handleChange={(e) => {
              setData((prev) => ({ ...prev, birthday: e.target.value }));
            }}
          />
          <FieldResident
            inputDisplay={"Birthplace"}
            type={"text"}
            width={"w-[200px]"}
            value={data.birth_place || ""}
            handleChange={(e) => {
              setData((prev) => ({ ...prev, birth_place: e.target.value }));
            }}
          />
          <FieldResident
            inputDisplay={"Sex (M/F)"}
            type={"text"}
            width={"w-[80px]"}
            value={data.sex || ""}
            handleChange={(e) => {
              setData((prev) => ({ ...prev, sex: e.target.value }));
            }}
          />
        </div>
        {/* third row */}
        <div className="w-full flex justify-between">
          <FieldResident
            inputDisplay={"Civil Status"}
            type={"text"}
            width={"w-[235px]"}
            value={data.status || ""}
            handleChange={(e) => {
              setData((prev) => ({ ...prev, status: e.target.value }));
            }}
          />
          <FieldResident
            inputDisplay={"Religion"}
            type={"text"}
            width={"w-[235px]"}
            value={data.religion || ""}
            handleChange={(e) => {
              setData((prev) => ({ ...prev, religion: e.target.value }));
            }}
          />
        </div>
        {/* fourth row */}
        <div className="w-full flex justify-between">
          <FieldResident
            inputDisplay={"Residence Address"}
            type={"text"}
            width={"w-[285px]"}
            value={data.address || ""}
            handleChange={(e) => {
              setData((prev) => ({ ...prev, address: e.target.value }));
            }}
          />
          <FieldResident
            inputDisplay={"Citizenship"}
            type={"text"}
            width={"w-[185px]"}
            value={data.citizenship || ""}
            handleChange={(e) => {
              setData((prev) => ({ ...prev, citizenship: e.target.value }));
            }}
          />
        </div>
        {/* fifth row */}
        <div className="w-full flex justify-between">
          <FieldResident
            inputDisplay={"Profession/Occupation"}
            type={"text"}
            width={"w-[235px]"}
            value={data.work || ""}
            handleChange={(e) => {
              setData((prev) => ({ ...prev, work: e.target.value }));
            }}
          />
          <FieldResident
            inputDisplay={"Contact Number"}
            type={"tel"}
            width={"w-[235px]"}
            value={data.phone_number || ""}
            handleChange={(e) => {
              setData((prev) => ({ ...prev, phone_number: e.target.value }));
            }}
          />
        </div>
        {/* sixth row */}
        <div className="w-full flex justify-between">
          <FieldResident
            inputDisplay={"Email Address"}
            type={"text"}
            width={"w-[285px]"}
            value={data.email || ""}
            handleChange={(e) => {
              setData((prev) => ({ ...prev, email: e.target.value }));
            }}
          />
          <FieldResident
            inputDisplay={"Household Number"}
            type={"text"}
            width={"w-[185px]"}
            value={data.household || ""}
            handleChange={(e) => {
              setData((prev) => ({ ...prev, household: e.target.value }));
            }}
          />
        </div>
        <div className="w-full flex gap-[20px] justify-end">
          <ButtonComp2
            text="Ok"
            otherStyle={"p-[5px] rounded-[10px]"}
            handleClick={async ()=>{
              await handleClick(data.id, data);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ShowResident;

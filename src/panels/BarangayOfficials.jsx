import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";
import ButtonComp2 from "../components/ButtonComp2";
import OfficialCard from "../components/OfficialCard";
import { useParams } from "react-router-dom";
import AddOfficials from "../components/AddOfficials";
import axios from "axios";
import Loader from "../components/Loader";
import ShowOfficial from "../components/ShowOfficial";
import ErrorComp from "../components/ErrorComp";

function BarangayOfficials() {
  const [showAdd, setShowAdd] = useState(false);
  const [officials, setOfficials] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newOfficial, setNewOfficial] = useState({});
  const [showEdit, setShowEdit] = useState(false);
  const [clickedOfficial, setClickedOfficial] = useState(null);
  const [errMsg, setErrMsg] = useState("");
  const fetchOfficials = async () => {
    setIsLoading(true);
    const response = await axios.get(
      "http://127.0.0.1:8000/api/officials/list",
      {
        headers: {
          Authorization: `Token ${sessionStorage.getItem("token")}`,
        },
      }
    );
    if (response.status === 200) {
      console.log(response.data);
      setOfficials(response.data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchOfficials();
  }, []);

  const handleDelete = async (id) => {
    const response = await axios.delete(
      `http://127.0.0.1:8000/api/officials/delete/${id}`,
      {
        headers: {
          Authorization: `Token ${sessionStorage.getItem("token")}`,
        },
      }
    );
  };

  const handleAdd = async () => {
    setShowAdd(false);
    setIsLoading(true);
    console.log(newOfficial);
    try {
      if (newOfficial) {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/officials/add",
          newOfficial,
          {
            headers: {
              Authorization: `Token ${sessionStorage.getItem("token")}`,
            },
          }
        );
        if (response.status === 200) {
          await fetchOfficials();
        }
      }
    } catch (err) {
      setIsLoading(false);
      setErrMsg("Error please check all fields");
    }
  };

  const handleEditOfficial = async (id, data) => {
    setIsLoading(true);
    console.log(id, data);
    const response = await axios.put(
      `http://127.0.0.1:8000/api/officials/update/${id}`,
      data,
      {
        headers: {
          Authorization: `Token ${sessionStorage.getItem("token")}`,
        },
      }
    );
    if (response.status === 200) {
      await fetchOfficials();
    }
  };

  return (
    <div className="w-full bg-white min-h-screen p-2 flex flex-col gap-2">
      <Banner />
      <div className="px-[20px] flex items-center mt-[2px] gap-5 w-full box-border justify-around">
        <h1 className="text-[var(--bg-color)] font-bold min-w-[140px]">
          Barangay Officials
        </h1>
        <hr className="w-full border-[var(--bg-color)]" />
        <div className="flex gap-5">
          {/* <Dropdown text={"Sort"} items={["Name", "Age"]} /> */}
          <ButtonComp2
            text={"Add"}
            otherStyle={"px-[30px] py-[6px] rounded-lg"}
            handleClick={() => {
              setShowEdit(false);
              setShowAdd(!showAdd);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-5 relative overflow-y-auto h-[80vh] p-5">
        {showEdit && (
          <ShowOfficial
            cancel={() => {
              setShowEdit(false);
            }}
            entry={clickedOfficial}
            handleClick={async (id, data) => {
              setShowEdit(false);
              await handleEditOfficial(id, data);
            }}
          />
        )}
        {showAdd && (
          <AddOfficials
            setNewOfficial={setNewOfficial}
            handleClick={handleAdd}
            cancel={async () => {
              setShowAdd(false);
              await handleAdd();
            }}
          />
        )}
        {isLoading && <Loader />}
        {/* Render Officials Cards */}
        {errMsg && (
          <ErrorComp
            err={errMsg}
            handleClick={async () => {
              setErrMsg("");
              await fetchOfficials();
            }}
          />
        )}
        {officials?.map((official, i) => {
          return (
            <OfficialCard
              key={i}
              entry={official}
              handleEdit={() => {
                if (clickedOfficial === official) {
                  setShowEdit(false);
                  setClickedOfficial(null);
                } else {
                  setShowEdit(true);
                  setClickedOfficial(official);
                }
              }}
              handleDelete={async (id) => {
                setIsLoading(true);
                await handleDelete(id);
                fetchOfficials();
              }}
            />
          );
        })}
      </div>
      {/* <div className="w-full bg-black h-full"></div> */}
    </div>
  );
}

export default BarangayOfficials;

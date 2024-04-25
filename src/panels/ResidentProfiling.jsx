import React, { useEffect, useRef, useState } from "react";
import Banner from "../components/Banner";
import ButtonComp2 from "../components/ButtonComp2";
import ResidentItem from "../components/ResidentItem";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import ConfirmDel from "../components/ConfirmDel";
import AddResident from "../components/AddResident";
import ShowResident from "../components/ShowResident";
import sort from "../assets/icons/sort.svg";
import getdata from "../utils/readCsv";
import CsvLoader from "../components/CsvLoader";
import ErrorComp from "../components/ErrorComp";

function ResidentProfiling() {
  const [residents, setResidents] = useState([]);
  const [backUpRes, setBackUpRes] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();
  const { page } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showResident, setShowResident] = useState(false);
  const [type, setType] = useState("");
  const [clickedResident, setClickedResident] = useState(null);
  const [newResident, setNewResident] = useState({});
  const [importData, setImportData] = useState([]);
  const [showCSV, setShowCSV] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    console.log(newResident);
  }, [newResident]);

  const fetchData = async () => {
    setIsLoading(true);
    setResidents([]);
    const response = await axios.get(
      "https://jacobdfru.pythonanywhere.com/api/residents/list",
      {
        headers: {
          Authorization: `Token ${sessionStorage.getItem("token")}`,
        },
      }
    );
    if (response.status === 200) {
      console.log(response);
      setResidents(response.data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  useEffect(() => {
    console.log((parseInt(page) - 1) * 6);
    setCurrentPage(parseInt(page));
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
    fetchData();
  }, []);

  // Delete items
  const removeResident = async () => {
    const data = { id: selected };
    console.log(data);
    const response = await axios.post(
      "https://jacobdfru.pythonanywhere.com/api/residents/bulk-delete",
      data,
      {
        headers: {
          Authorization: `Token ${sessionStorage.getItem("token")}`,
        },
      }
    );
    console.log(response);
    if (response.statusText === "No Content") {
      setResidents(residents.filter((el) => !selected.includes(el.id)));
      setSelected([]);
      setResidents(null);
      fetchData();
    }
  };

  const handleSearch = (e) => {
    if (backUpRes.length === 0) {
      setBackUpRes(residents);
    }

    console.log(e.target.value);
    if (!e.target.value) {
      fetchData();
    }
    const nameArr = e.target.value.toLowerCase();

    const matches = backUpRes.filter((element) => {
      const name = `${element.first_name} ${element.middle_name} ${element.surname}`;
      return name.toLowerCase().includes(nameArr);
    });

    if (matches.length < 1) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }

    setResidents(matches);
  };
  const fileInputRef = useRef(null);
  const handleImportData = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const csvFile = e.target.files[0];
    getdata(csvFile, (data) => {
      setShowCSV(true);
      setImportData(data);
    });
  };

  const handleAddResident = async () => {
    setIsLoading(true);
    setResidents([]);
    setShowAdd(false);
    console.log(newResident);
    //match ng sa keys
    var response = null;
    try {
      response = await axios.post(
        "https://jacobdfru.pythonanywhere.com/api/residents/add",
        newResident,
        {
          headers: {
            Authorization: `Token ${sessionStorage.getItem("token")}`,
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        await fetchData();
      }
      // else if (response.status === 400) {
      //   setIsLoading(false);
      //   const e = response.error;
      //   console.log(e);
      //   setErrMsg(e);
      // }
    } catch (err) {
      console.log(err);
      // setIsLoading(false);
      const e = err.response.data.error;
      console.log(e);
      setErrMsg(e);
    }
  };

  const handleEditResident = async (id, data) => {
    setIsLoading(true);
    setResidents([]);
    console.log(id, data);
    const response = await axios.put(
      `https://jacobdfru.pythonanywhere.com/api/residents/update/${id}`,
      data,
      {
        headers: {
          Authorization: `Token ${sessionStorage.getItem("token")}`,
        },
      }
    );
    if (response.status === 200) {
      await fetchData();
    }
  };

  const handleAddCSV = async () => {
    console.log(importData);
    if (importData.length > 0) {
      const response = await axios.post(
        "https://jacobdfru.pythonanywhere.com/api/residents/upload",
        { residents: importData },
        {
          headers: {
            Authorization: `Token ${sessionStorage.getItem("token")}`,
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        await fetchData();
      } else {
        console.error(response.error);
      }
    }
  };

  const handleDownload = () => {
    window.open("https://jacobdfru.pythonanywhere.com/api/residents/download");
  };

  return (
    <div className="w-[100%] bg-white min-h-screen p-2 flex flex-col">
      <Banner />
      <div className="w-full rounded-xl bg-[var(--bg-color)] h-[55px] justify-between items-center flex px-5 py-2 translate-y-[25px] z-[100]">
        <h1>Manage Residents</h1>
        <div className="flex gap-2 items-center">
          <ButtonComp2
            text={"Import Data"}
            otherStyle={"py-2 px-4 rounded-full"}
            handleClick={handleImportData}
          />
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          <ButtonComp2
            text={"Export Data"}
            otherStyle={"py-2 px-4 rounded-full"}
            handleClick={handleDownload}
          />
          <ButtonComp2
            text={"Delete"}
            otherStyle={"py-2 px-4 rounded-full"}
            handleClick={() => {
              if (selected.length > 0) {
                setConfirm(!confirm);
              } else {
                setErrMsg("No Residents Selected")
              }
            }}
          />
          <ButtonComp2
            text={"Add"}
            otherStyle={"py-2 px-4 rounded-full"}
            handleClick={() => {
              setType("Add");
              setShowAdd(!showAdd);
              setShowResident(false);
            }}
          />
          {/* Searching */}
          <input
            type="text"
            className="text-[var(--bg-color)] bg-white px-[10px] rounded-full py-[3px]"
            placeholder="Search"
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="h-[80vh] w-full rounded-xl border-[#0000008a] border-[1px] px-[20px] flex flex-col relative overflow-y-auto">
        {showAdd && (
          <AddResident
            setNewResident={setNewResident}
            cancel={() => {
              setShowAdd(false);
            }}
            handleClick={handleAddResident}
          />
        )}
        {showCSV && (
          <CsvLoader
            entries={importData}
            handleClick={async () => {
              setShowCSV(false);
              await handleAddCSV();
            }}
            cancel={() => {
              setShowCSV(false);
            }}
          />
        )}

        {errMsg && (
          <ErrorComp
            err={errMsg}
            handleClick={async () => {
              setErrMsg("");
              await fetchData();
            }}
          />
        )}

        {showResident && (
          <ShowResident
            entry={{ ...clickedResident }}
            handleClick={async (id, data) => {
              setShowResident(false);
              await handleEditResident(id, data);
            }}
            cancel={()=>{
              setShowResident(false);
            }}
          />
        )}
        {isLoading && <Loader />}
        {confirm && (
          <ConfirmDel
            text="Delete resident/s?"
            handleClick={async () => {
              setConfirm(false);
              setIsLoading(true);
              await removeResident();
            }}
            cancel={() => {
              setConfirm(false);
            }}
            confirmText="Delete"
          />
        )}
        {!isLoading && (
          <div className="font-semibold flex text-black mt-[30px] w-full gap-3 bg-white h-[55px] items-end py-2 border-b-[1px] border-[#000000]">
            <div className="w-[10px]"></div>
            <h1
              className="w-[200px] flex items-center gap-2 cursor-pointer"
              onClick={() => {
                setResidents((prev) => {
                  var sortedResidents = [...prev];
                  sortedResidents = sortedResidents.sort((a, b) =>
                    a.first_name.localeCompare(b.first_name)
                  );
                  if (prev[0].surname === sortedResidents[0].surname) {
                    return sortedResidents.sort((a, b) =>
                      b.first_name.localeCompare(a.first_name)
                    );
                  }
                  return sortedResidents;
                });
              }}
            >
              Name
              <span>
                <img src={sort} alt="" className="w-[10px]" />
              </span>
            </h1>
            <h1
              className="w-[50px] flex items-start gap-2 cursor-pointer"
              onClick={() => {
                setResidents((prev) => {
                  var sortedResidents = [...prev];
                  sortedResidents = sortedResidents.sort(
                    (a, b) => b.age - a.age
                  );
                  if (prev[0].surname === sortedResidents[0].surname) {
                    return sortedResidents.sort((a, b) => a.age - b.age);
                  }
                  return sortedResidents;
                });
              }}
            >
              Age{" "}
              <span>
                <img src={sort} alt="" className="w-[10px]" />
              </span>
            </h1>
            <h1 className="w-[220px]">Email</h1>
            <h1 className="w-[240px]">Address</h1>
            <h1 className="w-[120px]">Phone</h1>
            <h1 className="w-[90px]">Sex</h1>
          </div>
        )}

        {/* Map here */}
        {residents &&
          residents
            .slice(
              (currentPage - 1) * 50,
              // currentPage + 5
              (currentPage - 1) * 50 + 49 > residents.length
                ? residents.length
                : (currentPage - 1) * 50 + 50
            )
            .map((resident, i) => {
              return (
                <ResidentItem
                  key={i}
                  entry={resident}
                  setSelected={setSelected}
                  selectedArr={selected}
                  setClicked={setClickedResident}
                  handleClick={() => {
                    if (clickedResident && resident === clickedResident) {
                      setShowResident((prev) => !prev);
                    } else {
                      setShowResident(true);
                    }
                  }}
                />
              );
            })}
        {/* Bottom */}
        {!isLoading && (
          <div className="flex w-full min-h-[60px] items-center justify-between px-4 text-black select-none">
            <h1 className="text-[14px]">{`Showing ${
              currentPage * 50 > residents.length - 1
                ? residents.length
                : currentPage * 50
            } out of ${residents ? residents.length : ""}`}</h1>
            <div className="flex gap-4">
              <h1
                className="underline cursor-pointer"
                onClick={() => {
                  console.log(currentPage);
                  if (currentPage - 1 >= 1) {
                    setCurrentPage(currentPage - 1);
                    navigate(`/resident-profiling/${currentPage - 1}`, {
                      replace: true,
                    });
                  }
                }}
              >
                Previous
              </h1>
              <h1 className="border-[1px] px-[4px] border-[#0000006a]">
                {currentPage}
              </h1>
              <h1
                className="underline cursor-pointer"
                onClick={() => {
                  console.log(currentPage);
                  if (currentPage + 1 <= Math.ceil(residents.length / 50)) {
                    setCurrentPage(currentPage + 1);
                    navigate(`/resident-profiling/${currentPage + 1}`, {
                      replace: true,
                    });
                  }
                }}
              >
                Next
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResidentProfiling;

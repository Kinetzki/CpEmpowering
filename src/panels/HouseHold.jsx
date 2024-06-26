import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import ButtonComp2 from "../components/ButtonComp2";
import axios from "axios";
import Loader from "../components/Loader";
import ConfirmDel from "../components/ConfirmDel";
import sort from "../assets/icons/sort.svg";
import ResidentItem from "../components/ResidentItem";
import { useNavigate, useParams } from "react-router-dom";
import ShowResident from "../components/ShowResident";

function HouseHold() {
  const [households, setHouseholds] = useState([]);
  const [residents, setResidents] = useState([]);
  const [selected, setSelected] = useState([]);
  const [backUpRes, setBackUpRes] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [householdNumber, setHouseholdNumber] = useState(null);
  const [houseIsSet, setHouseIsSet] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [showResident, setShowResident] = useState(false);
  const [clickedResident, setClickedResident] = useState(null);
  const { page } = useParams();
  const navigate = useNavigate();
  const [newResident, setNewResident] = useState({});
  const [noMatch, setNoMatch] = useState(false);

  useEffect(() => {
    console.log(newResident);
  }, [newResident]);

  const handleSearch = async (e) => {
    if (backUpRes.length === 0) {
      setBackUpRes(residents);
    }

    console.log(e.target.value);
    if (!e.target.value) {
      setNoMatch(false);
      fetchData();
    } else {
      const nameArr = e.target.value;

      const matches = backUpRes.filter((element) => {
        return element.household === nameArr;
      });

      if (matches.length < 1) {
        // setIsLoading(true);
        setNoMatch(true);
      } else {
        setNoMatch(false);
        setIsLoading(false);
      }
      setResidents(matches);
    }
  };

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
    if (response.status === 204) {
      setSelected([]);
      setResidents(null);
      location.reload();
      // await fetchData();
      // setResidents(
      //   residents.filter((item) => item.household === householdNumber)
      // );
    }
  };

  useEffect(() => {
    console.log((parseInt(page) - 1) * 6);
    setCurrentPage(parseInt(page));
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
    fetchData();
  }, []);

  const fetchHouseholds = async () => {
    const response = await axios.get(
      "https://jacobdfru.pythonanywhere.com/api/household/list",
      {
        headers: {
          Authorization: `Token ${sessionStorage.getItem("token")}`,
        },
      }
    );
    if (response.status === 200) {
      console.log(response.data);
      setHouseholds(response.data);
    }
  };

  const fetchData = async () => {
    setNoMatch(false);
    setIsLoading(true);
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

  return (
    <div className="w-full bg-white min-h-screen p-2 flex flex-col">
      <Banner />
      {/* {!houseIsSet && (
        <div className="w-full rounded-xl bg-[var(--bg-color)] h-[55px] justify-start items-center flex px-5 py-2 translate-y-[25px] z-[100] gap-2">
          <h1>Enter Household number: </h1>
          <div className="flex gap-2 items-center">
            <input
              type="text"
              className="text-[var(--bg-color)] bg-white px-[10px] rounded-full py-[3px]"
              placeholder="Search Household No."
              onChange={(e) => {
                setHouseholdNumber(e.target.value);
              }}
            />
            <ButtonComp2
              text={"Enter"}
              otherStyle={"py-2 px-4 rounded-full"}
              handleClick={() => {
                if (householdNumber) {
                  setHouseIsSet(true);
                  console.log(householdNumber);
                  setResidents(
                    residents.filter(
                      (item) => item.household === householdNumber
                    )
                  );
                }
              }}
            />
          </div>
        </div>
      )} */}
      <>
        <div className="w-full rounded-xl bg-[var(--bg-color)] h-[55px] justify-between items-center flex px-5 py-2 translate-y-[25px] z-[100]">
          {/* <h1>{`Household No. ${householdNumber}`}</h1> */}
          <h1>{"Search index for Purok No."}</h1>
          <div className="flex gap-2 items-center">
            {/* <ButtonComp2
              text={"Back"}
              otherStyle={"py-2 px-4 rounded-full"}
              handleClick={async () => {
                setHouseIsSet(false);
                await fetchData();
              }}
            /> */}
            <ButtonComp2
              text={"Delete"}
              otherStyle={"py-2 px-4 rounded-full"}
              handleClick={() => {
                if (selected.length > 0) {
                  setConfirm(!confirm);
                }
              }}
            />
            {/* Searching */}
            <input
              type="text"
              className="text-[var(--bg-color)] bg-white px-[10px] rounded-full py-[3px]"
              placeholder="Search Purok No."
              onChange={handleSearch}
            />
          </div>
        </div>
        {/* List */}
        <div className="h-[80vh] w-full rounded-xl border-[#0000008a] border-[1px] px-[20px] flex flex-col overflow-y-auto relative">
          {showResident && (
            <ShowResident
              entry={{ ...clickedResident }}
              setNewResident={setNewResident}
              handleClick={() => {
                setShowResident(false);
              }}
              cancel={() => {
                setShowResident(false);
              }}
            />
          )}
          {isLoading && <Loader />}
          {confirm && (
            <ConfirmDel
              confirmText={"Delete"}
              text="Delete resident/s?"
              handleClick={async () => {
                setConfirm(false);
                await removeResident();
              }}
              cancel={() => {
                setConfirm(false);
              }}
            />
          )}
          {!isLoading && (
            <div className="font-semibold flex text-black mt-[30px] w-full gap-3 bg-white h-[55px] items-end py-2 border-b-[1px] border-[#000000]">
              <div className="w-[20px]"></div>
              <h1
                className="w-[30%] flex items-center gap-2 cursor-pointer"
                onClick={() => {
                  setResidents((prev) => {
                    const sortedResidents = [...prev];
                    return sortedResidents.sort((a, b) =>
                      a.first_name.localeCompare(b.first_name)
                    );
                  });
                }}
              >
                Name
                <span>
                  <img src={sort} alt="" className="w-[10px]" />
                </span>
              </h1>
              <h1
                className="w-[15%] flex items-center gap-2 cursor-pointer"
                onClick={() => {
                  setResidents((prev) => {
                    const sortedResidents = [...prev];
                    return sortedResidents.sort((a, b) => b.age - a.age);
                  });
                }}
              >
                Age{" "}
                <span>
                  <img src={sort} alt="" className="w-[10px]" />
                </span>
              </h1>
              {/* <h1 className="w-[30%]">Email</h1> */}
              <h1 className="w-[40%]">Address</h1>
              {/* <h1 className="w-[20%]">Phone</h1> */}
              <h1 className="w-[20%]">Actions</h1>
            </div>
          )}
          {noMatch && (
            <h1 className="text-black w-full text-center font-semibold py-[30px] text-[25px]">
              No Match Found
            </h1>
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
                    setClicked={setClickedResident}
                    selectedArr={selected}
                    // handleClick={() => {
                    //   if (clickedResident && resident === clickedResident) {
                    //     setShowResident((prev) => !prev);
                    //   } else {
                    //     setShowResident(true);
                    //   }
                    // }}
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
                      navigate(`/households/${currentPage - 1}`, {
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
                      navigate(`/households/${currentPage + 1}`, {
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
      </>
    </div>
  );
}

export default HouseHold;

import Papa from "papaparse";

const getdata = async (file, func) => {
  Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
    complete: (result) => {
      func(result.data);
    },
  });
};

export default getdata;
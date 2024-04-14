import Papa from "papaparse";

const getdata = async (file) => {
  await Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
    complete: (result) => {
      console.log(result);
      return result;
    },
  });
};

export default getdata;
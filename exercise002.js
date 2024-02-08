import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

const fetchData = async (apiEndPoint) => {
  try {
    const data = await fetch(apiEndPoint);
    const dataAsJSON = await data.json();
    console.log(dataAsJSON);
  } catch (error) {
    console.log(error);
  }
};

fetchData(jsonTypicode);

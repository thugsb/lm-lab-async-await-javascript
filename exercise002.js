import fetch from "node-fetch";

const jsonTypicode =
  "https://cat-fact.herokuapp.com/facts/58e00b5f0aac31001185ed24";

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

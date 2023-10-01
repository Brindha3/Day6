// Get all the countries from Asia continent /region using Filter function

const getCountries =() => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://restcountries.com/v3.1/all");
    //  xhr.responseType = "json";

    xhr.onload = () => {
        const data = xhr.response;
        console.log(data);
      console.log(JSON.parse(data));

        const result = JSON.parse(data)
        .filter((country)=>country.region==="Asia")
        .map((country)=>({
            name:country.name,
            //population:country.population,
            // region:country.region,
            // subregion:country.subregion
        }));
        console.log(result)
    };
  xhr.send();
};
getCountries();

// Get all the countries with a population of less than 2 lakhs using Filter function

const getCountriesPop =() => {
    const xhr =new XMLHttpRequest();
    xhr.open("GET","https://restcountries.com/v3.1/all");
    //  xhr.responseType = "json";

    xhr.onload = () => {
        const data = xhr.response;
        console.log(data);
      console.log(JSON.parse(data));

        const result = JSON.parse(data)
        .filter((country)=>country.population<2_00_000)
        //.filter((country)=>country.currencies==="USD")
        .map((country)=>({
            // name:country.name,
            population:country.population,
            currencies:country.currencies
            // region:country.region,
            // subregion:country.subregion
        }));
        console.log(result)
    };
  xhr.send();
};
getCountriesPop ();


//Print the fallowing details name, capital, flag using forEach function

const getName =() => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET","https://restcountries.com/v3.1/all");
  //  xhr.responseType = "json";

  xhr.send();
  //page loaded

  xhr.onload = () => {
      const data = xhr.response;
      console.log(data);
    console.log(JSON.parse(data));

      const result = JSON.parse(data)

      console.log(result)

     result.forEach((e) =>  console.log(e.capital))
     result.forEach((e) =>  console.log(e.flag))
     result.forEach((e) =>  console.log(e.name['common']))
     };
  };
getName();

//print the total population of countries using reduce function

const getPopulationCount =() => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET","https://restcountries.com/v3.1/all");
   // xhr.responseType = "json";

  xhr.send();
  //page loaded

  xhr.onload = () => {
      const data = xhr.response;
      console.log(data);
    console.log(JSON.parse(data));

      const result = JSON.parse(data)

      .filter((country)=>country.population)
      //.filter((country)=>country.population)
      .map((country)=>({
          
          population:country.population,
         
      }));
      console.log(result);

      var res = result.reduce((accumulator,index)=>accumulator + index.population,0)
       console.log(res);
          
}
  }
  getPopulationCount();
  

// print the country which uses US Dollars as currency
async function getcountriesUsingUSD(){
  const response = await 
  fetch("https://restcountries.com/v3.1/all?currencies=USD");

  const data = await response.json();
  for(const country of data){
    console.log(country.name.common);
  }
 }
 getcountriesUsingUSD()
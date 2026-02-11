// Find the longest country name
function longestCountryName(countries) {
  return countries.reduce(
    (longest, country) => (country.length > longest.length ? country : longest),
    ""
  );
}

let countries = ["Australia", "Germany", "United States of America"];
console.log(longestCountryName(countries));

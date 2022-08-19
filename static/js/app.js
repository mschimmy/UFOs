//11.2.4 import the data from data.js
const tableData = data;

//11.2.4 reference the HTML table using D3
var tbody = d3.select("tbody");

//11.5.1 create a function to iterate through the array of objects in the data file and append them to a table row
function buildTable(data) {
    //11.5.1 clear any existing data
    tbody.html("");

    //11.5.2 loop through each object in the data and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        
        //11.5.2 append a row to the table body
        let row = tbody.append("tr");

        //11.5.2 loop through each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

//11.5.3 create a function to add a button that will filter the data by date
function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    //11.5.4 check to see if a date was entered and filter the data using that date
    if (date) {

        // apply "filter" to the table data to only keep the rows where the "datetime" value matches the filter value
        filtredData = filteredData.filter(row => row.datetime === date);
    }

    //11.5.4 rebuild the table using the filtered data
    // NOTE: if no date was entered, then filteredData will just be the original tableData
    buildTable(filteredData);
}

//11.5.4 attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

//11.5.4 build the table when the page loads
buildTable(tableData);
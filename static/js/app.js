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

 
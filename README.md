# UFOs Analysis

## Overview of Project
The client, a data journalist, has a JavaScript file with UFO sighting information. The JS file includes information for each sighting such as its date, city, state, country, shape, duration, and any comments.

### Purpose
The client requested that a dynamic table be made to neatly display the UFO data and that the table utilizes filters to refine a user's search. The filters will refine the table data by the date, city, state, country, or shape input by the user. The table will then be inserted into and visually displayed on an HTML page.

## Results
![Filtered Data](https://github.com/mschimmy/UFOs/blob/main/static/images/webpage.png)

When the HTML page first loads, the user will see the screen above. The webpage includes a navigation bar with the text "UFO Sightings" at the top of the page, and when clicked this bar will reload the page and clear any active filters. Below the navigation bar is the page header displayed on top of an image provided by the client and located in the [static/css/images subfolder](https://github.com/mschimmy/UFOs/blob/main/static/images/nasa.jpg). Below the page header is the article title and paragraph, which provides context for the table data.

The table data is located at the bottom of the webpage, with the table filters to the of the table. Users can input their desired filter conditions in the designated forms and press the Enter key, and the table will update according to their input. To clear the filtered table and show the full table data, the user can click the "UFO Sightings" text in the navigation bar and the table will reset.

Note: the filters are case-sensitive and must match the punctuation, casing, and style of the table data. The data values for "State" and "Country" are given as abbreviations, and any filtering input must match this form (e.g. the user input "Texas", "texas", and "TX" will not return UFO sightings in the state of Texas, only the input "tx" will return results). This condition is illustrated in the search results below.

![Search TX Upper Case](https://github.com/mschimmy/UFOs/blob/main/static/images/search_TX_upper.png)
![Search TX Lower Case](https://github.com/mschimmy/UFOs/blob/main/static/images/search_tx_lower.png)

## Summary
One drawback of this design, as mentioned above, is that the filters are case-sensitive and will not return results that do not match the specific punctuation, casing, and style of the data values. One recommendation for further development would be to update the JavaScript app.js file to make the filter case insensitive.

A second drawback is that the table data itself is messy and in need of cleaning. For example, in the "duration" column there are values that do not indicate a time period ("downtown" for a sighting in Cleveland, Ohio) or are inconsistent in their formatting ("5 min." versus "5 minutes"). A few recommendations for refining the data include spell checking, removing duplicate rows, changing the case and format of text values, removing spaces and nonprinting characters, and removing/replacing missing data values.

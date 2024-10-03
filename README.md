# CSV to HTML and PDF Converter
This application, developed in Node.js, converts CSV file data into HTML and PDF formats. It’s a simple and effective solution for transforming structured CSV data into readable and shareable formats such as HTML tables and PDF documents.

## Project Overview
The project reads a CSV (Comma Separated Values) file and transforms the data into an HTML table. After generating the HTML file, the application converts it into a PDF, making it easier to visualize or print the data.

This application is particularly useful for automating reports where data in CSV format needs to be converted into a more polished, visual presentation, such as a PDF report. It leverages third-party libraries to perform these conversions efficiently.

## Features
+ CSV File Reading: The Node.js built-in fs module reads CSV files and processes the data for conversion.
+ HTML Generation: The CSV data is transformed into an HTML table, making it easier to view in a browser or text editor.
+ PDF Creation: Based on the generated HTML, the application creates a PDF file that can be stored and shared.

## Dependencies
The project relies on two main libraries:

1. fs (File System): A native Node.js library that allows file system manipulation. It handles the reading of CSV files.
    + Installation: npm install fs --save
2. html-pdf: A library that converts HTML content into PDF files.
    + Installation: npm install html-pdf --save

## How the Application Works
1. CSV Reading: The application reads the CSV file using Node.js, processing the data and preparing it for conversion.

2. HTML Generation: The CSV data is structured into an HTML table format, which organizes the information in a clear and accessible way.

3. PDF Creation: The generated HTML is converted into a PDF file using the html-pdf library, creating a final report or document that can be easily shared.

## Use Cases
+ Automated Reporting: Companies receiving CSV data can use this application to automatically generate PDF reports, simplifying data sharing and analysis.
+ Data Visualization: If you have large volumes of data in CSV format and need to visualize it more clearly, converting it to HTML can make this task much easier.

## How to Run the Application
To run the application, users need to install the dependencies mentioned above and ensure that Node.js is installed on their system. Once set up, the CSV file to be converted should be placed in the specified folder, and the application will automatically generate the corresponding HTML and PDF files.
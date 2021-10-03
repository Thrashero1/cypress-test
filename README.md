# Test using Cypress

This is a quick test of the website [kryptoszene](https://kryptoszene.de/)

## Requirements
The following programs are required for the installation and running of this test.

Node JS: Verions 12 or higher. This can be installed from [node](https://nodejs.org/en/)
This should also install the npm package handler.

Yarn: This can be installed via npm using the command
```bash
npm install -g yarn
```

Once that is done navigate to the folder where the project is cloned and run 
```bash
yarn
```
This will install all of the required packages to run this project.

When complete run the following cli command to execute the test:
### Uisng the cypress GUI
```bash
yarn cy:open
```
### Run the test headlessly
```bash
yarn cy:test
```

## Report

The report, while using the GUI method, is within the GUI itself.

The report that is generated headlessly can be further enhanced by running the following command:
```bash
yarn cy:report
```
This will in turn run 3 commands and Generate an HTML report which can in be viewed at the location detailed within the CLI
This is usually within the folder ../cypress-test\mochawesome-report.

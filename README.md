# Valhacks 2019 - SmartCampusData Challenge

## Introduction
Honouring the challenge set by the Valhacks team, we have decided to accept the smart campus data visualisation challenge. Although,  recognising that researchers and developers would need to dive into raw data in any case, the task comes down to a making a platform for everyday users of the campus facilities.
\\ Instead of creating a visual interface with data metrics, with the purpose of showcasing the Smart Campus data without any specific goal in mind, we have decided to create a tool that harbours actual value to the user and the institution simultaneously.
\\ Deciphering the attributes, and training validated systems, we have come to uncover a new metric: Room Occupancy. Here we illustrate one usecase example of visualizing the “Room Occupancy” Smart Campus metric: Smart Cantine

## Idea Description
Using data on single or multiple features of temperature, CO2, light sensors and humidity from the DTU Smart Campus setup it is be possible to estimate the number of people in the cantines around campus.
\\ Based on this data a simple app could be build to show how busy each cantine is at the given moment "Busy", "Medium", "Low".
\\ Also it would be possible to create a schedule like a bar chart for how busy each cantine is during the day.
For this we have worked on an app prototype "Smart Cantine"

## The Smart Cantine App
The app is created in Angular using the ionic 1 framework.
\\ It is intended to be a mobile application, so to get the right feel when serving it locally run the browser in mobile view using F12 and choosing mobile design mode.
\\ You need ionic installed to run the app https://ionicframework.com/docs/v1/guide/installation.html
To run the app open the project in the terminal and type 'ionic serve'.

## Estimation and prediction
Estimation of room occupancy is a previously tested system, which can be modelled using simple predictive models (time series regression) or with more complex and accurate neural network-models (convolutional neural network).  We have build a  simple dummy-sample model to give insight into our idea, but due to restrictions on time, processing-power and documentation we have not trained any model.
\\ Link to validated models:
\\ https://arxiv.org/pdf/1607.05962.pdf
\\ https://www.sciencedirect.com/science/article/pii/S0378778815304357
\\ https://dial.uclouvain.be/memoire/ucl/en/object/thesis%3A14629

## Implementability
Our key point in developing the idea and prototype, has been to keep implementability as our core philosophy. We have build our idea to be implementable at DTU within a month from today, and for any other institution / office building we would be able to offer the service in combination with a Smart-Campus like IoT-setup from mid-May.

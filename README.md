## Goal

The AFAM motorbike application service provides a REST interface to retrieve a list of [Afam](https://afam.com/) spare parts that will fit a specific motorbike.

This project contains a React client application which illustrates how to make use of this service and a .NET Core project to host the React application. If required, the React app could be plugged into a different website virtually as-is.

The React client also illustrates the construction of a client side configurator for [Afam](https://afam.com/) motorcycle transmission kits.

Used on the actual site: https://afam-group.com/afam-kits-product-finder

Transmission: https://mcorthout.github.io/AfamBikePartsReact/index.html
Batteries: https://mcorthout.github.io/AfamBikePartsReact/batteries.html
Filters: https://mcorthout.github.io/AfamBikePartsReact/filters.html

## Audience

This project is intended for AFAM customers.

## Requirements

* A recent version of Visual Studio and the .NET Core framework. Tested with VS 2019 and .NET 5.0  
* node and npm

## Installation

* Clone or download the solution and open it in Visual Studio.
* NuGet will install the required .NET dependencies once you build the solution.
* `npm install` will install the required node packages

## Testing

* Project AfamBikePartsReactTest
  * Run tests using Test Explorer
* React client
  * `npm run test`
  

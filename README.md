EuroDig
=======

Convert Hindu-Arabic numerals of different scripts into Western Arabic (European) digits. 

# Supported scripts

## [Devanagari](https://en.wikipedia.org/wiki/Devanagari#Numerals)

Commonly used with:

* Hindi
* Konkani
* Marathi
* Nepali
* Sanskrit

# Installation

	npm install eurodig

# Usage

## Converting to WA numerals

	var eurodig = require('eurodig');
	var one_hundred = eurodig('१००');

## Converting _from_ WA numerals

	var toDevanagari = require('eurodig/to_devanagari');
	var one_hundred_in_devanagari = toDevanagari(100);

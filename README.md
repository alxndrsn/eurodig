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

	npm install eurodigit

# Usage

## Converting to WA numerals

	var eurodigit.js = require('eurodigit/src/to_euro');
	var one_hundred = eurodigit.js('१००');

## Converting _from_ WA numerals

	var toDevanagari = require('eurodigit/src/to_devanagari');
	var one_hundred_in_devanagari = toDevanagari(100);

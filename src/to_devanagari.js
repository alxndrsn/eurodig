'use strict';

/* Magic number: 2406 is the char code for '०' */
function replacer(c) { return String.fromCharCode(Number(c) + 2406); }

module.exports = function(original) {
	return original && original.toString().replace(/[0-9]/g, replacer);
};

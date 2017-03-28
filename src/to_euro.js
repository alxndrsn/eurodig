'use strict';

/* Magic number: 2406 is the char code for '०' */
function replacer(c) { return c.charCodeAt(0) - 2406; }

module.exports = function(original) {
	return original && original.toString().replace(/[०-९]/g, replacer);
};

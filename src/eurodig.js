'use strict';

var T_TABLE = {
	/* Devanagari */ '०':'0', '१':'1', '२':'2', '३':'3', '४':'4', '५':'5', '६':'6', '७':'7', '८':'8', '९':'9',
};

function replacer(c) {
	return T_TABLE[c];
}

module.exports = function(original) {
	if (typeof original === 'number') {
		return '' + original;
	}
	return original.replace(/[०-९]/g, replacer);
};

var to_euro = require('./to_euro');

module.exports = function(s) {
	return Number.parseInt(to_euro(s));
};

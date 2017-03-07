var assert = require('chai').assert;

describe('eurodig', function() {
	var eurodig = require('../src/eurodig.js');
	describe('#tr()', function() {
		it('should translate Nepali numerals', function() {
			// expect
			assertTranslation('0 1 2 3 4 5 6 7 8 9',
			                  '० १ २ ३ ४ ५ ६ ७ ८ ९');
		});
	});

	function assertTranslation(expected, toTranslate) {
		assert.equal(eurodig(toTranslate), expected);
	}
});

var assert = require('chai').assert;

describe('eurodig', function() {
	describe('#tr()', function() {
		var eurodig = require('../src/eurodig.js');

		it('should translate Devanagari numerals', function() {
			// expect
			assertTranslation('0 1 2 3 4 5 6 7 8 9',
			                  '० १ २ ३ ४ ५ ६ ७ ८ ९');
		});

		function assertTranslation(expected, toTranslate) {
			assert.equal(eurodig(toTranslate), expected);
		}
	});

	describe('#toDevanagari()', function() {
		var toDevanagari = require('../src/to_devanagari.js');

		it('should translate Western Arabic numerals to Devanagari', function() {
			// expect
			assert.equal(toDevanagari('0 1 2 3 4 5 6 7 8 9'),
			                  '० १ २ ३ ४ ५ ६ ७ ८ ९');
		});
	});
});

var assert = require('chai').assert;

describe('eurodig', function() {
	describe('#tr()', function() {
		var eurodig = require('../src/eurodig.js');

		it('should handle null values without error', function() {
			// expect
			assertTranslation(null, null);
		});

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

		it('should handle null values without error', function() {
			// expect
			assertTranslation(null, null);
		});

		it('should translate Western Arabic numerals to Devanagari', function() {
			// expect
			assertTranslation('० १ २ ३ ४ ५ ६ ७ ८ ९',
			                  '0 1 2 3 4 5 6 7 8 9');
		});

		it('should handle Numbers', function() {
			// expect
			assertTranslation('१२३', 123);
		});

		function assertTranslation(expected, toTranslate) {
			assert.equal(toDevanagari(toTranslate), expected);
		}
	});
});

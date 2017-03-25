var assert = require('chai').assert;

describe('eurodig', function() {
	describe('#tr()', function() {
		var eurodig = require('../src/eurodig.js');

		it('should translate Western numerals to Devanagari', function() {
			// expect
			assertTranslation('0 1 2 3 4 5 6 7 8 9',
			                  '० १ २ ३ ४ ५ ६ ७ ८ ९');
		});

		it('should translate numbers to Western string', function() {
			assertTranslation(123, '123');
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

		it('should translate numbers to Devanagari string', function() {
			assert.equal(toDevanagari(123), '१२३');
		});
	});
});

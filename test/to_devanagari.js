var assert = require('chai').assert;

var toDevanagari = require('../src/to_devanagari.js');

function assertTranslation(expected, toTranslate) {
	assert.equal(toDevanagari(toTranslate), expected);
}

describe('#to_devanagari()', function() {

	it('should handle null values without error', function() {
		// expect
		assertTranslation(null, null);
	});

	it('should translate Western Arabic numerals to Devanagari', function() {
		// expect
		assertTranslation('० १ २ ३ ४ ५ ६ ७ ८ ९',
				  '0 1 2 3 4 5 6 7 8 9');
	});

	it('should ignore irrelevant text', function() {
		// expect
		assertTranslation('irrelevant १२३ text',
				  'irrelevant 123 text');
	});

	it('should handle Numbers', function() {
		// expect
		assertTranslation('१२३', 123);
	});

});

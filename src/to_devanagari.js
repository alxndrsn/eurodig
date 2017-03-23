var T_TABLE = {
	'0':'०',
	'1':'१',
	'2':'२',
	'3':'३',
	'4':'४',
	'5':'५',
	'6':'६',
	'7':'७',
	'8':'८',
	'9':'९',
};

function replacer(c) {
	return T_TABLE[c];
}

module.exports = function(original) {
	return original.replace(/[0-9]/g, replacer);
};

// Home Route
exports.index = function(req, res) {
	res.render('index', {
		title: "Karmic Concept Inc.",
	});
};

exports.contact = function(req, res) {
	res.render('contact', {
		title: "Karmic Concept Inc.",
	});
};


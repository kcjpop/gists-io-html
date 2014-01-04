$(function() {
    var _editors = $('textarea.yes-sir');

	new SirTrevor.Editor({
		el: _editors,
		defaultType: 'Text'
	});
});
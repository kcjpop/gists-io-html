$(function() {
    var _editors = $('textarea.yes-sir');
    if (_editors.length) {
    	new SirTrevor.Editor({
    		el: _editors,
    		defaultType: 'Text'
    	});
    }
});
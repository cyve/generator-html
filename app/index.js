var generators = require('yeoman-generator');
module.exports = generators.Base.extend({
	constructor: function () {
		generators.Base.apply(this, arguments);

		this.option('coffee'); // This method adds support for a `--coffee` flag
	},

	createArchitecture: function () {
		console.log('create architecture');

		this.mkdir('css');
		this.mkdir('fonts');
		this.mkdir('image');
		this.mkdir('js');

		this.copy('index.html', 'index.html');
		this.copy('css/main.css', 'css/main.css');
		this.copy('js/main.js', 'js/main.js');

		this.copy('robots.txt', 'robots.txt');
		this.copy('_bower.json', 'bower.json');
        this.copy('_bowerrc', '.bowerrc');
	}
});

var elixir = require('laravel-elixir');

elixir((mix) => {
	mix
	.sass('styles.scss', 'assets/css/styles.css', 'assets/sass')
});

export default () => {
	return app.gulp
		.src(app.path.src.js)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'JavaScript',
				message: 'Error: <%= error.message %>',
			})
		))
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browserSync.stream())
}
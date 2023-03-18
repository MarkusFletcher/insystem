import newer from "gulp-newer"

export default () => {
	return app.gulp
		.src(app.path.src.svg)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'Svg',
				message: 'Error: <%= error.message %>',
			})
		))
		.pipe(newer(app.path.build.svg))
		.pipe(app.gulp.dest(app.path.build.svg))
		.pipe(app.plugins.browserSync.stream())
}
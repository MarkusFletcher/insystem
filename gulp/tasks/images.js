import imagemin from "gulp-imagemin"
import newer from "gulp-newer"

export default () => {
	return app.gulp
		.src(app.path.src.images)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'Images',
				message: 'Error: <%= error.message %>',
			})
		))
		.pipe(newer(app.path.build.images))
		.pipe(imagemin())
		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.plugins.browserSync.stream())
}
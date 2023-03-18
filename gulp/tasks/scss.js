import darkSass from 'sass'
import gulpSass from 'gulp-sass'

import autoPrefixer from 'gulp-autoprefixer'
import groupMediaQueries from 'gulp-group-css-media-queries'
import cleanCss from 'gulp-clean-css'

const sass = gulpSass(darkSass)

export default () => {
	return app.gulp
		.src(app.path.src.scss, { sourcemaps: true })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'HTML',
				message: 'Error: <%= error.message %>',
			})
		))
		.pipe(sass({
			outputStyle: 'expanded',
		}))
		.pipe(groupMediaQueries())
		.pipe(autoPrefixer({
			grid: true,
			overrideBrowserslist: ['last 3 versions'],
			cascade: false,
		}))
		.pipe(app.plugins.rename({
			basename: 'style',
			extname: '.css',
		}))
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(cleanCss())
		.pipe(app.plugins.rename({
			extname: '.min.css',
		}))
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browserSync.stream())
}
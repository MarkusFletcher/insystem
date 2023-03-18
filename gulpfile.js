// Импорт модулей
import gulp from 'gulp'

// Импорт путей
import { pathes } from './gulp/config/path.js'
// Импорт плагинов
import plugins from './gulp/config/plugins.js'

// Запись в глобальную переменную
global.app = {
	gulp: gulp,
	path: pathes,
	plugins: plugins
}

// Импорт задач
import copy from './gulp/tasks/copy.js'
import clear from './gulp/tasks/clear.js'
import html from './gulp/tasks/html.js'
import scss from './gulp/tasks/scss.js'
import js from './gulp/tasks/js.js'
import images from './gulp/tasks/images.js'
import svg from './gulp/tasks/svg.js'
import server from './gulp/tasks/server.js'

// Построение сценариев задач
const dev = gulp.series(
	clear,
	gulp.parallel(copy, html, scss, js, images, svg),
	gulp.parallel(watcher, server)
)

// Наблюдатель
function watcher() {
	gulp.watch(pathes.watch.files, copy)
	gulp.watch(pathes.watch.html, html)
	gulp.watch(pathes.watch.scss, scss)
	gulp.watch(pathes.watch.js, js)
	gulp.watch(pathes.watch.images, images)
	gulp.watch(pathes.watch.images, svg)
}

gulp.task('default', dev)
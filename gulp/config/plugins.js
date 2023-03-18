import plumber from 'gulp-plumber' // Обработка ошибок
import notify from 'gulp-notify' // Сообщения
import browserSync from 'browser-sync' // Локальный сервер
import rename from 'gulp-rename'

export default {
	plumber: plumber,
	notify: notify,
	browserSync: browserSync,
	rename: rename,
}
import * as path from 'path'

const rootFolder = path.basename(path.resolve())
const buildFolder = './dist'
const srcFolder = './src'

export const pathes = {
	build: {
		html: `${buildFolder}/`,
		css: `${buildFolder}/css/`,
		js: `${buildFolder}/js/`,
		images: `${buildFolder}/images/`,
		svg: `${buildFolder}/svg/`,
		fonts: `${buildFolder}/fonts/`,
	},
	src: {
		html: `${srcFolder}/*.html`,
		scss: `${srcFolder}/scss/#main.scss`,
		js: `${srcFolder}/js/**/*.*`,
		images: `${srcFolder}/images/**/*.{jpg,jpeg,png,PNG,gif,webp}`,
		svg: `${srcFolder}/svg/**/*.svg`,
		fonts: `${srcFolder}/fonts/**/*.*`,
	},
	watch: {
		html: `${srcFolder}/**/*.html`,
		scss: `${srcFolder}/scss/**/*.scss`,
		js: `${srcFolder}/js/**/*.js`,
		images: `${srcFolder}/images/**/*.{jpg,jpeg,png,PNG,gif,webp}`,
		svg: `${srcFolder}/svg/**/*.svg`,
		fonts: `${srcFolder}/fonts/**/*.*`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``,
}
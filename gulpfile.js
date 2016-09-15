/**
 * Gulpfile
 * - turns raw javascript from ./src into production code! This will go to ./dist
 *
 */
var gulp        = require('gulp'),
		browserify  = require('browserify'),
		source      = require('vinyl-source-stream'),
		buffer      = require('vinyl-buffer'),
		uglify      = require('gulp-uglify'),
		browserSync = require('browser-sync').create();

/**
 * Scripts
 * - combines all the script files into one and minifies it.
 *
 */
gulp.task('scripts', function() {
	return browserify('./src/client/index.js')
		.bundle()
		.on('error', function(err) {
			console.error(err.toString());
		})
		.pipe(source('app.js'))
		.pipe(buffer())
		.pipe(uglify()) // aka minify basically
		.pipe(gulp.dest('./dist/client/assets/scripts'))
		.pipe(browserSync.reload({ stream: true }));
});

/**
 * Static
 * - moves all static assets from src to dist.
 *
 */
gulp.task('static', function() {
	return gulp.src('./src/client/index.html')
		.pipe(gulp.dest('./dist/client'))
		.pipe(browserSync.reload({ stream: true }));
});

/**
 * Views
 * - moves application views from src to dist.
 *
 */
gulp.task('views', function() {
	return gulp.src('./src/client/views/**/*.html')
		.pipe(gulp.dest('./dist/client/assets/views'))
		.pipe(browserSync.reload({ stream: true }));
});

/**
 * BrowserSync
 * - turns on a local dev server so you can live edit your project!
 *
 */
gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: './dist/client'
		}
	});
});

/**
 * Default
 * - takes all of the tasks and turns them into one!
 *
 */
gulp.task('default', ['scripts', 'static', 'views', 'browser-sync'], function() {
	gulp.watch('./src/client/**/*.js', ['scripts']);
	gulp.watch('./src/client/index.html', ['static']);
	gulp.watch('./src/client/views/**/*.html', ['views']);
});
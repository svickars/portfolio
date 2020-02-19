var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');
var requireDir = require('require-dir');
var del = require('del');

requireDir('./gulp-tasks');

gulp.task('watch', ['browserSync', 'css:compile'], function() {
	gulp.watch('src/css/**/*.scss', ['css:compile', browserSync.reload]);
	gulp.watch('src/*.hbs', ['html:dev', browserSync.reload]);
	gulp.watch('src/assets/copy/*.json', ['html:dev', browserSync.reload]);
	// gulp.watch('src/*.html', [browserSync.reload]);
	gulp.watch('src/js/**/*.js', ['bundle', browserSync.reload]);
})

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'src'
		},
		port: 4000,
		notify: false,
		ghostMode: false,
		online: true,
	})
})

gulp.task('clean:docs', function() {
	return del.sync('docs');
});

gulp.task('build', function(callback) {
	runSequence('clean:docs', 'html:dev',
		['bundle', 'css:compile', 'css:purge', 'opt:images', 'assets:fonts', 'assets:styles', 'assets:scripts', 'assets:data', 'assets:cname', 'projects'],
		callback
	)
});

gulp.task('default', function(callback) {
	runSequence('google:fonts', ['html:dev', 'css:compile', 'browserSync', 'watch'],
		callback
	)
});
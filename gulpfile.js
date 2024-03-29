var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var argv = require('yargs').argv;


/**
 * Bumping version number and tagging the repository with it.
 * Please read http://semver.org/
 *
 * You can use the commands
 *
 *     gulp patch     # makes v0.1.0 → v0.1.1
 *     gulp feature   # makes v0.1.1 → v0.2.0
 *     gulp release   # makes v0.2.1 → v1.0.0
 *
 * To bump the version numbers accordingly after you did a patch,
 * introduced a feature or made a backwards-incompatible release.
 */
function inc(importance) {
  // Get all the files to bump version in
  return gulp.src(['./bower.json', './package.json'])
    // Bump the version number in those files
    .pipe(plugins.bump({ type: importance }))
    // Save it back to filesystem
    .pipe(gulp.dest('./'))
    // Commit the changed version number
    .pipe(plugins.git.commit('bumps package version'))
    // Read only one file to get the version number
    .pipe(plugins.filter('package.json'))
    // Tag it in the repository
    .pipe(plugins.tagVersion());
}

gulp.task('patch', function() { return inc('patch'); });
gulp.task('feature', function() { return inc('minor'); });
gulp.task('release', function() { return inc('major'); });


/**
 * Run git push with tags.
 */
gulp.task('pushtags', function() {

  var branch = argv.branch ? argv.branch : 'master';

  return plugins.git.push('origin', branch, { args: '--tags' }, function(err) {
    if (err) {
      throw err;
    }
  });
});

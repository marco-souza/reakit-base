let gulp                = require("gulp"),
    del                 = require("del"),
    pug                 = require("gulp-pug"),
    file                = require("gulp-file"),
    config              = require("common-config"),
    htmlmin             = require("gulp-htmlmin"),
    webpack             = require("webpack"),
    gutil               = require("gulp-util"),
    gulpconfig          = require("./gulp.config");

let statsInfo = {
    colors: gutil.colors.supportsColor,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false,
    modules: false,
    children: true,
    version: true,
    cached: false,
    cachedAssets: false,
    reasons: false,
    source: false,
    errorDetails: false
};

let bundleDoneCalled = {};


/************************************************************
 * Config Tasks : Write a config to config folder
 ************************************************************/
gulp.task("config", function () {
    let str = ("module.exports = " + JSON.stringify(config, null, 4));
    return file("index.js", str, { src:true })
    .pipe(gulp.dest("./config"));
});


/************************************************************
* Pug Tasks
*************************************************************/
gulp.task("pug", function (done) {
    return gulp.src(gulpconfig.app.src.html)
    .pipe(pug({
        locals: config.webinfo
    }))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(gulpconfig.app.dest))
})


/************************************************************
* Bundle Tasks
*************************************************************/
gulp.task("bundle", function (done) {
    webpack(require("./webpack/dist.config"), function (err, stats) {
        if (err) throw new gutil.PluginError("webpack", err);

        gutil.log("[webpack]", stats.toString(statsInfo));

        if(!bundleDoneCalled) {
            bundleDoneCalled.all = true;
            done();
        }
    })
})


/************************************************************
* Define Macro Tasks
*************************************************************/
gulp.task("default", [
    "config",
    "bundle",
    "pug",
])

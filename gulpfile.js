const gulp = require('gulp');
const { spawn } = require('child_process');
const electron = require('electron');

function runGodotLauncher() {
    const child = spawn(electron, ['./app'], { stdio: 'inherit' });
    child.on('error', function(err) {
        console.error(err);
    });

    return child;
}

exports.default = gulp.series(runGodotLauncher);
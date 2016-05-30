var fork = require('child_process').fork;

module.exports = {
  start: () => {
    var nodeProcess = fork(
      process.argv[1],
      process.argv.slice(1)
    );
    nodeProcess.on('exit', function() {
      process.exit();
    });
  }
};
var fork = require('child_process').fork;

module.exports = {
	start: () => {
		var nodeProcess = fork(
			process.argv[2],
			process.argv.slice(3), {
				cwd: process.cwd()
			}
		);
		nodeProcess.on('exit', function() {
			process.exit();
		});
	}
};
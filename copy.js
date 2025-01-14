// include fs-extra package
var fs = require("fs-extra");
const path = require('path');

var source = 'github-9jygxhve-agbrjju6/jqx.gantt.css'
var source2 = 'github-9jygxhve-agbrjju6/src/assets/styles.css'

const dir = path.join(path.resolve(__dirname));

fs.readdirSync(dir).forEach((file, index) => {
	
	const subDir = path.join(path.resolve(__dirname, file));
	const stats = fs.statSync(subDir);
	
	if (stats.isDirectory() && subDir.indexOf('.git') === -1 && subDir.indexOf('github') === -1&& subDir.toLowerCase().indexOf('readme') === -1) {
		fs.readdirSync(subDir).forEach((demo, index) => {
			if (demo.toLowerCase().indexOf('readme') === -1 && demo.toLowerCase().indexOf('node_modules') === -1 && demo.toLowerCase().indexOf('package') === -1) {
			const newPath = path.join(path.resolve(subDir, demo));
			 if (newPath.indexOf('gantt') >= 0) {
			 console.log(newPath);
	     	 fs.copySync(source, newPath + '/src/assets/jqx.gantt.css');
			 }
		  }
		});
	}
});
 /*
// copy source folder to destination
fs.copyFile(source, destination, function (err) {
    if (err){
        console.log('An error occured while copying the folder.')
        return console.error(err)
    }
    console.log('Copy index.d.ts completed!')
});
*/
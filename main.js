const fork = require('child_process').fork;
const debugMode = require('debug-mode');

const DEBUGGER_PORT = 9999;

debugger;

if(debugMode()) {
  process.execArgv.push('--inspect=' + (DEBUGGER_PORT));
}

fork('./child.js');

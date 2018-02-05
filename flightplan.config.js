/* eslint-disable */
var plan = require('flightplan');
var tmpDir = 'blog-client-' + new Date().getTime();
var user = 'react';

plan.target('production', {
  host: '',
  username: user,
  agent: process.env.SSH_AUTH_SOCK
});

plan.local( function(local) {
  local.log('Copy files to remote host');
  var filesToCopy = local.exec('git ls-files', { silent: true });
  local.transfer(filesToCopy, '/tmp/' + tmpDir);
});

plan.remote(function(remote) {
  remote.exec('nvm use default');
  remote.log('Move folder to web root');
  remote.exec('cp -R /tmp/' + tmpDir + ' ~/');
  remote.exec('rm -r /tmp/' + tmpDir);

  remote.log('Install dependencies');
  remote.exec('npm --prefix ~/' + tmpDir + 'install ~/' + tmpDir);
  remote.log('Build');
  remote.exec('npm --prefix ~/' + tmpDir + ' run build');

  remote.log('Reload application');
  remote.exec('ln -snf ~/' + tmpDir + ' ~/current');
  remote.exec('(cd ~/current && pm2 restart pm2.config.js --env production)');

  remote.log('Run tests');
  remote.exec('cd ~/' + tmpDir + '; mkdir -p log');
  remote.exec('npm --prefix ~/' + tmpDir + ' run test >> log/test.log');
  
  remote.log('Finish');
});

/* global Package */
Package.describe({
  name: 'hadynz:accounts-trademe',
  summary: 'OAuth flow for Trade Me',
  version: '1.0.0',
  git: 'https://github.com/hadynz/meteor-accounts-trademe.git'
});

Package.onUse(function (api) {
  'use strict';

  api.versionsFrom('0.9.0');
  api.use('accounts-base', ['client', 'server']);

  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);

  api.use('accounts-oauth', ['client', 'server']);
  api.use('hadynz:trademe', ['client', 'server']);

  api.addFiles('src/trademe.js');
});

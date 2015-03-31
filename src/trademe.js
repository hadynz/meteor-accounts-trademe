/* global Meteor, Accounts, TradeMe */
'use strict';

Accounts.oauth.registerService('trademe');

if (Meteor.isClient) {
  Meteor.loginWithTradeMe = function (options, callback) {
    // support a callback without options
    if (!callback && typeof options === 'function') {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    TradeMe.requestCredential(options, credentialRequestCompleteCallback);
  };
}
else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.trademe'],
    forOtherUsers: ['services.trademe.Nickname']
  });
}

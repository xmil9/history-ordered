const { ServerResponse } = require('http');
const { getDefaultConfig } = require('expo/metro-config');

// The Expo dev server writes the web HTML before Metro's middleware runs, so
// the isolation headers below never reach the document. SharedArrayBuffer,
// which expo-sqlite needs on web, stays disabled unless the document itself
// opts in. Stamp the headers onto every response that has not been sent yet.
if (!ServerResponse.prototype.end.__sequenceIsolation) {
  const originalEnd = ServerResponse.prototype.end;
  function patchedEnd(...args) {
    if (!this.headersSent) {
      this.setHeader('Cross-Origin-Embedder-Policy', 'credentialless');
      this.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    }
    return originalEnd.apply(this, args);
  }
  patchedEnd.__sequenceIsolation = true;
  ServerResponse.prototype.end = patchedEnd;
}

const config = getDefaultConfig(__dirname);

const assetExts = config.resolver.assetExts ?? [];
if (!assetExts.includes('wasm')) {
  config.resolver.assetExts = [...assetExts, 'wasm'];
}

// expo-sqlite on web needs SharedArrayBuffer, which the browser only
// enables when these isolation headers are present.
config.server.enhanceMiddleware = (middleware) => {
  return (req, res, next) => {
    res.setHeader('Cross-Origin-Embedder-Policy', 'credentialless');
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    return middleware(req, res, next);
  };
};

module.exports = config;

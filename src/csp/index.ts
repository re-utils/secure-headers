export const init = (value: string): string => value.slice(2) || "default-src 'self'";

// Directive values
export const self = " 'self'";
export const none = " 'none'";
export const unsafeEval = " 'unsafe-eval'";
export const wasmUnsafeEval = " 'wasm-unsafe-eval'";
export const unsafeInline = " 'unsafe-inline'";
export const unsafeHashes = " 'unsafe-hashes'";
export const inlineSpeculationRules = " 'inline-speculation-rules'";
export const strictDynamic = " 'strict-dynamic'";
export const reportSample = " 'report-sample'";

export const createNonce = (sz: number, options?: Parameters<Uint8Array['toBase64']>[0]): () => string => {
  // This is thread-safe lol no worries
  const buf = new Uint8Array(sz);
  return () => " 'nonce-" + crypto.getRandomValues(buf).toBase64(options) + "'";
}

export const nonce = (value: string): string => " 'nonce-" + value + "'";
export const hash = (alg: string, value: string): string =>
  " '" + alg + '-' + value + "'";
export const url = (src: string): string => ' ' + src;

// Directive names
export * as src from './srcs.ts';

// Document
export const baseURI = '; base-uri';
export const sandbox = '; sandbox';

// Navigation
export const formAction = '; form-action';
export const frameAncestors = '; frame-ancestors';

// Report
export const reportTo = '; report-to';

// Other
export const requireTrustedTypesFor = '; require-trusted-types-for';
export const trustedTypes = '; trusted-types';
export const upgradeInsecureRequests = '; upgrade-insecure-requests';

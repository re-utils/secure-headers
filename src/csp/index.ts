export const init = (...srcs: any[]): string => srcs.filter((a) => typeof a === 'string').join('; ');

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

export const nonce = (value: string): string => " 'nonce-" + value + "'";
export const hash = (alg: string, value: string): string =>
  " '" + alg + '-' + value + "'";
export const url = (src: string): string => ' ' + src;

// Directive names
export * as src from './srcs.ts';

// Document
export const baseURI = 'base-uri';
export const sandbox = 'sandbox';

// Navigation
export const formAction = 'form-action';
export const frameAncestors = 'frame-ancestors';

// Report
export const reportTo = 'report-to';

// Other
export const requireTrustedTypesFor = 'require-trusted-types-for';
export const trustedTypes = 'trusted-types';
export const upgradeInsecureRequests = 'upgrade-insecure-requests';

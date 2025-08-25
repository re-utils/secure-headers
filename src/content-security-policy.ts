export const init = (value: string): string =>
  value.slice(2) || "default-src 'self'";

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

export const createNonce = (
  sz: number,
  options?: Parameters<Uint8Array['toBase64']>[0],
): (() => string) => {
  // This is thread-safe lol no worries
  const buf = new Uint8Array(sz);
  return () => " 'nonce-" + crypto.getRandomValues(buf).toBase64(options) + "'";
};

export const nonce = (value: string): string => " 'nonce-" + value + "'";
export const hash = (alg: string, value: string): string =>
  " '" + alg + '-' + value + "'";
export const url = (src: string): string => ' ' + src;

// Document
export const baseURI = (value: string): string => '; base-uri' + value;
export const sandbox = (value: string): string => '; sandbox' + value;

// Navigation
export const formAction = (value: string): string => '; form-action' + value;
export const frameAncestors = (value: string): string =>
  '; frame-ancestors' + value;

// Report
export const reportTo = (value: string): string => '; report-to' + value;

// Other
export const requireTrustedTypesFor = (value: string): string =>
  '; require-trusted-types-for' + value;
export const trustedTypes = (value: string): string =>
  '; trusted-types' + value;
export const upgradeInsecureRequests = (value: string): string =>
  '; upgrade-insecure-requests' + value;

export const childSrc = (value: string): string => '; child-src' + value;
export const connectSrc = (value: string): string => '; connect-src' + value;
export const defaultSrc = (value: string): string => '; default-src' + value;
export const fencedFrameSrc = (value: string): string =>
  '; fenced-frame-src' + value;
export const fontSrc = (value: string): string => '; font-src' + value;
export const frameSrc = (value: string): string => '; frame-src' + value;
export const imgSrc = (value: string): string => '; img-src' + value;
export const manifestSrc = (value: string): string => '; manifest-src' + value;
export const mediaSrc = (value: string): string => '; media-src' + value;
export const objectSrc = (value: string): string => '; object-src' + value;

export const scriptSrc = (value: string): string => '; script-src' + value;
export const scriptSrcElem = (value: string): string =>
  '; script-src-elem' + value;
export const scriptSrcAttr = (value: string): string =>
  '; script-src-attr' + value;

export const styleSrc = (value: string): string => '; style-src' + value;
export const styleSrcElem = (value: string): string =>
  '; style-src-elem' + value;
export const styleSrcAttr = (value: string): string =>
  '; style-src-attr' + value;

export const workerSrc = (value: string): string => '; worker-src' + value;

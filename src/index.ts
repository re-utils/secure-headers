export * as csp from './csp/index.ts';
export * as sts from './strict-transport-security.ts';

export const reportEndpoints = (endpoints: Record<string, string>): string =>
  Object.entries(endpoints)
    .map((pair) => pair[0] + '="' + pair[1] + '"')
    .join();

export interface Options {
  'content-security-policy'?: string;
  'content-security-policy-report-only'?: string;
  'strict-transport-security'?: string;
  'cross-origin-embedder-policy'?:
    | 'unsafe-none'
    | 'require-corp'
    | 'credentialless';
  'cross-origin-resource-policy'?: 'same-site' | 'same-origin' | 'cross-origin';
  'cross-origin-opener-policy'?:
    | 'unsafe-none'
    | 'same-origin-allow-popups'
    | 'same-origin'
    | 'noopener-allow-popups';
  'referrer-policy'?:
    | 'no-referrer'
    | 'no-referrer-when-downgrade'
    | 'origin'
    | 'origin-when-cross-origin'
    | 'same-origin'
    | 'strict-origin'
    | 'strict-origin-when-cross-origin'
    | 'unsafe-url';
  'origin-agent-cluster'?: '?0' | '?1';
}

export const defaults: Options = {
  "content-security-policy": "default-src 'self'",
  "cross-origin-embedder-policy": "require-corp",
  "cross-origin-opener-policy": "same-origin",
  "cross-origin-resource-policy": "same-origin",
  "origin-agent-cluster": "?1",
  "referrer-policy": "no-referrer",
  "strict-transport-security": "max-age=15552000; includeSubDomains"
};

export const secureHeaders = (headers?: Options): Options => Object.assign({}, defaults, headers);

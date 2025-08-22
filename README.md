# Secure headers
Secure HTTP headers.

## Content-Security-Policy
```ts
import { csp } from 'secure-headers';

const setScriptSrc = false;

// default-src 'self'
const header = csp.init(
  // default-src 'self'
  csp.src.fallback + csp.self,
  // any directive pair that is not a string is ignored
  setScriptSrc && (csp.src.script + csp.url('https://example.com')),
);
```

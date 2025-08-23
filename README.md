Secure HTTP headers.
```ts
import { secureHeaders } from 'secure-headers';

// Type-safe wrapper
const headers = secureHeaders({
  // Override default headers
  'content-security-policy': 'script-src https://example.com'
});
```

### `Content-Security-Policy`
```ts
import { csp } from 'secure-headers';

const setScriptSrc = false;

// default-src 'self'
const contentSecurityPolicy = csp.init(
  // default-src 'self'
  csp.src.fallback + csp.self +
  // script-src https://example.com
  (setScriptSrc ? csp.src.script + csp.url('https://example.com') : ''),
);
```

To generate random nonce value during request:
```ts
const createNonce = csp.createNonce(32);

(req) => {
  req.headers.push([
    'Content-Security-Policy',
    contentSecurityPolicy +
    // Dynamic directive
    csp.src.script + csp.url('https://example.com') + createNonce()
  ]);
};
```

### `Reporting-Endpoints`
```ts
import { reportEndpoints } from 'secure-headers';

// csp-endpoint="https://example.com/csp-reports",permissions-endpoint="https://example.com/permissions-policy-reports"
const reportingEnpoints = reportEndpoints({
  'csp-endpoint': 'https://example.com/csp-reports'
  'permissions-endpoint': 'https://example.com/permissions-policy-reports'
});
```

### `Strict-Transport-Security`
```ts
import { sts } from 'secure-headers';

// max age is required
const transportSecurity = sts.maxAge(960000);

// set other optional props
const transportSecurity = sts.maxAge(960000) + sts.includeSubdomains + sts.preload;
```

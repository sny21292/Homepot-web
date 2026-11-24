# Homepot website (homepot.techmarbles.com)

The public site for the Homepot app (the app itself is in the separate `Homepot` repo): landing page, privacy policy, account deletion and support. It's a **Next.js static export**: building it produces plain HTML/CSS/JS in `out/`. The server only has to serve files; no Node process runs in production.

| Page | URL |
|---|---|
| Landing | `/` |
| Privacy policy (store "Privacy policy URL") | `/privacy/` |
| Account deletion (Google Play requirement) | `/delete-account/` |
| Support (store "Support URL") | `/support/` |

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # writes out/
npm run lint
```

Contact email, company name and the policy date live in `src/lib/site.ts`.

## Deploy (server)

Needs Node 20+ only for the build step.

```bash
git clone git@github.com:sny21292/Homepot-web.git   # or git pull if already cloned
cd Homepot-web
npm ci
npm run build                                      # -> Homepot-web/out
```

Point the web server's document root for `homepot.techmarbles.com` at `Homepot-web/out` and enable HTTPS (e.g. Let's Encrypt). Example nginx server block:

```nginx
server {
    server_name homepot.techmarbles.com;
    root /path/to/Homepot-web/out;
    index index.html;

    location / {
        try_files $uri $uri/ $uri.html =404;
    }
    error_page 404 /404.html;

    # Hashed build assets never change: cache them for a year.
    location /_next/static/ {
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
}
```

Apache works the same way: document root `out/`, with `DirectoryIndex index.html`.

To update the site later: `git pull && npm ci && npm run build`.

## DNS note

`techmarbles.com` DNS is on Cloudflare. A wildcard `*.techmarbles.com` already points to the Techmarbles server, so `homepot.techmarbles.com` reaches it without a new record. The same subdomain will also get Resend email records (`resend._domainkey.homepot`, `send.homepot`); those don't affect the website.

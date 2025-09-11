# weijian-portfolio

My portfolio website for all GitHub projects.

> **Unleash Work & Wonder!**

License: [MIT License](https://github.com/WeiJian123-tech/weijian-portfolio/blob/main/LICENSE)

## Bun Server

This app has a minimal [Bun server](https://bun.sh/docs/api/http) implementation. After running a full build, you can preview the build using the command:

```
bun run serve
```

Then visit [http://localhost:3000/](http://localhost:3000/)

## Static Site Generator (Node.js)

Be sure to configure your server to serve very long cache headers for the `build/**/*.js` files.

Typically you'd set the `Cache-Control` header for those files to `public, max-age=31536000, immutable`.

```shell
bun build.server
```

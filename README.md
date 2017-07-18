# nonfancy-require

> Experimental minimal browser based dynamic `require`

This minimal micro function allows for the following in the browser without a pre-compile step, code splitting for free! lol...

```html
<html>
  <script src='./require.js' type='text/javascript'></script>
  <link rel='stylesheet' href='./src/app.css'>
  <body>
    <div id='root'></div>
  </body>

  <script type='text/javascript'>
    var app = require('./app.js');
    app.render('#root');
  </script>
</html>
```

**do not use in production**
This synchronously loads javascript dependency files, generating a warning since synchronous XHR calls are deprecated.

- [x] require files
- [ ] require nested directories



Run the example:

`python -m SimpleHTTPServer`

load [http://localhost:8000](http://localhost:8000)

#[MIT](LICENSE)

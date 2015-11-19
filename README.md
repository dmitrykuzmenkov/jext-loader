JEXT webpack loader
======

## Webpack config example

```
{
  ...
  module: {
    loaders: [
      ...
      { test: /\.jext/, loader: "jext" }
    ]
  }
}
```

## Simple usage

```javascript
var jext = require('jext');
var template = require('example.jext');
var pool = jext.pool(template);

var example = pool.get('example');
document.body.appendChild(example.dom());
example.update({param: 'value'});
```

## More info
See JEXT github page: https://github.com/dmitrykuzmenkov/jext

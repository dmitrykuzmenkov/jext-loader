var DOMParser = require('xmldom').DOMParser;
var Compile = require('jext/compile');

var Parser = new DOMParser();
module.exports = function (content) {
  this.cacheable();
  var name = loaderUtils.interpolateName(this, "[name]", {content: content});

  var pool = {};
  new Compile(Parser.parseFromString(content), pool).build(file.split('.')[0]);

  var pool_code = [];
  Object.keys(pool).forEach(function(template) {
    pool_code.push('"' + template + '":' + pool[template]);
  });

  return [
    'var jext = require("jext")',
    'module.exports = {' + pool_code.join(',') + '}'
  ].join(';');
};
var LoaderUtils = require("loader-utils");
var DOMParser = require('xmldom').DOMParser;
var Compile = require('jext/compile');

var Parser = new DOMParser();
module.exports = function (content) {
  this.cacheable();
  var name = LoaderUtils.interpolateName(this, "[name]", {content: content});

  var pool = {};
  new Compile(Parser.parseFromString(content), pool).build(name);

  var pool_code = [];
  var template;
  for (template in pool) {
    pool_code.push('"' + template + '":' + pool[template]);
  }

  return 'var jext = require("jext");' +
    'module.exports = {' + pool_code.join(',') + '}'
  ;
};

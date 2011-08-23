goog.addDependency("base.js", ['goog'], []);
goog.addDependency("string/string.js", ['goog.string', 'goog.string.Unicode'], []);
goog.addDependency("useragent/jscript.js", ['goog.userAgent.jscript'], ['goog.string']);
goog.addDependency("string/stringbuffer.js", ['goog.string.StringBuffer'], ['goog.userAgent.jscript']);
goog.addDependency("debug/error.js", ['goog.debug.Error'], []);
goog.addDependency("asserts/asserts.js", ['goog.asserts', 'goog.asserts.AssertionError'], ['goog.debug.Error', 'goog.string']);
goog.addDependency("array/array.js", ['goog.array', 'goog.array.ArrayLike'], ['goog.asserts']);
goog.addDependency("object/object.js", ['goog.object'], []);
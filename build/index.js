"use strict";

var _store = _interopRequireDefault(require("./store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getDynamicObject = function getDynamicObject(list, fieldName) {
  // this 'list' will devide based on 'fieldName'
  var obj = {};
  list.forEach(function (item) {
    if (obj[item[fieldName]]) {
      obj[item[fieldName]].push(item);
    } else {
      obj[item[fieldName]] = [item];
    }
  });
  return obj;
};

var sayHi = function sayHi() {
  return (0, _store["default"])();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJnZXREeW5hbWljT2JqZWN0IiwibGlzdCIsImZpZWxkTmFtZSIsIm9iaiIsImZvckVhY2giLCJpdGVtIiwicHVzaCIsInNheUhpIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxJQUFELEVBQWNDLFNBQWQsRUFBb0M7QUFBRTtBQUMzRCxNQUFJQyxHQUFPLEdBRVQsRUFGRjtBQUlBRixFQUFBQSxJQUFJLENBQUNHLE9BQUwsQ0FBYSxVQUFDQyxJQUFELEVBQWdDO0FBQ3pDLFFBQUlGLEdBQUcsQ0FBQ0UsSUFBSSxDQUFDSCxTQUFELENBQUwsQ0FBUCxFQUEwQjtBQUN0QkMsTUFBQUEsR0FBRyxDQUFDRSxJQUFJLENBQUNILFNBQUQsQ0FBTCxDQUFILENBQXFCSSxJQUFyQixDQUEwQkQsSUFBMUI7QUFDSCxLQUZELE1BRU87QUFDSEYsTUFBQUEsR0FBRyxDQUFDRSxJQUFJLENBQUNILFNBQUQsQ0FBTCxDQUFILEdBQXVCLENBQUNHLElBQUQsQ0FBdkI7QUFDSDtBQUNKLEdBTkQ7QUFRQSxTQUFPRixHQUFQO0FBQ0gsQ0FkRDs7QUFnQkEsSUFBTUksS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNoQixTQUFPLHdCQUFQO0FBQ0gsQ0FGRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhIGZyb20gJy4vc3RvcmUnO1xuXG5jb25zdCBnZXREeW5hbWljT2JqZWN0ID0gKGxpc3Q6IGFueVtdLCBmaWVsZE5hbWU6IHN0cmluZykgPT4geyAvLyB0aGlzICdsaXN0JyB3aWxsIGRldmlkZSBiYXNlZCBvbiAnZmllbGROYW1lJ1xuICAgIGxldCBvYmo6YW55ID0gPHtcbiAgICAgICAgW2luZGV4OiBzdHJpbmddOiBhbnlcbiAgICB9Pnt9XG5cbiAgICBsaXN0LmZvckVhY2goKGl0ZW06IHsgW3g6IHN0cmluZ106IGFueSB9KSA9PiB7IFxuICAgICAgICBpZiAob2JqW2l0ZW1bZmllbGROYW1lXV0pIHtcbiAgICAgICAgICAgIG9ialtpdGVtW2ZpZWxkTmFtZV1dLnB1c2goaXRlbSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9ialtpdGVtW2ZpZWxkTmFtZV1dID0gW2l0ZW1dXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIG9iajtcbn1cblxuY29uc3Qgc2F5SGkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGEoKTtcbn1cbiJdfQ==
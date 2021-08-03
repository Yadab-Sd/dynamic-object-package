"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sayHi = exports.getDynamicObject = void 0;

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

exports.getDynamicObject = getDynamicObject;

var sayHi = function sayHi() {
  return (0, _store["default"])();
};

exports.sayHi = sayHi;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJnZXREeW5hbWljT2JqZWN0IiwibGlzdCIsImZpZWxkTmFtZSIsIm9iaiIsImZvckVhY2giLCJpdGVtIiwicHVzaCIsInNheUhpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFTyxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLElBQUQsRUFBY0MsU0FBZCxFQUFvQztBQUFFO0FBQ2xFLE1BQUlDLEdBQU8sR0FFVCxFQUZGO0FBSUFGLEVBQUFBLElBQUksQ0FBQ0csT0FBTCxDQUFhLFVBQUNDLElBQUQsRUFBZ0M7QUFDekMsUUFBSUYsR0FBRyxDQUFDRSxJQUFJLENBQUNILFNBQUQsQ0FBTCxDQUFQLEVBQTBCO0FBQ3RCQyxNQUFBQSxHQUFHLENBQUNFLElBQUksQ0FBQ0gsU0FBRCxDQUFMLENBQUgsQ0FBcUJJLElBQXJCLENBQTBCRCxJQUExQjtBQUNILEtBRkQsTUFFTztBQUNIRixNQUFBQSxHQUFHLENBQUNFLElBQUksQ0FBQ0gsU0FBRCxDQUFMLENBQUgsR0FBdUIsQ0FBQ0csSUFBRCxDQUF2QjtBQUNIO0FBQ0osR0FORDtBQVFBLFNBQU9GLEdBQVA7QUFDSCxDQWRNOzs7O0FBZ0JBLElBQU1JLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFDdkIsU0FBTyx3QkFBUDtBQUNILENBRk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYSBmcm9tICcuL3N0b3JlJztcblxuZXhwb3J0IGNvbnN0IGdldER5bmFtaWNPYmplY3QgPSAobGlzdDogYW55W10sIGZpZWxkTmFtZTogc3RyaW5nKSA9PiB7IC8vIHRoaXMgJ2xpc3QnIHdpbGwgZGV2aWRlIGJhc2VkIG9uICdmaWVsZE5hbWUnXG4gICAgbGV0IG9iajphbnkgPSA8e1xuICAgICAgICBbaW5kZXg6IHN0cmluZ106IGFueVxuICAgIH0+e31cblxuICAgIGxpc3QuZm9yRWFjaCgoaXRlbTogeyBbeDogc3RyaW5nXTogYW55IH0pID0+IHsgXG4gICAgICAgIGlmIChvYmpbaXRlbVtmaWVsZE5hbWVdXSkge1xuICAgICAgICAgICAgb2JqW2l0ZW1bZmllbGROYW1lXV0ucHVzaChpdGVtKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqW2l0ZW1bZmllbGROYW1lXV0gPSBbaXRlbV1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gb2JqO1xufVxuXG5leHBvcnQgY29uc3Qgc2F5SGkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGEoKTtcbn1cbiJdfQ==
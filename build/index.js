"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDynamicObject = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var getDynamicObject = exports.getDynamicObject = function getDynamicObject(list, key, skipKey) {
  var hasKeyInAtLeastOneItem = false;
  var obj = {};

  // Helper function to get the value of a nested key using dot notation
  var getNestedValue = function getNestedValue(item, keyPath) {
    return keyPath.split('.').reduce(function (acc, curr) {
      return acc && acc[curr] != null ? acc[curr] : undefined;
    }, item);
  };
  list.forEach(function (item) {
    var nestedValue = getNestedValue(item, key); // Get the nested value dynamically

    if (nestedValue !== null && nestedValue !== undefined) {
      hasKeyInAtLeastOneItem = true;
      var objKey = _typeof(nestedValue) === "object" ? JSON.stringify(nestedValue) : nestedValue;
      if (!obj.hasOwnProperty(objKey)) {
        obj[objKey] = [];
      }
      if (skipKey) {
        // Remove the specified key (and its nested structure) from the object
        var filteredItem = JSON.parse(JSON.stringify(item)); // Deep clone the object
        var temp = filteredItem;
        var keys = key.split('.');
        for (var i = 0; i < keys.length - 1; i++) {
          if (temp[keys[i]]) {
            temp = temp[keys[i]];
          }
        }
        delete temp[keys[keys.length - 1]]; // Delete the final key
        obj[objKey].push(filteredItem);
      } else {
        obj[objKey].push(item);
      }
    }
  });
  if (!hasKeyInAtLeastOneItem) {
    throw new Error("Wrong key: ".concat(key));
  }
  return obj;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJnZXREeW5hbWljT2JqZWN0IiwiZXhwb3J0cyIsImxpc3QiLCJrZXkiLCJza2lwS2V5IiwiaGFzS2V5SW5BdExlYXN0T25lSXRlbSIsIm9iaiIsImdldE5lc3RlZFZhbHVlIiwiaXRlbSIsImtleVBhdGgiLCJzcGxpdCIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJ1bmRlZmluZWQiLCJmb3JFYWNoIiwibmVzdGVkVmFsdWUiLCJvYmpLZXkiLCJfdHlwZW9mIiwiSlNPTiIsInN0cmluZ2lmeSIsImhhc093blByb3BlcnR5IiwiZmlsdGVyZWRJdGVtIiwicGFyc2UiLCJ0ZW1wIiwia2V5cyIsImkiLCJsZW5ndGgiLCJwdXNoIiwiRXJyb3IiLCJjb25jYXQiXSwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGdldER5bmFtaWNPYmplY3QgPSAobGlzdDogYW55W10sIGtleTogc3RyaW5nLCBza2lwS2V5PzogYm9vbGVhbikgPT4ge1xuICBsZXQgaGFzS2V5SW5BdExlYXN0T25lSXRlbSA9IGZhbHNlO1xuICBjb25zdCBvYmo6IGFueSA9IHt9O1xuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0byBnZXQgdGhlIHZhbHVlIG9mIGEgbmVzdGVkIGtleSB1c2luZyBkb3Qgbm90YXRpb25cbiAgY29uc3QgZ2V0TmVzdGVkVmFsdWUgPSAoaXRlbTogYW55LCBrZXlQYXRoOiBzdHJpbmcpOiBhbnkgPT4ge1xuICAgIHJldHVybiBrZXlQYXRoLnNwbGl0KCcuJykucmVkdWNlKChhY2MsIGN1cnIpID0+IChhY2MgJiYgYWNjW2N1cnJdICE9IG51bGwgPyBhY2NbY3Vycl0gOiB1bmRlZmluZWQpLCBpdGVtKTtcbiAgfTtcblxuICBsaXN0LmZvckVhY2goKGl0ZW06IHsgW3g6IHN0cmluZ106IGFueSB9KSA9PiB7XG4gICAgY29uc3QgbmVzdGVkVmFsdWUgPSBnZXROZXN0ZWRWYWx1ZShpdGVtLCBrZXkpOyAvLyBHZXQgdGhlIG5lc3RlZCB2YWx1ZSBkeW5hbWljYWxseVxuXG4gICAgaWYgKG5lc3RlZFZhbHVlICE9PSBudWxsICYmIG5lc3RlZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0tleUluQXRMZWFzdE9uZUl0ZW0gPSB0cnVlO1xuICAgICAgY29uc3Qgb2JqS2V5ID0gdHlwZW9mIG5lc3RlZFZhbHVlID09PSBcIm9iamVjdFwiID8gSlNPTi5zdHJpbmdpZnkobmVzdGVkVmFsdWUpIDogbmVzdGVkVmFsdWU7XG5cbiAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KG9iaktleSkpIHtcbiAgICAgICAgb2JqW29iaktleV0gPSBbXTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNraXBLZXkpIHtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBzcGVjaWZpZWQga2V5IChhbmQgaXRzIG5lc3RlZCBzdHJ1Y3R1cmUpIGZyb20gdGhlIG9iamVjdFxuICAgICAgICBjb25zdCBmaWx0ZXJlZEl0ZW0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGl0ZW0pKTsgLy8gRGVlcCBjbG9uZSB0aGUgb2JqZWN0XG4gICAgICAgIGxldCB0ZW1wID0gZmlsdGVyZWRJdGVtO1xuICAgICAgICBjb25zdCBrZXlzID0ga2V5LnNwbGl0KCcuJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICBpZiAodGVtcFtrZXlzW2ldXSkge1xuICAgICAgICAgICAgdGVtcCA9IHRlbXBba2V5c1tpXV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSB0ZW1wW2tleXNba2V5cy5sZW5ndGggLSAxXV07IC8vIERlbGV0ZSB0aGUgZmluYWwga2V5XG4gICAgICAgIG9ialtvYmpLZXldLnB1c2goZmlsdGVyZWRJdGVtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialtvYmpLZXldLnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBpZiAoIWhhc0tleUluQXRMZWFzdE9uZUl0ZW0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFdyb25nIGtleTogJHtrZXl9YCk7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLElBQU1BLGdCQUFnQixHQUFBQyxPQUFBLENBQUFELGdCQUFBLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBSUUsSUFBVyxFQUFFQyxHQUFXLEVBQUVDLE9BQWlCLEVBQUs7RUFDL0UsSUFBSUMsc0JBQXNCLEdBQUcsS0FBSztFQUNsQyxJQUFNQyxHQUFRLEdBQUcsQ0FBQyxDQUFDOztFQUVuQjtFQUNBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBSUMsSUFBUyxFQUFFQyxPQUFlLEVBQVU7SUFDMUQsT0FBT0EsT0FBTyxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNDLE1BQU0sQ0FBQyxVQUFDQyxHQUFHLEVBQUVDLElBQUk7TUFBQSxPQUFNRCxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHRCxHQUFHLENBQUNDLElBQUksQ0FBQyxHQUFHQyxTQUFTO0lBQUEsQ0FBQyxFQUFFTixJQUFJLENBQUM7RUFDM0csQ0FBQztFQUVETixJQUFJLENBQUNhLE9BQU8sQ0FBQyxVQUFDUCxJQUEwQixFQUFLO0lBQzNDLElBQU1RLFdBQVcsR0FBR1QsY0FBYyxDQUFDQyxJQUFJLEVBQUVMLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0lBRS9DLElBQUlhLFdBQVcsS0FBSyxJQUFJLElBQUlBLFdBQVcsS0FBS0YsU0FBUyxFQUFFO01BQ3JEVCxzQkFBc0IsR0FBRyxJQUFJO01BQzdCLElBQU1ZLE1BQU0sR0FBR0MsT0FBQSxDQUFPRixXQUFXLE1BQUssUUFBUSxHQUFHRyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0osV0FBVyxDQUFDLEdBQUdBLFdBQVc7TUFFMUYsSUFBSSxDQUFDVixHQUFHLENBQUNlLGNBQWMsQ0FBQ0osTUFBTSxDQUFDLEVBQUU7UUFDL0JYLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsRUFBRTtNQUNsQjtNQUVBLElBQUliLE9BQU8sRUFBRTtRQUNYO1FBQ0EsSUFBTWtCLFlBQVksR0FBR0gsSUFBSSxDQUFDSSxLQUFLLENBQUNKLElBQUksQ0FBQ0MsU0FBUyxDQUFDWixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSWdCLElBQUksR0FBR0YsWUFBWTtRQUN2QixJQUFNRyxJQUFJLEdBQUd0QixHQUFHLENBQUNPLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDM0IsS0FBSyxJQUFJZ0IsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHRCxJQUFJLENBQUNFLE1BQU0sR0FBRyxDQUFDLEVBQUVELENBQUMsRUFBRSxFQUFFO1VBQ3hDLElBQUlGLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2pCRixJQUFJLEdBQUdBLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxDQUFDLENBQUMsQ0FBQztVQUN0QjtRQUNGO1FBQ0EsT0FBT0YsSUFBSSxDQUFDQyxJQUFJLENBQUNBLElBQUksQ0FBQ0UsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQ3JCLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLENBQUNXLElBQUksQ0FBQ04sWUFBWSxDQUFDO01BQ2hDLENBQUMsTUFBTTtRQUNMaEIsR0FBRyxDQUFDVyxNQUFNLENBQUMsQ0FBQ1csSUFBSSxDQUFDcEIsSUFBSSxDQUFDO01BQ3hCO0lBQ0Y7RUFDRixDQUFDLENBQUM7RUFFRixJQUFJLENBQUNILHNCQUFzQixFQUFFO0lBQzNCLE1BQU0sSUFBSXdCLEtBQUssZUFBQUMsTUFBQSxDQUFlM0IsR0FBRyxDQUFFLENBQUM7RUFDdEM7RUFFQSxPQUFPRyxHQUFHO0FBQ1osQ0FBQyIsImlnbm9yZUxpc3QiOltdfQ==
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDynamicObject = void 0;
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
      var objKey = JSON.stringify(nestedValue); // Stringify for grouping consistency

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJnZXREeW5hbWljT2JqZWN0IiwiZXhwb3J0cyIsImxpc3QiLCJrZXkiLCJza2lwS2V5IiwiaGFzS2V5SW5BdExlYXN0T25lSXRlbSIsIm9iaiIsImdldE5lc3RlZFZhbHVlIiwiaXRlbSIsImtleVBhdGgiLCJzcGxpdCIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJ1bmRlZmluZWQiLCJmb3JFYWNoIiwibmVzdGVkVmFsdWUiLCJvYmpLZXkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGFzT3duUHJvcGVydHkiLCJmaWx0ZXJlZEl0ZW0iLCJwYXJzZSIsInRlbXAiLCJrZXlzIiwiaSIsImxlbmd0aCIsInB1c2giLCJFcnJvciIsImNvbmNhdCJdLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZ2V0RHluYW1pY09iamVjdCA9IChsaXN0OiBhbnlbXSwga2V5OiBzdHJpbmcsIHNraXBLZXk/OiBib29sZWFuKSA9PiB7XG4gIGxldCBoYXNLZXlJbkF0TGVhc3RPbmVJdGVtID0gZmFsc2U7XG4gIGNvbnN0IG9iajogYW55ID0ge307XG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGdldCB0aGUgdmFsdWUgb2YgYSBuZXN0ZWQga2V5IHVzaW5nIGRvdCBub3RhdGlvblxuICBjb25zdCBnZXROZXN0ZWRWYWx1ZSA9IChpdGVtOiBhbnksIGtleVBhdGg6IHN0cmluZyk6IGFueSA9PiB7XG4gICAgcmV0dXJuIGtleVBhdGguc3BsaXQoJy4nKS5yZWR1Y2UoKGFjYywgY3VycikgPT4gKGFjYyAmJiBhY2NbY3Vycl0gIT0gbnVsbCA/IGFjY1tjdXJyXSA6IHVuZGVmaW5lZCksIGl0ZW0pO1xuICB9O1xuXG4gIGxpc3QuZm9yRWFjaCgoaXRlbTogeyBbeDogc3RyaW5nXTogYW55IH0pID0+IHtcbiAgICBjb25zdCBuZXN0ZWRWYWx1ZSA9IGdldE5lc3RlZFZhbHVlKGl0ZW0sIGtleSk7IC8vIEdldCB0aGUgbmVzdGVkIHZhbHVlIGR5bmFtaWNhbGx5XG5cbiAgICBpZiAobmVzdGVkVmFsdWUgIT09IG51bGwgJiYgbmVzdGVkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzS2V5SW5BdExlYXN0T25lSXRlbSA9IHRydWU7XG4gICAgICBjb25zdCBvYmpLZXkgPSBKU09OLnN0cmluZ2lmeShuZXN0ZWRWYWx1ZSk7IC8vIFN0cmluZ2lmeSBmb3IgZ3JvdXBpbmcgY29uc2lzdGVuY3lcblxuICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkob2JqS2V5KSkge1xuICAgICAgICBvYmpbb2JqS2V5XSA9IFtdO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2tpcEtleSkge1xuICAgICAgICAvLyBSZW1vdmUgdGhlIHNwZWNpZmllZCBrZXkgKGFuZCBpdHMgbmVzdGVkIHN0cnVjdHVyZSkgZnJvbSB0aGUgb2JqZWN0XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkSXRlbSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaXRlbSkpOyAvLyBEZWVwIGNsb25lIHRoZSBvYmplY3RcbiAgICAgICAgbGV0IHRlbXAgPSBmaWx0ZXJlZEl0ZW07XG4gICAgICAgIGNvbnN0IGtleXMgPSBrZXkuc3BsaXQoJy4nKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgIGlmICh0ZW1wW2tleXNbaV1dKSB7XG4gICAgICAgICAgICB0ZW1wID0gdGVtcFtrZXlzW2ldXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHRlbXBba2V5c1trZXlzLmxlbmd0aCAtIDFdXTsgLy8gRGVsZXRlIHRoZSBmaW5hbCBrZXlcbiAgICAgICAgb2JqW29iaktleV0ucHVzaChmaWx0ZXJlZEl0ZW0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqW29iaktleV0ucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGlmICghaGFzS2V5SW5BdExlYXN0T25lSXRlbSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgV3Jvbmcga2V5OiAke2tleX1gKTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxJQUFNQSxnQkFBZ0IsR0FBQUMsT0FBQSxDQUFBRCxnQkFBQSxHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUlFLElBQVcsRUFBRUMsR0FBVyxFQUFFQyxPQUFpQixFQUFLO0VBQy9FLElBQUlDLHNCQUFzQixHQUFHLEtBQUs7RUFDbEMsSUFBTUMsR0FBUSxHQUFHLENBQUMsQ0FBQzs7RUFFbkI7RUFDQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUlDLElBQVMsRUFBRUMsT0FBZSxFQUFVO0lBQzFELE9BQU9BLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNLENBQUMsVUFBQ0MsR0FBRyxFQUFFQyxJQUFJO01BQUEsT0FBTUQsR0FBRyxJQUFJQSxHQUFHLENBQUNDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBR0QsR0FBRyxDQUFDQyxJQUFJLENBQUMsR0FBR0MsU0FBUztJQUFBLENBQUMsRUFBRU4sSUFBSSxDQUFDO0VBQzNHLENBQUM7RUFFRE4sSUFBSSxDQUFDYSxPQUFPLENBQUMsVUFBQ1AsSUFBMEIsRUFBSztJQUMzQyxJQUFNUSxXQUFXLEdBQUdULGNBQWMsQ0FBQ0MsSUFBSSxFQUFFTCxHQUFHLENBQUMsQ0FBQyxDQUFDOztJQUUvQyxJQUFJYSxXQUFXLEtBQUssSUFBSSxJQUFJQSxXQUFXLEtBQUtGLFNBQVMsRUFBRTtNQUNyRFQsc0JBQXNCLEdBQUcsSUFBSTtNQUM3QixJQUFNWSxNQUFNLEdBQUdDLElBQUksQ0FBQ0MsU0FBUyxDQUFDSCxXQUFXLENBQUMsQ0FBQyxDQUFDOztNQUU1QyxJQUFJLENBQUNWLEdBQUcsQ0FBQ2MsY0FBYyxDQUFDSCxNQUFNLENBQUMsRUFBRTtRQUMvQlgsR0FBRyxDQUFDVyxNQUFNLENBQUMsR0FBRyxFQUFFO01BQ2xCO01BRUEsSUFBSWIsT0FBTyxFQUFFO1FBQ1g7UUFDQSxJQUFNaUIsWUFBWSxHQUFHSCxJQUFJLENBQUNJLEtBQUssQ0FBQ0osSUFBSSxDQUFDQyxTQUFTLENBQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJZSxJQUFJLEdBQUdGLFlBQVk7UUFDdkIsSUFBTUcsSUFBSSxHQUFHckIsR0FBRyxDQUFDTyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzNCLEtBQUssSUFBSWUsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHRCxJQUFJLENBQUNFLE1BQU0sR0FBRyxDQUFDLEVBQUVELENBQUMsRUFBRSxFQUFFO1VBQ3hDLElBQUlGLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2pCRixJQUFJLEdBQUdBLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxDQUFDLENBQUMsQ0FBQztVQUN0QjtRQUNGO1FBQ0EsT0FBT0YsSUFBSSxDQUFDQyxJQUFJLENBQUNBLElBQUksQ0FBQ0UsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQ3BCLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLENBQUNVLElBQUksQ0FBQ04sWUFBWSxDQUFDO01BQ2hDLENBQUMsTUFBTTtRQUNMZixHQUFHLENBQUNXLE1BQU0sQ0FBQyxDQUFDVSxJQUFJLENBQUNuQixJQUFJLENBQUM7TUFDeEI7SUFDRjtFQUNGLENBQUMsQ0FBQztFQUVGLElBQUksQ0FBQ0gsc0JBQXNCLEVBQUU7SUFDM0IsTUFBTSxJQUFJdUIsS0FBSyxlQUFBQyxNQUFBLENBQWUxQixHQUFHLENBQUUsQ0FBQztFQUN0QztFQUVBLE9BQU9HLEdBQUc7QUFDWixDQUFDIiwiaWdub3JlTGlzdCI6W119
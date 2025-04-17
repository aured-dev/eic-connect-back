export const camelToSnake = (obj) => {
    const result = {};
    for (let key in obj) {
      const snakeKey = key.replace(/([A-Z])/g, "_$1").toLowerCase();
      result[snakeKey] = obj[key];
    }
    return result;
  };
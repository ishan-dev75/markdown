export enum LocalStorageKeys {
  isDarkMode = "isDarkMode",
}

class LocalStorageService {
  static setItem(key: LocalStorageKeys, value: string) {
    value = JSON.stringify(value);
    localStorage.setItem(key, value);
  }

  static getItem(key: LocalStorageKeys) {
    const value = localStorage.getItem(key) || "";
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }

  static removeItem(key: LocalStorageKeys) {
    localStorage.removeItem(key);
  }

  static clear() {
    localStorage.clear();
  }
}

export default LocalStorageService;

function set(key, value) {
  localforage.config({
    driver: localforage.INDEXEDDB,
    name: "Xenon",
    version: 1.0,
    storeName: "xenon_config",
    description: "Xenon Config for things reliant on IndexedDB"
  });
  localforage.setItem(key, value);
}
async function get(key) {
  localforage.config({
    driver: localforage.INDEXEDDB,
    name: "Xenon",
    version: 1.0,
    storeName: "xenon_config",
    description: "Xenon Config for things reliant on IndexedDB"
  });
  return await localforage.getItem(key);
}

export { set, get };

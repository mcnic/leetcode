class MyHashSet {
  set: number[] = [];

  constructor() {}

  stringToHash(string) {
    let hash = 0;

    if (string.length == 0) return hash;

    for (let i = 0; i < string.length; i++) {
      const char = string.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }

    return hash;
  }

  add(key: number): void {
    const hash = this.stringToHash(String(key));
    // console.log('add', key, hash)
    this.set[hash] = 1;
  }

  remove(key: number): void {
    const hash = this.stringToHash(String(key));
    delete this.set[hash];
  }

  contains(key: number): boolean {
    const hash = this.stringToHash(String(key));
    return this.set[hash] != undefined;
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

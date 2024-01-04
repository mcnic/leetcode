function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let i = 0;
  while (n > 0 && i < flowerbed.length) {
    let allow = !flowerbed[i];
    if (allow && i < flowerbed.length - 1) {
      allow &&= !flowerbed[i + 1];
    }
    if (allow && i > 0) {
      allow &&= !flowerbed[i - 1];
    }
    if (allow) {
      flowerbed[i] = 1;
      i++;
      n--;
    }
    i++;
  }

  return n === 0;
}

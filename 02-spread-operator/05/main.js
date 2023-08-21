// จงเขียนฟังก์ชัน removeRandom โดยรับพารามิเตอร์มาเป็น Array และ return ค่าเป็น Array ที่มี element ถูกลบออกไปหนึ่งตัวโดยตำแหน่งที่ลบให้เกิดจากการสุ่ม

function removeRandom(...arr) {
  const randomNumber = Math.floor(Math.random() * arr.length);
  const newArr = [...arr];
  newArr.splice(randomNumber, 1);
  return newArr;
}

console.log(removeRandom(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

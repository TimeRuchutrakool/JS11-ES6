// จงเขียนฟังก์ชันหาค่าผลคูณของตัวเลข โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด

function multiply(...numbers) {
  return numbers.reduce((acc, cur) => acc * cur, 1);
}

console.log(multiply(1, 2, 3, 4, 5));

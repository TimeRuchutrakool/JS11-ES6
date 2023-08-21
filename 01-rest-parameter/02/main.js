// จงเขียนฟังก์ชัน filterOutOdds โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด และให้ return ค่าเป็น array ของเลขที่เป็นเลขคู่

function filterOutOdds(...numbers) {
  return numbers.filter((v) => v % 2 === 0);
}

console.log(filterOutOdds(1, 2, 3, 4, 5));

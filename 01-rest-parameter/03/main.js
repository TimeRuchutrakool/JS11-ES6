// จงเขียนฟังก์ชัน mergeObjects โดยพารามิเตอร์ของฟังก์ชันสามารถรับ Object ได้ไม่จำกัด และให้ return ค่าเป็น Object ที่เกิดจาก Object ในพารามิเตอร์มา merge กัน (ในกรณีที่ Object ในพารามิเตอร์มี key ซ้ำกันให้ยึดค่าพารามิเตอร์ตัวที่มาก่อนเป็นหลัก)

function mergeObjects(...objects) {
  return objects.reduce((acc, cur) => {
    return { ...cur, ...acc };
  }, {});
}

console.log(
  mergeObjects(
    { name: "Taipei", age: 25 },
    { age: 23, name: "Fluke" },
    { name: "A", age: 18 }
  )
);

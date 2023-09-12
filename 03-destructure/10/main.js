// - จงเขียนฟังก์ชัน topSalaries(salaries) เพื่อ return ชื่อคนที่มี salary สูงสุด
// - ถ้า salaries เป็น empty object ให้ return null
// - ถ้ามีคนที่ได้ salary มากสุดให้ return ชื่อคนใดคนหนึ่ง

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalaries(salaries) {
  if (Object.keys(salaries).length === 0) return null;
  const newObj = Object.entries(salaries);
  const top = newObj.reduce((acc, cur) => {
    if (acc[1] > cur[1]) return acc;
    else return cur;
  }, []);
  return top[0];
}

console.log(topSalaries(salaries));

export const formatDate = (date) => {
  const y = date.getFullYear();
  const m = date.getMonth();
  const d = date.getDate();
  const h = date.getHours();
  const mm = date.getMinutes();
  const s = date.getSeconds();

  return `${y}-${with0(m)}-${with0(d)} ${with0(h)}:${with0(mm)}:${with0(s)}`
}

const with0 = (num) => {
  return num < 10 ? `0${num}` : `${num}`
}

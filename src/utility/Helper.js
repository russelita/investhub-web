export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export function createAction(type, payload) {
  return {
    type,
    payload,
  };
}
export function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
}
export function validatePhoneNumber(noTlpn) {
  // const pattern = /^[0-9]{9,15}$/;
  const pattern = /^08[0-9]{8,11}$/;
  return pattern.test(noTlpn);
  // return true;
}
export function normalisasiNomorHP(phone) {
  phone = String(phone).trim();
  if (phone.startsWith("+62")) {
    phone = "0" + phone.slice(3);
  } else if (phone.startsWith("62")) {
    phone = "0" + phone.slice(2);
  }
  return phone.replace(/[- .]/g, "");
}

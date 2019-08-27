export const setCookie = (cookieName, cvalue, exdays) => { 
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  const expires = `expires=${ d.toUTCString() }`;
  document.cookie = `${ cookieName }=${ cvalue };${ expires };path=/`;
}; 

export const getCookie = cookieName => { 
  const name = `${ cookieName }=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};
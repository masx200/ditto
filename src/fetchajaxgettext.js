const fetchajaxgettext = async function(u) {
  return await fetch(u).then(r => {
    if (r.ok) {
      return r.text();
    } else {
      throw new Error("fetch failed" + u);
    }
  });
};
export default fetchajaxgettext;

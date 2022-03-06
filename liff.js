window.addEventListener('load', async () => {
  liff
  .init({
    liffId: LIFF_ID, // Use own liffId
  })
  .then(() => {
    const idToken = liff.getIDToken();
    console.log(idToken);
  });

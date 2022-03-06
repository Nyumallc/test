window.addEventListener('load', async () => {
    const liffClient = await setLiffClient()
  
    liffClient(() => { if(!liff.isLoggedIn())liff.login(); })
    getProfile(liffClient)
  });
  
  const setLiffClient = () => {
    return (func) => { liff.init({ liffId: LIFF_ID }).then(func) }
  };

  liff
  .init({
    liffId: LIFF_ID, // Use own liffId
  })
  .then(() => {
    const idToken = liff.getIDToken();
    console.log(idToken);
  });

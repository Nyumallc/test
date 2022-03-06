window.addEventListener('load', async () => {
    const liffClient = await setLiffClient()
  
    liffClient(() => { if(!liff.isLoggedIn())liff.login(); })
    getProfile(liffClient)
  });
  
  const setLiffClient = () => {
    return (func) => { liff.init({ liffId: LIFF_ID }).then(func) }
  }
  
  liff
  .init({
    liffId: LIFF_ID, // Use own liffId
  })
  .then(() => {
    const idToken = liff.getIDToken();
    console.log(idToken); // print raw idToken object
  });


  const getProfile = async (liffClient) => {
    liffClient(() => {
      liff.getProfile().then((profile) => {
        // 02. プロフィールにユーザー名を表示してみよう
        document.getElementById('user-name').innerText = profile.displayName
        document.getElementById('icon').src = profile.pictureUrl
        document.getElementById('user_id').innerText = profile.userId
        let userid = profile.userId
        let displayname =profile.displayName
      })
    })
  };

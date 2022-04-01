const url = new URL(window.location.href);
let params = url.searchParams;
let p_title=params.get('p_title');


btn1 = document.getElementById("submit-btn");
btn1.setAttribute('onclick', 'pushButton1()');

function pushButton1() {
    let name = document.getElementById("user-name");
    let displayname = name.innerHTML;
    let user_id = document.getElementById("user_id");
    let userid = user_id.innerHTML;
    let p_title=params.get('p_title');
    // let key = document.getElementById("keyword");
    // let key = key.value;

    let resurl=(`https://script.google.com/macros/s/AKfycbzPDS6SjcPf_Ud5a8FVeun7V2drrkrbV41YX-02KLr7vQKgV9eqZftrSHk1_Uh9sTQ/exec?&userid=${userid}&displayname=${displayname}&p_title=${p_title}`)
    const res = fetch(resurl);
    
  };

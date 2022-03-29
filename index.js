var params = (new URL(document.location)).searchParams;
var p_titie = params.get('p_titie');


btn1 = document.getElementById();
btn1.setAttribute('onclick', 'pushButton1(this.id)');

function pushButton1() {
    let name = document.getElementById("user-name");
    let displayname = name.innerHTML;
    let user_id = document.getElementById("user_id");
    let userid = user_id.innerHTML;
    // let key = document.getElementById("keyword");
    // let key = key.value;

    let resurl=(`https://script.google.com/macros/s/AKfycbzPDS6SjcPf_Ud5a8FVeun7V2drrkrbV41YX-02KLr7vQKgV9eqZftrSHk1_Uh9sTQ/exec?&userid=${userid}&displayname=${displayname}&p_title=${p_title}`)
    location.href=resurl
    
 

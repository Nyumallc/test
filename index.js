var params = (new URL(document.location)).searchParams;
var p_titie = params.get('p_titie');


btn1 = document.getElementById("submit-btn");
btn1.setAttribute('onclick', 'pushButton1(this.id)');

function pushButton1(clicked_id) {
    let name = document.getElementById("user-name");
    let displayname = name.innerHTML;
    let user_id = document.getElementById("user_id");
    let userid = user_id.innerHTML;
    // let key = document.getElementById("keyword");
    // let key = key.value;

    let resurl=(`https://share.streamlit.io/nyumallc/rensen/main/netpicup_streamlit.py?&userid=${userid}&displayname=${displayname}&p_title=${p_title}`)
    location.href=resurl
    
    // liff.sendMessages([{
    //     'type': 'text',
    //     'text': p_title + "の注文をリクエストしました。"
    //   }]).then(function() {
    //     // document.getElementById('log').value += 'sendMessagesText completed\n';
    //   }).catch(function(error) {
    //     // document.getElementById('log').value += 'sendMessagesText()=' + error + '\n';
    //   });
      
    };

$(function(){
 
  function buildHTML(message){
    if ( message.image ) {
      var html =
        `<div class="main-chat__messages__first" data-message-id=${message.id}>
          <div class="upper-message">
            <div class="upper-message__name">
              ${message.user_name}
            </div> 
            <div class="upper-message__data">
              ${message.created_at}
            </div>
          </div>
          <div class="lower-message">
            <div class="lower-message__text">
              ${message.content}
            </div>
            <img src=${message.image} >
          </div>
        </div>`
  
      return html;
    } else {
      var html =
        `<div class="main-chat__messages__first" data-message-id=${message.id}>
          <div class="upper-message">
            <div class="upper-message__name">
              ${message.user_name}
            </div> 
            <div class="upper-message__data">
              ${message.created_at}
            </div>
          </div>
          <div class="lower-message">
            <div class="lower-message__text">
              <p class="lower-messaget__image">
                ${message.content}
              </p>
            </div>
          </div>
        </div>`
      return html;
    };
  }
  
  $('#new_message').on('submit', function(e){
  e.preventDefault();
  var formData = new FormData(this);
  var url = $(this).attr('action');
  $.ajax({
    url: url,
    type: "POST",
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false
  })
    .done(function(data){
      var html = buildHTML(data);
      $('.main-chat__messages').append(html);
      $('.main-chat__messages').animate({ scrollTop: $('.main-chat__messages')[0].scrollHeight});
      $('form')[0].reset();
    })
    .always(function(data){
      $('.main-chat__messages__first').prop('disabled', false);//ここで解除している
    })
    .fail(function(){
      alert('エラーが発生したためメッセージは送信できませんでした。');
    });
  });

  var reloadMessages = function() {
    //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
    var last_message_id = $('.main-chat__messages__first:last').data("message-id");
    console.log(last_message_id)
    $.ajax({
      //ルーティングで設定した通り/groups/id番号/api/messagesとなるよう文字列を書く
      url: "api/messages",
      //ルーティングで設定した通りhttpメソッドをgetに指定
      type: 'get',
      dataType: 'json',
      //dataオプションでリクエストに値を含める
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        //追加するHTMLの入れ物を作る
        var insertHTML = '';
        //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        //メッセージが入ったHTMLに、入れ物ごと追加
        $('.main-chat__messages').append(insertHTML);
        $('.main-chat__messages').animate({ scrollTop: $('.main-chat__messages')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  //$(function(){});の閉じタグの直上(処理の最後)に以下のように追記
  if (document.location.href.match(/\/groups\/\d+\/messages/)) {
    setInterval(reloadMessages, 7000);
  }
});

// $(function(){ 
//      function buildHTML(message){
//       if ( message.image ) {
//         var html =
//          `<div class="main-chat__messages">
//             <div class="main-chat__messages__name">
//               ${message.user_name}
//               <div class="main-chat__messages__data">
//                 ${message.created_at}
//               </div>
//             </div>
//             <div class="main-chat__messages__text">
//               <p class="main-chat__messages__image">
//                 ${message.content}
//               </p>
//             </div>
//             <img src=${message.image} >
//           </div>`
//         return html;
//       } else {
//         var html =
//         `<div class="main-chat__messages">
//           <div class="main-chat__messages__name">
//             ${message.user_name}
//             <div class="main-chat__messages__first__data">
//               ${message.created_at}
//             </div>
//           </div>
//           <div class="main-chat__messages__text">
//             <p class="main-chat__messages__image">
//               ${message.content}
//             </p>
//           </div>
//         </div>`
//         return html;
//       };
//     }
// $('#new_message').on('submit', function(e){
//     e.preventDefault();
//     var formData = new FormData(this);
//     var url = $(this).attr('action')
//     $.ajax({
//       url: url,
//       type: "POST",
//       data: formData,
//       dataType: 'json',
//       processData: false,
//       contentType: false
//     })
//      .done(function(data){
//        console.log(data)
//        var html = buildHTML(data);
//        $('.main-chat').append(html);      
//        $('form')[0].reset();
//       //  $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      
//      })
// })
// });
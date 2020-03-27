$(function(){
function buildHTML(message){
  if ( message.image ) {
    var html =
    `<div class="main-chat__messages__name">
          ${message.user_name}
          <div class="main-chat__messages__data">
            ${message.created_at}
          </div>
        </div>
        <div class="main-chat__messages__text">
          <p class="main-chat__messages__image">
            ${message.content}
          </p>
        </div>
        <img src=${message.image} >`
    return html;
  } else {
    var html =
    `<div class="main-chat__messages__name">
        ${message.user_name}
        <div class="main-chat__messages__first__data">
          ${message.created_at}
        </div>
      </div>
      <div class="main-chat__messages__text">
        <p class="main-chat__messages__image">
          ${message.content}
        </p>
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
})
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
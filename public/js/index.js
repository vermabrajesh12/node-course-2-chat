var socket=io();
socket.on('connect',function(){
  console.log('connected to server');
  // socket.emit('createEmail',{
  //   to:'fgcfxfx@gmail.com',
  //   text:'Hey this is Brajesh'
  // });
// 
// socket.emit('createMessage',{
//   from:'Brajesh',
//   text:'Yup that works for me'
// });


});
socket.on('disconnect',function(){
  console.log('disconnected from server');
});
// socket.on('newEmail',function(email){
//   console.log('New Email',email);
// });
socket.on('newMessage',function(message){
  console.log('newMessage',message);
});

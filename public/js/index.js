var socket = io();

socket.on('connect', function () {
    console.log('Connected to server.');

    // socket.emit('createEmail', {
    //     to: 'jen@example.com',
    //     text: 'Hey, This is Sachin'
    // });

    socket.emit('createMessage', {
        from: 'Gourang@example.com',
        text: 'Hey!, What\'s up?' 
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server.');
});

socket.on('newMessage', function (message){
    console.log('newMessage', message);
});
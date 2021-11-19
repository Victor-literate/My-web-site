window.onload = function() {
    video = document.getElementById( 'video' );
    videoStreamUrl = false;
    //navigator.getUserMedia (Для каждого браузера определяем правильный метод)
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    //window.URL.createObjectURL (Для каждого браузера определяем правильный метод)
    window.URL.createObjectURL = window.URL.createObjectURL || window.URL.webkitCreateObjectURL || window.URL.mozCreateObjectURL || window.URL.msCreateObjectURL;
    //Запрашиваем разрешение на доступ к видео-потоку
    navigator.getUserMedia( {
        video : {
            width : { ideal : window.width },
            height : { ideal : window.height },
            facingMode: "user"
        }
    }, function( stream ) {
        //Разрешение от пользователя получено
        
        //Получаем url поточного видео
        videoStreamUrl = video.srcObject=stream;
        
        
        // устанавливаем как источник для video
        video.src = videoStreamUrl;
    }, function() {
        console.log( 'Что-то не так с видео-потоком или пользователь запретил его использовать!' );
    } );
};
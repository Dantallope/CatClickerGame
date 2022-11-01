const playMusic = document.getElementById('musicbtn');
const music = document.getElementById('music');

playMusic.addEventListener('click',function(){
    console.log('hi')
    music.play();
})
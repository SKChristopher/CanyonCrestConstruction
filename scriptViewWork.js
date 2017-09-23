let returnHome = document.createElement('a');
returnHome.id = 'returnHome';
returnHome.href = 'index.html';
document.body.appendChild(returnHome);
let homeIcon2 = document.createElement('i');
homeIcon2.id = 'homeIcon2';
homeIcon2.className = 'fa fa-home';
document.getElementById('returnHome').appendChild(homeIcon2);

let moreWorkPhotos = ['img/CCCphotos/1.jpg', 'img/CCCphotos/2.jpg', 'img/CCCphotos/3.jpg', 'img/CCCphotos/4.jpg', 'img/CCCphotos/5.jpg', 'img/CCCphotos/6.jpg', 'img/CCCphotos/7.jpg', 'img/CCCphotos/8.jpg', 'img/CCCphotos/9.jpg', 'img/CCCphotos/10.jpg', 'img/CCCphotos/11.jpg', 'img/CCCphotos/12.jpg', 'img/CCCphotos/13.jpg', 'img/CCCphotos/14.jpg', 'img/CCCphotos/15.jpg', 'img/CCCphotos/16.jpg', 'img/CCCphotos/17.jpg', 'img/CCCphotos/18.jpg', 'img/CCCphotos/19.jpg', 'img/CCCphotos/20.jpg'];
let workPhotoPic = [];

for (let i = 0; i < moreWorkPhotos.length; i += 1) {
    workPhotoPic[i] = document.createElement('img');
    workPhotoPic[i].className = 'workPhotoPic';
    workPhotoPic[i].id = 'workPhotoPic' + i;
    workPhotoPic[i].src = moreWorkPhotos[i];
    document.body.appendChild(workPhotoPic[i]);
}
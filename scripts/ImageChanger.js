let profileImg = document.getElementById('profile');

function setRandomImage() {
  let srcPath = './images/profile'
  let imageId = Math.ceil(Math.random() * 3);
  srcPath += imageId + '.jpg';
  profileImg.src = srcPath;
}

setRandomImage();
setInterval(setRandomImage, 5000);
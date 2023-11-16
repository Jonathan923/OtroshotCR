const fullImgBox =document.getElementById("fulImgBox");
fullImg=document.getElementById("fulImg");
function openFulImg(Reference){
  fullImgBox.style.display="flex";
  fullImg.src=Reference;
}
function closeImg(){
  fullImgBox.style.display="none";
}

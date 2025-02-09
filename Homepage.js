const imgcontainer=document.querySelector('.img_container');
const dotscontainer=document.querySelector('.nav_dots');
const bannerinfo=document.querySelector('#banner-info');

document.getElementById('dot1').addEventListener('click',()=>{
   imgcontainer.className='img_container first_active'
   dotscontainer.className='nav_dots first_current'
   bannerinfo.textContent='banner1';
});

document.getElementById('dot2').addEventListener('click',()=>{
    imgcontainer.className='img_container second_active'
    dotscontainer.className='nav_dots second_current'
    bannerinfo.textContent='banner2';
 });

 document.getElementById('dot3').addEventListener('click',()=>{
    imgcontainer.className='img_container third_active'
    dotscontainer.className='nav_dots third_current'
    bannerinfo.textContent='banner3';
 });
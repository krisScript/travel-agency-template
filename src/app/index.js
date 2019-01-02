'use strict';
import mobileNav from './mobileNav';
import fixNav from './fixNav';
import carousel from './carousel';
import slide from './slide';
import switchContent from './switchContent';
mobileNav()
fixNav();
slide();
if (document.querySelector('#testemonials-carousel')) {
  carousel('testemonials-carousel');
}

const btn1 = {
  id:'content-btn-1',
  title:'Who we are',
  content:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
  consectetur magnam exercitationem est laudantium reprehenderit
  nesciunt molestias delectus assumenda laborum accusantium veritatis,
  odit nisi, iusto, perferendis facere dicta. Quibusdam, sapiente?Lorem,
  ipsum dolor sit amet consectetur adipisicing elit. Eaque, quisquam
  perferendis nulla dolorem totam quae.`
}
const btn2 = {
  id:'content-btn-2',
  title:'What we do',
  content:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
  consectetur magnam exercitationem est laudantium reprehenderit
  nesciunt molestias delectus assumenda laborum accusantium veritatis,
  odit nisi, iusto, perferendis facere dicta. .`
}
const btn3 = {
  id:'content-btn-3',
  title:'Our customers',
  content:` Quibusdam, sapiente?Lorem,
  ipsum dolor sit amet consectetur adipisicing elit. Eaque, quisquam
  perferendis nulla dolorem totam quae.`
}
const switchData = {
  title:'about-title',
  content:'about-content',
  btns:[btn1,btn2,btn3]
}
switchContent(switchData)
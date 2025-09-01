"use strict";
const firstGrid = document.getElementById("firstGrid");
const secondGrid = document.getElementById("secondGrid");
const thirdGrid = document.getElementById("thirdGrid");

const firstServices = [
  { imgSrc: "./images/raw1-1.svg", serviceName: "الترافع" },
  {
    imgSrc: "./images/raw1-2.svg",
    serviceName: "الاستشارات القانونية والشرعية",
  },
  { imgSrc: "./images/raw1-3.svg", serviceName: "صياغة العقود والاتفاقيات" },
  { imgSrc: "./images/row1-4.svg", serviceName: "القضايا التجارية والمدنية" },
  { imgSrc: "./images/row2-1.svg", serviceName: "القضايا العمالية" },
  { imgSrc: "./images/row2-2.svg", serviceName: "قضايا الأحوال الشخصية" },
  { imgSrc: "./images/row2-3.svg", serviceName: "الاستثمار الأجنبي" },
  { imgSrc: "./images/row2-4.svg", serviceName: "القضايا العقارية" },
  { imgSrc: "./images/row3-1.svg", serviceName: "المنازعات الزكوية والضريبية" },
  { imgSrc: "./images/row3-2.svg", serviceName: "التركات والأوقاف والوصايا" },
  {
    imgSrc: "./images/row3-3.svg",
    serviceName: "المنازعات المصرفية والتأمينية",
  },
  { imgSrc: "./images/row3-4.svg", serviceName: "تنفيذ الاحكام " },
];

const secondServices = [
  { imgSrc: "./images/1-1.png", serviceName: "توثيق وكالات الأفراد" },
  {
    imgSrc: "./images/raw1-2.svg",
    serviceName: "توثيق فسخ وكالة الأفراد",
  },
  { imgSrc: "./images/1-3.png", serviceName: "توثيق وكالات الشركات" },
  { imgSrc: "./images/1-4.png", serviceName: "توثيق فسخ وكالات الشركات" },
  { imgSrc: "./images/2-1.png", serviceName: "توثيق عقود الشركات" },
  { imgSrc: "./images/2-2.png", serviceName: "توثيق اللإفراغات العقارية" },
  { imgSrc: "./images/2-3.png", serviceName: "توثيق الرهن" },
  { imgSrc: "./images/2-4.png", serviceName: "توثيق فك الرهن" },
  { imgSrc: "./images/3-1.png", serviceName: "توثيق إفراغ ورهن" },
  { imgSrc: "./images/3-2.png", serviceName: "توثيق تصحيح الصكوك" },
  {
    imgSrc: "./images/3-3.png",
    serviceName: "توثيق الإقرار المالي",
  },
  {
    imgSrc: "./images/3-4.png",
    serviceName: "توثيق تسديد الإقرارات المالية",
  },
];
const thirdServices = [
  { imgSrc: "./images/1-1.svg", serviceName: "القضايا التجارية" },
  {
    imgSrc: "./images/raw1-2.svg",
    serviceName: "قضايا المنازعات العمالية",
  },
  { imgSrc: "./images/1-3.svg", serviceName: "النزاعات المتعلقة بالعقارات" },
  { imgSrc: "./images/1-4.svg", serviceName: "قضايا العقود الإدارة" },
  { imgSrc: "./images/2-1.svg", serviceName: "النزاعات المتعلقة بالرياضة" },
  { imgSrc: "./images/2-2.svg", serviceName: "القضايا المدنية" },
];

// Add First grid services
let firstCartona = ``;
for (let i = 0; i < firstServices.length; i++) {
  firstCartona += `<div class="service flex-col justify-center align-items">
              <div class="service-icon">
                <img src="${firstServices[i].imgSrc}" alt="justice icon" />
              </div>
              <h3>${firstServices[i].serviceName}</h3>
            </div>`;
}
firstGrid.innerHTML = firstCartona;

// Add Second grid services
let secondCartona = ``;
for (let i = 0; i < secondServices.length; i++) {
  secondCartona += `<div class="service flex-col justify-center align-items">
              <div class="service-icon">
                <img src="${secondServices[i].imgSrc}" alt="justice icon" />
              </div>
              <h3>${secondServices[i].serviceName}</h3>
            </div>`;
}
secondGrid.innerHTML = secondCartona;

// Add Second grid services
let thirdCartona = ``;
for (let i = 0; i < thirdServices.length; i++) {
  thirdCartona += `<div class="service flex-col justify-center align-items">
              <div class="service-icon">
                <img src="${thirdServices[i].imgSrc}" alt="law service icon" />
              </div>
              <h3>${thirdServices[i].serviceName}</h3>
            </div>`;
}
thirdGrid.innerHTML = thirdCartona;

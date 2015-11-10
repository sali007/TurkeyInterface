var adv4 = ['index_page_4', [
['script', 'kt.js', [0], './adv', [['01.08.2010', '31.12.2012']]]
]];

var oHolidays = {
    "25.1"  : { name: "День студентов (Татьянин день)", img: "" },
    "14.2"  : { name: "День святого Валентина (День всех влюбленных)", img: "" },
    "6.3"	: { name: "Международный женский день", img: "./img/ui_item/holidays/8_3.png" },
    "7.3"	: { name: "Международный женский день", img: "./img/ui_item/holidays/8_3.png" },
    "8.3"	: { name: "Международный женский день", img: "./img/ui_item/holidays/8_3.png" },
	"22.3"  : { name: "Государственный праздник — Наурыз мейрамы", img: "" },	
    "1.4"   : { name: "День смеха / День дурака", img: "" },
    "1.5"   : { name: "Государственный праздник — Праздник единства народа Казахстана", img: "" },
    "7.5"   : { name: "День радио", img: "" },
    "9.5"   : { name: "День Победы", img: "./img/ui_item/holidays/9_5.png" },
	"10.5"  : { name: "День Победы", img: "./img/ui_item/holidays/9_5.png" },
	"31.5"  : { name: "День памяти жертв политических репрессий", img: "" },
    "1.6"   : { name: "Всемирный день защиты детей", img: "" },
    "4.6"   : { name: "День государственных символов Республики Казахстан", img: "" },
    "13.6"  : { name: "День полиции", img: "./img/ui_item/holidays/10_11.png" },
    "20.6"  : { name: "День медицинского работника", img: "" },
    "27.6"  : { name: "День печати, телевидения и радио", img: "" },
    "2.7"   : { name: "День дипломатического работника", img: "" },
    "6.7"   : { name: "День Столицы", img: "" },
    "18.7"  : { name: "День металлурга", img: "" },
    "1.8"  	: { name: "День работников транспорта и связи", img: "" },
    "8.8"  	: { name: "День строителя", img: "./img/ui_item/holidays/13_8.png" },
    "15.8"  : { name: "День спорта", img: "" },
	"29.8"  : { name: "День спорта", img: "" },
    "30.8"  : { name: "День Конституции Республики Казахстан", img: "" },
	"1.9"   : { name: "День знаний", img: "./img/ui_item/holidays/1_9.png" },
    "5.9"  	: { name: "День работников нефтегазового комплекса", img: "" },
	"19.9"  : { name: "День языков народов Республики Казахстан", img: "" },
	"28.9"  : { name: "День работников атомной отрасли", img: "" },
    "3.10"  : { name: "День учителя", img: "./img/ui_item/holidays/5_10.png" },
    "30.10" : { name: "День Фидонет Казахстана", img: "" },
    "15.11" : { name: "День национальной валюты (тенге)", img: "" },
    "21.11" : { name: "День работников сельского хозяйства", img: "" },
	"16.11" : { name: "Курбан айт", img: "./img/ui_item/holidays/27_11.png" },
	"17.11" : { name: "Курбан айт", img: "./img/ui_item/holidays/27_11.png" },
    "18.11" : { name: "Курбан айт", img: "./img/ui_item/holidays/27_11.png" },
    "16.12" : { name: "День незовисимости республики Казахстан", img: "./img/ui_item/holidays/16_12.png" },
	"7.1" : { name: "C рождеством!", img: "./img/ui_item/holidays/07.01.png" }
    
}

function getBtmContent(sContentPlace) {
    var oHoliday = null;
    var oDate = new Date();
    var sDate = oDate.getDate().toString(10) + "." + (oDate.getMonth() + 1).toString(10);
    var oContentPlace = document.getElementById(sContentPlace);
    if (oContentPlace == null || oContentPlace == "undefined") {
        return;
    }
    if (oHolidays !== null && oHolidays !== "undefined") {
        if (oHolidays.hasOwnProperty(sDate)) {
            oHoliday = oHolidays[sDate];
            if (oHoliday !== null && oHoliday !== "undefined" &&
                oHoliday.img !== null && oHoliday.img !== "undefined" &&
                oHoliday.img.toString().length > 0) {
                oContentPlace.innerHTML = '<img alt="" src="' + oHoliday.img + '" />';
                return;    
            }    
        }
    }
    if (adv4.length > 0) {
        adv_array.push(adv4);
    }
}
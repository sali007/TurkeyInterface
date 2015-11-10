var adv4 = ['index_page_4', [
['script', 'kt.js', [0], './adv', [['01.08.2010', '31.12.2012']]]
]];

var oHolidays = {
    "25.1"  : { name: "���� ��������� (�������� ����)", img: "" },
    "14.2"  : { name: "���� ������� ��������� (���� ���� ����������)", img: "" },
    "6.3"	: { name: "������������� ������� ����", img: "./img/ui_item/holidays/8_3.png" },
    "7.3"	: { name: "������������� ������� ����", img: "./img/ui_item/holidays/8_3.png" },
    "8.3"	: { name: "������������� ������� ����", img: "./img/ui_item/holidays/8_3.png" },
	"22.3"  : { name: "��������������� �������� � ������ �������", img: "" },	
    "1.4"   : { name: "���� ����� / ���� ������", img: "" },
    "1.5"   : { name: "��������������� �������� � �������� �������� ������ ����������", img: "" },
    "7.5"   : { name: "���� �����", img: "" },
    "9.5"   : { name: "���� ������", img: "./img/ui_item/holidays/9_5.png" },
	"10.5"  : { name: "���� ������", img: "./img/ui_item/holidays/9_5.png" },
	"31.5"  : { name: "���� ������ ����� ������������ ���������", img: "" },
    "1.6"   : { name: "��������� ���� ������ �����", img: "" },
    "4.6"   : { name: "���� ��������������� �������� ���������� ���������", img: "" },
    "13.6"  : { name: "���� �������", img: "./img/ui_item/holidays/10_11.png" },
    "20.6"  : { name: "���� ������������ ���������", img: "" },
    "27.6"  : { name: "���� ������, ����������� � �����", img: "" },
    "2.7"   : { name: "���� ���������������� ���������", img: "" },
    "6.7"   : { name: "���� �������", img: "" },
    "18.7"  : { name: "���� ����������", img: "" },
    "1.8"  	: { name: "���� ���������� ���������� � �����", img: "" },
    "8.8"  	: { name: "���� ���������", img: "./img/ui_item/holidays/13_8.png" },
    "15.8"  : { name: "���� ������", img: "" },
	"29.8"  : { name: "���� ������", img: "" },
    "30.8"  : { name: "���� ����������� ���������� ���������", img: "" },
	"1.9"   : { name: "���� ������", img: "./img/ui_item/holidays/1_9.png" },
    "5.9"  	: { name: "���� ���������� ������������� ���������", img: "" },
	"19.9"  : { name: "���� ������ ������� ���������� ���������", img: "" },
	"28.9"  : { name: "���� ���������� ������� �������", img: "" },
    "3.10"  : { name: "���� �������", img: "./img/ui_item/holidays/5_10.png" },
    "30.10" : { name: "���� ������� ����������", img: "" },
    "15.11" : { name: "���� ������������ ������ (�����)", img: "" },
    "21.11" : { name: "���� ���������� ��������� ���������", img: "" },
	"16.11" : { name: "������ ���", img: "./img/ui_item/holidays/27_11.png" },
	"17.11" : { name: "������ ���", img: "./img/ui_item/holidays/27_11.png" },
    "18.11" : { name: "������ ���", img: "./img/ui_item/holidays/27_11.png" },
    "16.12" : { name: "���� ������������� ���������� ���������", img: "./img/ui_item/holidays/16_12.png" },
	"7.1" : { name: "C ����������!", img: "./img/ui_item/holidays/07.01.png" }
    
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
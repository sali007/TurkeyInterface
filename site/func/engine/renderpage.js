var xPageSize = 0;
var yPageSize = 0;
var xBoxSize = 0;
var yBoxSize = 0;
var cellSpacing = 0;
var currentPage = 0;

var xBoxCount = 0;
var yBoxCount = 0;
var boxesPerPage = 0;
var pagesCount = 0;
var arrayIndex = 0;

var currentDiv = '';

function isArray(obj) {
	if ((!obj) || (obj.constructor.toString().indexOf("Array") == -1))
	  return false;
	else
	  return true;
}

function go_folder(folder){
	document.cookie = 'prv_folder='+folder;
	parent.location = './pages.html';
}

function initPageControl(xbSize,ybSize,cSpacing){

//	xPageSize = xpSize;
//	yPageSize = ypSize;

	try{
          var stDisp = advert_1.style.display;
     } catch (e) {
          var stDisp = 'none';
     }

     xPageSize = screen.width;
     yPageSize = screen.height - 200;

     if (stDisp != 'none') {yPageSize -= 200};

	if ((adv5.length > 0) && (oCurDate > oBeginDate) && (oCurDate < oFinalDate)) {
        yPageSize = 624;
    }	
	//alert(yPageSize);
	xBoxSize = xbSize;
	yBoxSize = ybSize;
	cellSpacing = cSpacing;
	currentPage = 0;
	xBoxCount = Math.floor(xPageSize / (xBoxSize + cellSpacing));
	yBoxCount = Math.floor(yPageSize / (yBoxSize + cellSpacing));
	boxesPerPage = xBoxCount * yBoxCount;
	pagesCount = Math.ceil(providers.length / boxesPerPage);
	currentDiv = '';
}

function renderPage(place){

	arrayIndex = boxesPerPage * (currentPage - 1);

	var content = '';

	for (var y=1;y<=yBoxCount;y++)
	{
          content += '<tr>';
	  for (var x=1;x<=xBoxCount;x++)
	  {
	    if (arrayIndex >= providers.length) {
              content += '<td align="center" valign="middle" width='+xBoxSize+' height='+yBoxSize+'><img border="0" src="./img/ui/null.gif" width="181" height="140"></td>';
	    } else {
	    if (isArray(providers[arrayIndex]) && providers[arrayIndex].length > 1 &&
	        value[providers[arrayIndex][0]] && value[providers[arrayIndex][0]]["autorotate"] == "true") {
	        var counter = parseInt(cookie.getCookie(providers[arrayIndex][0] + "_group_rotator"), 10);
	        var aPrv = getFolder(providers[arrayIndex][1]);
	        if (!(aPrv instanceof Array)) {
	            aPrv = [];
	        }
	        if (!aPrv.length) {
	            arrayIndex++;
	        }
	        else {
	            if (isNaN(counter) || counter > aPrv.length - 1) {
	                counter = 0;
	            }
	            cookie.setCookie(providers[arrayIndex][0] + "_group_rotator", (counter + 1).toString(10));
	            providers[arrayIndex] = aPrv[counter];
	        }	        
	    }
		if (isArray(providers[arrayIndex])){
	          content +=
		  '<td bgcolor="#dedede" width='+xBoxSize+' height='+yBoxSize+' onclick=go_folder("'+providers[arrayIndex][1]+'")>'+
		  '<table cellpadding="0" cellspacing="0" border="0" width="100%" height='+yBoxSize+'>'+
		  '<tr><td width="25" background="./img/ui/ui_item_left.gif"></td>'+
		  '<td background="./img/ui/ui_item_bg.gif" align="center" valign="middle">'+
		  '<img src='+value[providers[arrayIndex][0]]["prv_image"]+'></img></td>'+
		  '<td width="25" background="./img/ui/ui_item_right.gif"></td></tr>'+
		  '</table>'+
		  '</td>';
		} 
	        else 
	        {

	          if (value[providers[arrayIndex]]["prv_is_extra"]==1)
	          {
	            content +=
		    '<td bgcolor="#dedede" width='+xBoxSize+' height='+yBoxSize+' onclick=redirect("'+providers[arrayIndex]+'","","",""); >'+
		    '<table cellpadding="0" cellspacing="0" border="0" width="100%" height='+yBoxSize+'>'+
		    '<tr><td width="25" background="./img/ui/ui_item_left.gif"></td>'+
		    '<td background="./img/ui/ui_item_bg.gif" align="center" valign="middle">'+
		    '<img src='+value[providers[arrayIndex]]["prv_image"]+' height=100></img><br>'+
	            '<font weight=bold>'+value[providers[arrayIndex]]["prv_name"]+'</font></td>'+
		    '<td width="25" background="./img/ui/ui_item_right.gif"></td></tr>'+
		    '</table>'+
		    '</td>';
	          }
	          else
		  {
	            content +=
		    '<td bgcolor="#dedede" width='+xBoxSize+' height='+yBoxSize+' onclick=redirect("'+providers[arrayIndex]+'","","",""); >'+
		    '<table cellpadding="0" cellspacing="0" border="0" width="100%" height='+yBoxSize+'>'+
		    '<tr><td width="25" background="./img/ui/ui_item_left.gif"></td>'+
		    '<td background="./img/ui/ui_item_bg.gif" align="center" valign="middle">'+
		    '<img src='+value[providers[arrayIndex]]["prv_image"]+'></img></td>'+
		    '<td width="25" background="./img/ui/ui_item_right.gif"></td></tr>'+
		    '</table>'+
		    '</td>';
	          }
		}
	      arrayIndex += 1;
            }
	  }
	  content += '</tr>';
	}
	
	content = '<table border="0" width='+((xBoxSize+cellSpacing)*xBoxCount)+' height='+((yBoxSize+cellSpacing)*yBoxCount)+' border="0" cellpadding="7" cellspacing="7">'+content+'</table>';

	document.getElementById(place).innerHTML=content;	

}
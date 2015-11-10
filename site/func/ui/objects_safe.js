
//"назад"
function button_back(){

	document.write('<table cellpadding="0" cellspacing="0" border="0" width="100%" height="124">');

	document.write('<tr>');

	document.write('<td width="30" background="./img/ui/b_left.gif"></td>');
	document.write('<td background="./img/ui/b_bg.gif" align="center" valign="middle"><img border="0" src="./img/ui/b_la.gif"></td>');
	document.write('<td width="30" background="./img/ui/b_right.gif"></td>');

	document.write('</tr>');

	document.write('</table>');

}
//"вперёд"
function button_forward() {

	document.write('<table cellpadding="0" cellspacing="0" border="0" width="100%" height="124">');
	document.write('<tr>');
	document.write('<td width="30" background="./img/ui/b_left.gif"></td>');
	document.write('<td background="./img/ui/b_bg.gif" align="center" valign="middle"><img border="0" src="./img/ui/b_ra.gif"></td>');
	document.write('<td width="30" background="./img/ui/b_right.gif"></td>');
	document.write('</tr>');
	document.write('</table>');

}



//"вперёд"
function button_forward_inactive() {

	document.write('<table cellpadding="0" cellspacing="0" border="0" width="100%" height="51">');

	document.write('<tr>');

	document.write('<td width="30" background="./img/ui/b_inactive_left.gif"></td>');
	
	document.write('<td background="./img/ui/b_inactive_bg.gif" align="center" valign="middle"><img border="0" src="./img/ui/b_inactive_ra.gif"></td>');

	document.write('<td width="30" background="./img/ui/b_inactive_right.gif"></td>');

	document.write('</tr>');

	document.write('</table>');

}

function button_back_inactive() {

	document.write('<table cellpadding="0" cellspacing="0" border="0" width="100%" height="51">');

	document.write('<tr>');

	document.write('<td width="30" background="./img/ui/b_inactive_left.gif"></td>');

	document.write('<td background="./img/ui/b_inactive_bg.gif" align="center" valign="middle"><img border="0" src="./img/ui/b_inactive_la.gif"></td>');
	
	document.write('<td width="30" background="./img/ui/b_inactive_right.gif"></td>');

	document.write('</tr>');

	document.write('</table>');

}


//"в меню"
function button_menu() {

	document.write('<table cellpadding="0" cellspacing="0" border="0" width="100%" height="51">');

	document.write('<tr>');

	document.write('<td width="30" background="./img/ui/b_menu_left.gif"></td>');

	document.write('<td background="./img/ui/b_menu_bg.gif" align="center" valign="middle"><img border="0" src="./img/ui/b_menu_center.gif"></td>');

	
	document.write('<td width="30" background="./img/ui/b_menu_right.gif"></td>');

	document.write('</tr>');

	document.write('</table>');

}


//"в меню"
function button_menu_inactive() {

	document.write('<table cellpadding="0" cellspacing="0" border="0" width="100%" height="51">');

	document.write('<tr>');

	document.write('<td width="30" background="./img/ui/b_inactive_left.gif"></td>');

	document.write('<td background="./img/ui/b_inactive_bg.gif" align="center" valign="middle"><img border="0" src="./img/ui/b_menu_inactive_center.gif"></td>');
 
	
	document.write('<td width="30" background="./img/ui/b_inactive_right.gif"></td>');

	document.write('</tr>');

	document.write('</table>');

}



function bottom_menu() {



	document.write('<tr><td align="center" height="70">');

	document.write('<table cellpadding="10" cellspacing="0" border="0" width="100%">');

	document.write('<tr>');

	document.write('<td width="20%">');	

	document.write('<table cellpadding="0" cellspacing="0" border="0" width="100%">');

	document.write('<tr>');

	document.write('<td width="25%" bgcolor="#dedede">');

	document.write('<div id="backward_yes" name="forward_yes" style=display:none><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td onclick=backward()><script>button_back();</script></td></tr></table></div>');

	document.write('<div id="backward_no" name="forward_no" style=display:><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td><script>button_back_inactive();</script></td></tr></table></div>');

	document.write('</td>');

	document.write('<td>&nbsp;</td>	');

	document.write('<td width="30%" bgcolor="#dedede">');

	document.write('<div id="menu_yes" name="menu_yes" style=display:none><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td onclick=menu();><script>button_menu();</script></td></tr></table></div>');

	document.write('<div id="menu_no" name="menu_no" style=display:><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td><script>button_menu_inactive();</script></td></tr></table></div>');

	document.write('</td>');

	document.write('<td>&nbsp;</td>	');

	document.write('<td width="25%" bgcolor="#dedede">');

	document.write('<div id="forward_yes" name="forward_yes" style=display:none><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td onclick=forward();><script>button_forward();</script></td></tr></table></div>');

	document.write('<div id="forward_no" name="forward_no" style=display:><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td><script>button_forward_inactive();</script></td></tr></table></div>');

	document.write('</td>');

	document.write('</tr>');

	document.write('</table>');

	document.write('</td>');

	document.write('</tr>');

	document.write('</table>');

	document.write('</td></tr>');


}


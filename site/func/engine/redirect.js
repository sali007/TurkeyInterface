function redirect(prv_value,account,form_account,prv_folder) {
    if(prv_value==0)
	{
	  document.cookie="prv_folder="+prv_folder;
	  parent.location = "./pages.html";
	  return;
	}

	if (form_account=='')
	{
		form_account=getcookie("Phone_Number");
		beval = getcookie("bevalValue");
	}

    try { var prv_folder = value[prv_value]["prv_folder"]; } catch(e){ prv_folder = ''; }
    try { var prv_alert = value[prv_value]["prv_alert"]; } catch(e){ prv_alert = ''; }
    try { var prv_image = value[prv_value]["prv_image"]; } catch(e){ prv_image = ''; }
    try { var prv_id = value[prv_value]["prv_id"]; } catch(e){ prv_id = ''; }
    try { var prv_name = value[prv_value]["prv_name"]; } catch(e){ prv_name = ''; }

    prv_params = (value[prv_value] && value[prv_value]["prv_eparams"]) ? value[prv_value]["prv_eparams"] : '';
	
	var needOnlineAuth = false;


	document.cookie="Phone_Number="+form_account;
	document.cookie="prv_folder="+prv_folder;
	document.cookie="prv_value="+prv_value;
	document.cookie="prv_alert="+prv_alert;
	document.cookie="prv_image="+prv_image;	
	document.cookie="prv_params="+prv_params;

	ff.prv_id.value = prv_id;
	ff.prv_name.value = prv_name;
	ff.EmbedParams.value = prv_params;
	
	if (account!='')
	{
		try
		{
			ff.getAccountNumber.value = account;
		} catch (e)
		{
        		document.getElementById('hiddens').innerHTML = '<input type="hidden" name="getAccountNumber" value="'+account+'">';
		};
	} 
	else
	{
		try
		{
			if (authOnlineCellular==true)
			{
				needOnlineAuth = true;
			}
		}
		catch(e)
		{
			// may be authOnlineCellular does not exists. when so - do nothing
		}
	} 
        
	var advert = new AdvertClass();
	try
    {
        ff._receipt_prt_top_reklama.value = advert.getadvcontent('receipt_header_text');
        ff._receipt_prt_bottom_reklama.value = advert.getadvcontent('receipt_footer_text');

    } 
    catch(e)
    {
        var hid = document.getElementById('hiddens');
                
        hid.innerHTML += 
        '<input type="hidden" name="_receipt_prt_top_reklama" value="' + advert.getadvcontent('receipt_header_text')+ '">'+
        '<input type="hidden" name="_receipt_prt_bottom_reklama" value="' + advert.getadvcontent('receipt_footer_text') + '">';
    };

	if (prv_folder == "internet") 
	{

		//Страница перехода по умолчанию.
		document.ff.action = value[prv_value]["prv_page"];

		if (prv_value == '238') 
		{
			document.getElementById('hiddens').innerHTML = '<input type="hidden" name="_extra_PAY_TYPE" value="1">';
			ff.submit();
			return;
		}

		//Skynet Online
		if (prv_value == '275')
		{
			ff.komissiya.value = '50';
			ff.submit();
			return;
		}

		else 
		{
			ff.submit();
			return;
		}
	}

	if (prv_folder == "zkh") 
	{ 
	  document.ff.action = value[prv_value]["prv_page"];
	  ff.submit();
	  return;
	}

	if (prv_folder == "phone_all") 
	{ 
	  document.ff.action = value[prv_value]["prv_page"];
	  ff.submit();
	  return;
	}

	if (prv_folder == "other") 
	{ 
	  document.ff.action = value[prv_value]["prv_page"];
	  ff.submit();
	  return;
	}

	if (prv_folder == "tv") 
	{ 
	  document.ff.action = value[prv_value]["prv_page"];
	    ff.submit();
	    return;
	  return;
	}

	if (prv_folder == "ecommerce") 
	{ 
	  document.ff.action = value[prv_value]["prv_page"];
	  ff.submit();
	  return;
	}

	if (prv_folder == "cellular") 
	{ 

	  if ((form_account == '') || (form_account == 'null'))
	  {
	    document.ff.action = value[prv_value]["prv_page"];
	    ff.submit();
	    return;
	  }

         if (form_account != '')
          {

          var hidCnt = '';
//		  alert(prv_value);
//		  	if (prv_value == '142' && authOnlineCellular)
		  	if (prv_value == '142xx'||prv_value == '142axx')			
			{
				needOnlineAuth = true;
			}
			if (prv_value == '735')			
			{
				needOnlineAuth = true;
			}
			else if (prv_value == '643')			
			{
				needOnlineAuth = true;
			}
			else if (prv_value == '644')			
			{
				needOnlineAuth = true;
			}
			else
			{
				needOnlineAuth = false;					
			}



            if (needOnlineAuth)
            {
              hidCnt=
                '<input type="hidden" name="_extra_auth_page" value="online_auth.html">'+
                '<input type="hidden" name="_extra_auth_success" value="validate_confirm.html">'+
                '<input type="hidden" name="_extra_auth_fail" value="online_auth_error.html">';
              document.getElementById('hiddens').innerHTML = hidCnt;
              document.ff.action = './online_auth.html';
            }
            else
            {
              //alert(prv_value);
            	document.ff.action = './validate_confirm.html';
            }
            
					
					/*	if(prv_value == '142'||prv_value == '643'||prv_value == '644')
						{
						
              			if (prv_value=='643'||prv_value=='644') {
              				
              				if(account.substring(0,3)!='701'&&account.substring(0,3)!='702'&&account.substring(0,3)!='775') {
              					document.ff.action = './beeline_sd.html';              					
              				} else {
              	              document.ff.action = './online_auth_fake.html';
              	  
              				}	
              				
              			} else {
			              document.ff.action = './online_auth_fake.html';
			            }
							
						}

						if(prv_value == '142a'||account == '7010000000'||account == '7020000000')
						{
              				document.ff.action = './beeline_sd.html';
							
						}
*/

            if (prv_value == '126') 
            {
              document.getElementById('hiddens').innerHTML = hidCnt + '<input type="hidden" name="getAccountNumber" value="">';
              ff.getAccountNumber.value = "bm" + beval;
              ff.submit();
              return;                                           
            }

            if (prv_value == '126a') 
            {
              document.getElementById('hiddens').innerHTML = hidCnt + '<input type="hidden" name="getAccountNumber" value="">';
              ff.getAccountNumber.value = "re" + beval;
              ff.submit();
              return;
            }

            if (prv_value == '126b') 
            {
              document.getElementById('hiddens').innerHTML = hidCnt + '<input type="hidden" name="getAccountNumber" value="">';
              ff.getAccountNumber.value = "vo" + beval;
              ff.submit();
              return;
            }

            if (prv_value == '279') 
            {
              ff.komissiya.value = '20';
              ff.submit();
              return;
            }

            if (prv_value == '36') 
            {
              ff.komissiya.value = '50';
              ff.submit();
              return;
            }
//			alert(document.ff.phone_wd.value);			  
			ff.submit();
            return;
          }

	}
	else 
	{
	  parent.location = "./main.html"
	  return;
	}

}

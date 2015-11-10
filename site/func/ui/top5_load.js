function load_top5(){
	var img_src, prv_id, prv_folder, cur_pic, cur_prov, cur_folder;
	var num_ico = prv_on_first_page.length;
	for(var i=0; i<num_ico; i++){

		var prv_val;
		try
		{
			prv_val = prv_on_first_page[i];
		} 
		catch(e)
		{
			prv_val = 1;
		}
		
		img_src = value[prv_val]["prv_image"];

		prv_id = value[prv_val]["prv_id"];

		cur_pic = document.getElementById('pic_'+i);

		cur_prov = document.getElementById('prov_'+i);

		cur_pic.src = img_src;

		cur_prov.value = prv_val;

	}

	return true;

}	



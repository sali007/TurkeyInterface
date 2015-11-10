function engine()
{

var prv_value = getcookie('prv_value');

prv_folder = value[prv_value]["prv_folder"];

alert("категория провайдера = " + prv_folder);

	if (prv_folder == "internet") { 

		parent.location = value[prv_value]["prv_page"];

	return;

	}

	if (prv_folder == "zkh") { 

		parent.location = value[prv_value]["prv_page"];

	return;

	}


	if (prv_folder == "cellular") { 


		var somecookie = getcookie('Phone_Number');

//		alert("а шо там в гугисах? посмотрим: somecookie = " + somecookie);

		if (somecookie == 'null' ){

//			alert("да нихрена там нет! топаем ввадить данные!");

			parent.location = value[prv_value]["prv_page"];

		return;

		}


		if (somecookie != 'null' ){

//			alert("ёпта, да там дофига чо, топаем падтверждать пока не спёрли!");

			parent.location = value[prv_value]["prv_page_conf"];

		return;

		}
		

	}

	else {

//		alert("вы не записаны, идите в баню!");

		parent.location = "./main.html"

		return;

	}




	
}





function engine()
{

var prv_value = getcookie('prv_value');

prv_folder = value[prv_value]["prv_folder"];

alert("��������� ���������� = " + prv_folder);

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

//		alert("� �� ��� � �������? ���������: somecookie = " + somecookie);

		if (somecookie == 'null' ){

//			alert("�� ������� ��� ���! ������ ������� ������!");

			parent.location = value[prv_value]["prv_page"];

		return;

		}


		if (somecookie != 'null' ){

//			alert("����, �� ��� ������ ��, ������ ������������ ���� �� �����!");

			parent.location = value[prv_value]["prv_page_conf"];

		return;

		}
		

	}

	else {

//		alert("�� �� ��������, ����� � ����!");

		parent.location = "./main.html"

		return;

	}




	
}





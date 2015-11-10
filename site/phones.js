var pref = new Array();

function add(r) {
  var i,a = parseInt(r.from.substr(0,3),10), b = a = parseInt(r.to.substr(0,3),10);
  for( i=a; i<=b; i++ ) {
    var z = pref[i];
    if(!z) z = pref[i] = new Array();
    z[z.length] = r;
  }
}

function test() {
  idPrv = '';
  var s = document.getElementById("code").value + document.getElementById("phone_wd").value;
  if( s.substr(0,1) == '0' ) s = '4'+s.substr(1);
  if( loaded == 2 ) {
    document.getElementById("ph").innerHTML = '???????: '+s;
    var i, foundPriority = 99, prv='',region='', r = pref[ parseInt(s.substr(0,3)) ];
    if( r ) for( i = 0; i < r.length; i++ ) {
      var s1 = (s+'0000000000').substr(0,10), s2 = (s+'9999999999').substr(0,10);
      if( s1 >= r[i].from && s2 <= r[i].to && r[i].priority <= foundPriority ) {
        foundPriority = r[i].priority;
        prv = r[i].prv;
        region = regions[ r[i].region ];
        idPrv = prv;
	ff.prv_id.value = idPrv;
	ff.prv_name.value = p[prv];
      }
    }
    document.getElementById("prv").innerHTML = ''+(prv==''?'-':p[prv]);
    document.getElementById("region").innerHTML = ''+(region==''?'-':region);
  }
}

var regions = new Array(), loaded = 0, gened = false, ranges = new Array(), idPrv = '';

function range( from, to, prv, priority, region ) {
  this.from = from;
  this.to = to;
  this.region = region;
  this.priority = parseInt(priority,10);
  this.prv = prv;
}

function continiueClick(){
	if(idPrv == 3 || idPrv == 22 || idPrv == 23 || idPrv == 26 || idPrv == 34 || idPrv == 35 || idPrv == 38 || idPrv == 40 || idPrv==29 || idPrv==30){	
		document.cookie = "Phone_Number="+"("+ff.code.value+")"+ff.phone.value;
		
	}else{
		ff.prv_id.value = '';
		ff.action = 'megafone_all.html';
	}
	ff.submit();
}

var p = new Array();

regions[1]='Turkey';

add(new range('0000100000','0000299999',1,22));

loaded = 2;

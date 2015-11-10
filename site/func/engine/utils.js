var debugCalls = 0;
var warnings = 0;

function newClass(parent, prop) {
	// Dynamically create class constructor.
	var clazz = function() {
		// Stupid JS need exactly one "operator new" calling for parent
		// constructor just after class definition.
		if (clazz.preparing) return delete(clazz.preparing);
		// Call custom constructor.
		if (clazz.constr) {
			this.constructor = clazz; // we need it!
			clazz.constr.apply(this, arguments);
		}
	}
	clazz.prototype = {}; // no prototype by default
	if (parent) {
		parent.preparing = true;
		clazz.prototype = new parent;
		clazz.prototype.constructor = parent;
		clazz.constr = parent; // BY DEFAULT - parent constructor
	}
	if (prop) {
		var cname = "constructor";
		for (var k in prop) {
			if (k != cname) clazz.prototype[k] = prop[k];
		}
		if (prop[cname] && prop[cname] != Object) clazz.constr = prop[cname];
	}
	return clazz;
}

var formClass = function()
{
	var formValueType = function(name,value,dispValue)
	{
		this.name = name;
		this.value = value;
		this.dispValue = dispValue;
	}
	
	var formValues = new Array();
	
	this.add = function(name,postValue,dispValue)
	{
		for(var i=0; i<formValues.length; i++)
		{
			if(formValues[i].name == name)
			{
				formValues[i].value=postValue;
				formValues[i].dispValue=dispValue;
				return;
			}
		}
		formValues.push(new formValueType(name,postValue,dispValue));
	}

	this.get = function(name,getDispValue)
	{
		for(var i=0; i<formValues.length; i++)
		{
			if(formValues[i].name == name)
			{
				return (getDispValue) ? formValues[i].dispValue : formValues[i].value;
			}
		}
		return false;
	}
	
	this.post = function(action)
	{		
		if (!action) action = '#'
		var form = document.createElement('form');
		form.name = 'postValuesForm';
		form.action = action;
		form.method = 'POST';
		for(var i=0; i<formValues.length; i++)
		{
			var input = document.createElement('input');
			input.type = 'hidden';
			input.name = formValues[i].name;
			input.value = formValues[i].value;
			al(formValues[i].name + ' = ' + formValues[i].value);
			form.appendChild(input);
		}
		document.body.appendChild(form);
		form.submit();
	}
}

//Расширение базовых типов/////////////////////////////////////////////////////////////////////////////////////////////

// Расширение типа 'Object'
Object.prototype._typeName = "Object";
Object.prototype.getType = function() {
    return this._typeName;
}
Object.prototype.isNullOrUndefined = function(value) {
    return (value == undefined || value == null);
}
Object.prototype.serialize = function() {
    var sResult = "{";

    for (var field in this) {
        if (this[field] && this != this[field] && this[field]._typeName !== "Function") {
            sResult += field + " : " + this[field].serialize() + ",";
        }
    }
    if (sResult.length > 1) {
        sResult = sResult.substr(0, sResult.length - 1);
    }

    sResult += "}";
    return sResult;
}
Object.prototype.deserialize = function(sSerializedObj) {
    if (Object.isNullOrUndefined(sSerializedObj) ||
        sSerializedObj._typeName !== "String" ||
        !sSerializedObj.length) {
        return null;
    }

    var o = null;

    try {
        eval("o =" + sSerializedObj + ";");
    }
    catch (e) {
        return null;
    }

    return o;
}

// Расширение типа 'Number'
Number.prototype._typeName = "Number";
Number.prototype.serialize = function() {
    return this.toString();
}

// Расширение типа 'Array'
Array.prototype._typeName = "Array";
Array.prototype.serialize = function() {
    var sResult = "[";
    for (var i = 0; i < this.length; i++) {
        if (this[i]) {
            sResult += this[i].serialize() + ",";
        }
    }
    if (sResult.length > 1) {
        sResult = sResult.substr(0, sResult.length - 1);
    }
    sResult += "]";
    return sResult;
}
Array.prototype.getFirst = function() {
    if (this.length > 0) {
        return this[0];
    }
    return null;
}
Array.prototype.getLast = function() {
    if (this.length > 0) {
        return this[this.length - 1];
    }
    return null;
}

// Расширение типа 'Boolean'
Boolean.prototype._typeName = "Boolean";
Boolean.prototype.serialize = function() {
    return this.toString();
}
Boolean.parse = function(value) {
    if (Object.isNullOrUndefined(value)) {
        return false;
    }

    switch (value._typeName) {
        case "Boolean":
            return value;
            break;
        case "String":
            if (value.toLowerCase() == 'true') {
                return true;
            }
            else if (value.toLowerCase() == 'false') {
                return false;
            }
            break;
        case "Number":
            if (value == 0) {
                return false;
            }
            else {
                return true;
            }
            break;
    }

    return null;
}

// Расширение типа 'String'
String.prototype._typeName = "String";
String.prototype.serialize = function() {
    return "\"" + this.replace(new RegExp("\\\\"), "\\\\\\").replace(new RegExp("\"", "g"), "\\\"") + "\"";
}

// Расширение типа 'Date'
Date.prototype._typeName = "Date";
Date.prototype.serialize = function() {
    return "new Date(\"" + this.toString() + "\")";
}

// Расширение типа 'Function'
Function.prototype._typeName = "Function";
Function.prototype.validateParams = function(params, expectedParams) {
    if (Object.isNullOrUndefined(params)) {
        al("<params> - is null or undefined");
        return false;
    }
    if (Object.isNullOrUndefined(expectedParams)) {
        al("<expectedParams> - is null or undefined");
        return false;
    }
    if (params._typeName !== "Object") {
        al("type <params> is not <Object>");
        return false;
    }
    if (expectedParams._typeName !== "Array") {
        al("type <expectedParams> is not <Array>");
        return false;
    }
    if (params.length > expectedParams.length) {
        al("length <params> doesn't match length <expectedParams>");
        return false;
    }
    if (params.length < expectedParams.length) {
        var difference = expectedParams.length - params.length;
        for (var i = 0; i < difference; i++) {
            if (!Boolean.parse(expectedParams[params.length + i].canBeEmpty)) {
                al("length <params> doesn't match length <expectedParams>");
                return false;
            }
        }
    }
    for (var i = 0; i < params.length; i++) {
        if (Object.isNullOrUndefined(params[i])) {
            if (!Boolean.parse(expectedParams[i].canBeNull)) {
                al("<" + expectedParams[i].name + "> is null");
                return false;
            }
        }
        else if (params[i]._typeName != expectedParams[i].type && !params[i].isType(expectedParams[i].type)) {
            al("type <" + expectedParams[i].name + "> is <" + params[i]._typeName + ">\nexpected <" + expectedParams[i]._typeName + ">");
            return false;
        }
    }

    return true;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getStr(sKey) {
    var oStrings = null;
    
    try {
        eval("oStrings = strings_" + cookie.getCookie("language"));
        
        if (oStrings[sKey]) {
            return oStrings[sKey];
        }
        return "";
    }
    catch (e) {
        return "";
    }
}

function getTitle(sTitle) {
    return '<table cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 20px;">' +
            '<tr>' +
             '<td><img src="./img/ui/title_left.gif" /></td>' +
             '<td align="center" valign="middle" style="color: #ffffff; font-size: 18px; background:url(\'./img/ui/title_bg.gif\') repeat-x;">' +
               sTitle + ':' +
             '</td>' +
             '<td><img src="./img/ui/title_right.gif" /></td>' +
            '</tr>' +
           '</table>';
}

function al(msg) {
    debugCalls++;
    if (!msg) msg = 'called !';
    msg = (debugCalls + ': ' + msg);
    if (warnings) alert(msg);
}

function insertContent(placeId, content) {
    var place = $(placeId);
    if (place == null) {
        if (warnings) alert('Element [' + placeId + '] not found !');
        return;
    }
    place.innerHTML = content;
}

function $(element) {
    var res = document.getElementById(element);
    if (!res) al('Element "' + element + '" not found !');
    return res;
}

function getFlashDef(sUrl, bTransparent, sWidth, sHeight) {
    if (Object.isNullOrUndefined(sUrl) || sUrl._typeName != "String") {
        return ""; 
    }
    if (Object.isNullOrUndefined(bTransparent) || bTransparent._typeName != "Boolean") {
        bTransparent = false;
    }
    if (Object.isNullOrUndefined(sWidth) || sWidth._typeName != "String" || !/^\d{1,3}(?:px|%)$/.test(sWidth)) {
        sWidth = "100%";
    }
    if (Object.isNullOrUndefined(sHeight) || sHeight._typeName != "String" || !/^\d{1,3}(?:px|%)$/.test(sHeight)) {
        sHeight = "100%";
    }
    
    var sRes = "";

    sRes += "<object classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" codebase=\"http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0\" width=\"" + sWidth + "\" height=\"" + sHeight + "\">" +
            "   <param name=\"allowScriptAccess\" value=\"sameDomain\" />" +
            "   <param name=\"movie\" value=\"" + sUrl + "\" />" +
            "   <param name=\"quality\" value=\"best\" />" +
            ((bTransparent) ? "<param name=\"wmode\" value=\"transparent\" />" : "") +
            "   <embed src=\"" + sUrl + "\" width=\"" + sWidth + "\" height=\"" + sHeight + "\"" + ((bTransparent) ? " wmode=\"transparent\"" : "") + "></embed>" +
            "</object>";
    
    return sRes;
}

function drawNavBtn(placeId, btnType, callEvent) {
    var buttonWidth = 250;
    var res = '<table height=70 border=0 cellspacing=0 cellpadding=0><tr>';
    switch (btnType) {
        case 'NONE':
            insertContent(placeId, '');
            return;
            break;
        case 'LEFT_ENABLED':
            res +=
				'<td><img src="./img/ui/navigation/left.gif" /></td>' +
				'<td width=' + buttonWidth + ' background="./img/ui/navigation/bg.gif" align="center" valign="middle" ' + ((callEvent == '') ? '' : 'onClick=' + callEvent) + ' ><img border="0" src="./img/ui/navigation/back.gif"></td>' +
				'<td><img src="./img/ui/navigation/right.gif" /></td>' +
				'<td>&nbsp;</td>';
            break;
        case 'LEFT_DISABLED':
            res +=
				'<td><img src="./img/ui/navigation/inactive_left.gif" /></td>' +
				'<td width=' + buttonWidth + ' background="./img/ui/navigation/inactive_bg.gif" align="center" valign="middle" ' + ((callEvent == '') ? '' : 'onClick=' + callEvent) + ' ><img border="0" src="./img/ui/navigation/inactive.gif"></td>' +
				'<td><img src="./img/ui/navigation/inactive_right.gif" /></td>' +
				'<td>&nbsp;</td>';
            break;
        case 'RIGHT_ENABLED':
            res +=
				'<td><img src="./img/ui/navigation/left.gif" /></td>' +
				'<td width=' + buttonWidth + ' background="./img/ui/navigation/bg.gif" align="center" valign="middle" ' + ((callEvent == '') ? '' : 'onClick=' + callEvent) + ' ><img border="0" src="./img/ui/navigation/forward.gif"></td>' +
				'<td><img src="./img/ui/navigation/right.gif" /></td>' +
				'<td>&nbsp;</td>';
            break;
        case 'RIGHT_DISABLED':
            res +=
				'<td><img src="./img/ui/navigation/inactive_left.gif" /></td>' +
				'<td width=' + buttonWidth + ' background="./img/ui/navigation/inactive_bg.gif" align="center" valign="middle" ' + ((callEvent == '') ? '' : 'onClick=' + callEvent) + ' ><img border="0" src="./img/ui/navigation/inactive.gif"></td>' +
				'<td><img src="./img/ui/navigation/inactive_right.gif" /></td>' +
				'<td>&nbsp;</td>';
            break;
        case 'MENU_ENABLED':
            res +=
				'<td><img src="./img/ui/navigation/menu_left.gif" /></td>' +
				'<td width=' + buttonWidth + ' background="./img/ui/navigation/menu_bg.gif" align="center" valign="middle" ' + ((callEvent == '') ? '' : 'onClick=' + callEvent) + ' ><img border="0" src="./img/ui/navigation/menu.gif"></td>' +
				'<td><img src="./img/ui/navigation/menu_right.gif" /></td>' +
				'<td>&nbsp;</td>';
            break;
        case 'MENU_DISABLED':
            res +=
				'<td><img src="./img/ui/navigation/inactive_left.gif" /></td>' +
				'<td width=' + buttonWidth + ' background="./img/ui/navigation/inactive_bg.gif" align="center" valign="middle" ' + ((callEvent == '') ? '' : 'onClick=' + callEvent) + ' ><img border="0" src="./img/ui/navigation/inactive.gif"></td>' +
				'<td><img src="./img/ui/navigation/inactive_right.gif" /></td>' +
				'<td>&nbsp;</td>';
            break;
    }
    res +=
	'</tr></table>';
    insertContent(placeId, res);
    };
    
// base component class definition
componentBase = newClass
(
	null,
	{
		constructor: function(parent, instance)
		{ 
			this.constructor.prototype.constructor.call(this);
			this.parentInstance = parent;
			this.instance = ((parent) ? parent+'.' : '' )+instance;
			this.listeners = new Array();
			this.suspendPreviousPage = false;
		},
		
		attachListener: function (eventType,eventListener) 
		{ 
			if (!this.listeners[eventType]) this.listeners[eventType] = new Array();
			this.listeners[eventType].push(eventListener);
		},
		
		dettachListener: function (eventType,eventListener) 
		{ 
			function getListenerNumber(listeners, evntListener)
			{
			    if (listeners)
			        for (var i=0; i<listeners.length; i++)
			            if (listeners[i] == evntListener)
			                return i;
			    return -1;
			}
			
			if (!this.listeners[eventType]) return;
			var listenerNum = getListenerNumber(this.listeners[eventType], eventListener);
			if (listenerNum > -1)
			    this.listeners[eventType].splice(listenerNum, 1);
		},
		
		notify: function(eventType,parameter)
		{
			if (!this.listeners[eventType]) return;
			for (var i=0; i<this.listeners[eventType].length; i++)
			{
				try
				{
					eval(this.listeners[eventType][i]+'("'+ parameter +'")');
				}
				catch(e)
				{
					al('Exception in '+this.instance+'.notify("' + eventType +'") calling listener '+this.listeners[eventType][i] + ' fails \n'+e.description);
				}
			}
		}		
	}
);

function uiNavigationButton(placeId, btnType, callEvent)
{
    var buttonWidth = 250;
    var sLang = cookie.getCookie("language");
    if (!sLang || sLang == "null") {
        sLang = "F1";
    }
	var res = '<table height=70 border=0 cellspacing=0 cellpadding=0><tr>';
	switch (btnType)
	{
		case 'NONE':
			insertContent(placeId,'');
			return;
			break;
		case 'LEFT_ENABLED':
			res +=
				'<td><img src="./img/ui/b_left.gif" /></td>'+
				'<td width='+buttonWidth+' background="./img/ui/b_bg.gif" align="center" valign="middle" ' + ((callEvent == '') ? '' : 'onClick='+callEvent) + ' ><img border="0" src="./img/ui/b_la_' + sLang + '.gif"></td>'+
				'<td><img src="./img/ui/b_right.gif" /></td>'+
				'<td>&nbsp;</td>';
			break;
		case 'LEFT_DISABLED':
			res +=
				'<td><img src="./img/ui/b_inactive_left.gif" /></td>'+
				'<td width='+buttonWidth+' background="./img/ui/b_inactive_bg.gif" align="center" valign="middle" ' + ((callEvent == '') ? '' : 'onClick='+callEvent) + ' ><img border="0" src="./img/ui/b_inactive_la.gif"></td>'+
				'<td><img src="./img/ui/b_inactive_right.gif" /></td>'+
				'<td>&nbsp;</td>';
			break;
		case 'RIGHT_ENABLED':
			res +=
				'<td><img src="./img/ui/b_left.gif" /></td>'+
				'<td width=' + buttonWidth + ' background="./img/ui/b_bg.gif" align="center" valign="middle" ' + ((callEvent == '') ? '' : 'onClick=' + callEvent) + ' ><img border="0" src="./img/ui/b_ra_' + sLang + '.gif"></td>' +
				'<td><img src="./img/ui/b_right.gif" /></td>'+
				'<td>&nbsp;</td>';
			break;
		case 'RIGHT_DISABLED':
			res +=
				'<td><img src="./img/ui/b_inactive_left.gif" /></td>'+
				'<td width='+buttonWidth+' background="./img/ui/b_inactive_bg.gif" align="center" valign="middle" ' + ((callEvent == '') ? '' : 'onClick='+callEvent) + ' ><img border="0" src="./img/ui/b_inactive_ra.gif"></td>'+
				'<td><img src="./img/ui/b_inactive_right.gif" /></td>'+
				'<td>&nbsp;</td>';
			break;
        case 'PAY_ENABLED':
            res +=
	            '<td><img src="./img/ui/b_left.gif" /></td>' +
	            '<td width=' + buttonWidth + ' background="./img/ui/b_bg.gif" align="center" valign="middle" ' + ((callEvent == '') ? '' : 'onClick=' + callEvent) + ' ><img border="0" src="./img/ui/b_pay_' + sLang + '.gif"></td>' +
	            '<td><img src="./img/ui/b_right.gif" /></td>' +
	            '<td>&nbsp;</td>';
            break;
        case 'PAY_DISABLED':
            res +=
	            '<td><img src="./img/ui/b_inactive_left.gif" /></td>' +
	            '<td width=' + buttonWidth + ' background="./img/ui/b_inactive_bg.gif" align="center" valign="middle" ' + ((callEvent == '') ? '' : 'onClick=' + callEvent) + ' ><img border="0" src="./img/ui/b_inactive_ra.gif"></td>' +
	            '<td><img src="./img/ui/b_inactive_right.gif" /></td>' +
	            '<td>&nbsp;</td>';
            break;
        case 'MENU_ENABLED':
		res +=
			'<td><img src="./img/ui/b_menu_left.gif" /></td>'+
			'<td width=' + buttonWidth + ' background="./img/ui/b_menu_bg.gif" align="center" valign="middle" ' + ((callEvent == '') ? '' : 'onClick=' + callEvent) + ' ><img border="0" src="./img/ui/b_menu_center_' + sLang + '.gif"></td>' +
			'<td><img src="./img/ui/b_menu_right.gif" /></td>'+
			'<td>&nbsp;</td>';
		break;
		case 'MENU_DISABLED':
			res +=
				'<td><img src="./img/ui/b_inactive_left.gif" /></td>'+
				'<td width='+buttonWidth+' background="./img/ui/b_inactive_bg.gif" align="center" valign="middle" ' + ((callEvent == '') ? '' : 'onClick='+callEvent) + ' ><img border="0" src="./img/ui/b_menu_inactive_center.gif"></td>'+
				'<td><img src="./img/ui/b_inactive_right.gif" /></td>'+
				'<td>&nbsp;</td>';
			break;
	}
	res +=
	'</tr></table>';
	insertContent(placeId,res);
}

function getSound(wav)
{
	document.write('<bgsound src="./sound/'+ wav +'_' + cookie.getCookie("language") +'.wav" loop="1">')
}
   
    



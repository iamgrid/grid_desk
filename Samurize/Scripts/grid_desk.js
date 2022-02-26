// WARNING: DO NOT EDIT THIS WITH VSCODE, IT WILL SCREW UP THE ENCODING!!!!
// THE CORRECT ENCODING FOR THIS FILE IS: "Western (Windows 1252)"


//////////////
// SETTINGS //
//////////////

// Calendar settings
//var calrange=58; //1280
var calrange = 82; // 1920

// geoloc and UTC offset is required to calculate sunrise/sunset time
var latitude = 46.6220;
var longitude = -18.8559;

var gmt_correction = 1;

function isDST(d) {
	var jan = new Date(d.getFullYear(), 0, 1).getTimezoneOffset();
	var jul = new Date(d.getFullYear(), 6, 1).getTimezoneOffset();
	return Math.max(jan, jul) !== d.getTimezoneOffset();
}
var utc_correction = gmt_correction;
if (isDST(new Date())) {
	utc_correction = 2;
}


/////////////////
// JSON PARSER //
/////////////////

// json2.js
// source: https://github.com/douglascrockford/JSON-js/blob/master/json2.js
// date: October 20, 2011

var JSON; if (!JSON) {JSON = {}; } (function() {function str(a, b) {var c, d, e, f, g = gap, h, i = b[a]; if (i && typeof i === "object" && typeof i.toJSON === "function") {i = i.toJSON(a); } if (typeof rep === "function") {i = rep.call(b, a, i); } switch (typeof i) {case "string": return quote(i); case "number": return isFinite(i) ? String(i) : "null"; case "boolean": case "null": return String(i); case "object": if (!i) {return "null"; } gap += indent; h = []; if (Object.prototype.toString.apply(i) === "[object Array]") {f = i.length; for (c = 0; c < f; c += 1) {h[c] = str(c, i) || "null"; } e = h.length === 0 ? "[]": gap ? "[\n" + gap + h.join(",\n" + gap) + "\n" + g + "]": "[" + h.join(",") + "]"; gap = g; return e; } if (rep && typeof rep === "object") {f = rep.length; for (c = 0; c < f; c += 1) {if (typeof rep[c] === "string") {d = rep[c]; e = str(d, i); if (e) {h.push(quote(d) + (gap ? ": " : ":") + e); } } } } else {for (d in i) {if (Object.prototype.hasOwnProperty.call(i, d)) {e = str(d, i); if (e) {h.push(quote(d) + (gap ? ": " : ":") + e); } } } } e = h.length === 0 ? "{}": gap ? "{\n" + gap + h.join(",\n" + gap) + "\n" + g + "}": "{" + h.join(",") + "}"; gap = g; return e; } } function quote(a) {escapable.lastIndex = 0; return escapable.test(a) ? '"' + a.replace(escapable, function(a) {var b = meta[a]; return typeof b === "string"? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16) ).slice(-4); }) + '"': '"' + a + '"'; } function f(a) {return a < 10 ? "0" + a : a; } ("use strict"); if (typeof Date.prototype.toJSON !== "function") {Date.prototype.toJSON = function(a) {return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z": null; }; String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(a ) {return this.valueOf(); }; } var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"}, rep; if (typeof JSON.stringify !== "function") {JSON.stringify = function(a, b, c) {var d; gap = ""; indent = ""; if (typeof c === "number") {for (d = 0; d < c; d += 1) {indent += " "; } } else if (typeof c === "string") {indent = c; } rep = b; if (b && typeof b !== "function" && (typeof b !== "object" || typeof b.length !== "number") ) {throw new Error("JSON.stringify"); } return str("", { "": a }); }; } if (typeof JSON.parse !== "function") {JSON.parse = function(text, reviver) {function walk(a, b) {var c, d, e = a[b]; if (e && typeof e === "object") {for (c in e) {if (Object.prototype.hasOwnProperty.call(e, c)) {d = walk(e, c); if (d !== undefined) {e[c] = d; } else {delete e[c]; } } } } return reviver.call(a, b, e); } var j; text = String(text); cx.lastIndex = 0; if (cx.test(text)) {text = text.replace(cx, function(a) {return ("\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4) ); }); } if (/^[\],:{}\s]*$/.test(text .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@") .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]") .replace(/(?:^|:|,)(?:\s*\[)+/g, "") ) ) {j = eval("(" + text + ")"); return typeof reviver === "function" ? walk({ "": j }, "") : j; } throw new SyntaxError("JSON.parse"); }; } })();


//////////////////////
// TXT FILE STREAMS //
//////////////////////

/*var path = "d:\\User\\kcal.txt";
var max_results = 10;
var name_length = 24;
var filtered = [];

var ado = new ActiveXObject("ADODB.Stream");
ado.Open();
ado.Type = 2; // Text
ado.Charset = "UTF-8";
ado.loadFromFile(path);
ado.Position = 0;
var stream = ado.ReadText();
ado.Close();

var calevents = JSON.parse(stream);*/


var weatherpath = "d:\\User\\grid_desk\\fetched_data\\weather-actual.txt";
var ado2 = new ActiveXObject("ADODB.Stream");
ado2.Open();
ado2.Type = 2; // Text
ado2.Charset = "UTF-8";
ado2.loadFromFile(weatherpath);
ado2.Position = 0;
var weatherstream = ado2.ReadText();
ado2.Close();

var weatherdata = JSON.parse(weatherstream);


var exchangeratespath = "d:\\User\\grid_desk\\fetched_data\\exchange-rates-actual.txt";
var ado2 = new ActiveXObject("ADODB.Stream");
ado2.Open();
ado2.Type = 2; // Text
ado2.Charset = "UTF-8";
ado2.loadFromFile(exchangeratespath);
ado2.Position = 0;
var exchangeratesstream = ado2.ReadText();
ado2.Close();

var exchangeratesdata = JSON.parse(exchangeratesstream);


////////////////////
// GLOBAL HELPERS //
////////////////////

var NOW_OBJ = new Date();
var NOW_TIMESTAMP = NOW_OBJ.getTime();
var ONE_DAY = 24 * 60 * 60 * 1000;

var MONTHS = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec"
];
var WEEKDAYS_ONE_LETTER = ["", "M", "T", "W", "T", "F", ""];
var WEEKDAYS_THREE_LETTER = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


//////////////////////
// SAMURIZE GETTERS //
//////////////////////

function samurizeGetCalRow1() {
	return calendar(1);
}

function samurizeGetCalRow2() {
	return calendar(2);
}

/*function samurizeGetCalRow3() {
	return calendar(3);
}

function samurizeGetCalRow4() {
	return calendar(4);
}

function samurizeGetTasks() {
	return gettasks();
}*/

function samurizeWeatherGetLocation() {
	return weatherGetLoc();
}

function samurizeWeatherGetDay0Date() {
	return weatherGetDate(0);
}

function samurizeWeatherGetDay0Icon() {
	return weatherGetIcon(0);
}

function samurizeWeatherGetDay0High() {
	return weatherGetHigh(0);
}

function samurizeWeatherGetDay0Low() {
	return weatherGetLow(0);
}

function samurizeWeatherGetDay0Desc() {
	return weatherGetDesc(0, true);
}

function samurizeWeatherGetDay0DescPermanent() {
	return weatherGetDesc(0, false);
}

function samurizeWeatherGetDetailLayer1() {
	return weatherGetDesc(0, false, 1);
}

function samurizeWeatherGetDetailLayer2() {
	return weatherGetDesc(0, false, 2);
}

function samurizeWeatherGetDetailLayer3() {
	return weatherGetDesc(0, false, 3);
}

function samurizeWeatherGetDetailLayer4() {
	return weatherGetDesc(0, false, 4);
}

function samurizeWeatherGetDetailLayer5() {
	return weatherGetDesc(0, false, 5);
}

function samurizeWeatherGetDay1Date() {
	return weatherGetDate(1);
}

function samurizeWeatherGetDay1Icon() {
	return weatherGetIcon(1);
}

function samurizeWeatherGetDay1High() {
	return weatherGetHigh(1);
}

function samurizeWeatherGetDay1Low() {
	return weatherGetLow(1);
}

function samurizeWeatherGetDay1Desc() {
	return weatherGetDesc(1, true);
}

function samurizeWeatherGetDay2Date() {
	return weatherGetDate(2);
}

function samurizeWeatherGetDay2Icon() {
	return weatherGetIcon(2);
}

function samurizeWeatherGetDay2High() {
	return weatherGetHigh(2);
}

function samurizeWeatherGetDay2Low() {
	return weatherGetLow(2);
}

function samurizeWeatherGetDay2Desc() {
	return weatherGetDesc(2, true);
}

function samurizeWeatherGetDay3Date() {
	return weatherGetDate(3);
}

function samurizeWeatherGetDay3Icon() {
	return weatherGetIcon(3);
}

function samurizeWeatherGetDay3High() {
	return weatherGetHigh(3);
}

function samurizeWeatherGetDay3Low() {
	return weatherGetLow(3);
}

function samurizeWeatherGetDay3Desc() {
	return weatherGetDesc(3, true);
}

function samurizeWeatherGetDay0Prec() {
	return weatherGetPrecipitation(0);
}

function samurizeWeatherGetDay1Prec() {
	return weatherGetPrecipitation(1);
}

function samurizeWeatherGetDay2Prec() {
	return weatherGetPrecipitation(2);
}

function samurizeWeatherGetDay3Prec() {
	return weatherGetPrecipitation(3);
}

function samurizeExchangeRatesEUR() {
	return exchangeRates("EUR");
}

function samurizeExchangeRatesGBP() {
	return exchangeRates("GBP");
}

function samurizeExchangeRatesUSD() {
	return exchangeRates("USD");
}

function samurizeExchangeRatesDetails() {
	return exchangeRates("details");
}

function samurizeGetSunrise() {
	return getSunrise();
}

function samurizeGetSunset() {
	return getSunset();
}

function samurizeGetNextSunEvent() {
	return getNextSunEvent();
}


////////////////////
// EXCHANGE RATES //
////////////////////

function exchangeRates(req) {
	var xRData = exchangeratesdata;
	var re = [];

	if (req !== "details") {
		var symbols = {	"EUR": "€", "GBP": "£", "USD": "$" };

		var uSDInHUF = xRData.quotes["USDHUF"];
		var responseValue = uSDInHUF;
		if (req !== "USD") {
			responseValue = responseValue * (1 / xRData.quotes["USD"+req]);
		}
		
		re.push(symbols[req] + ": " + Math.round(responseValue));
	} else {
		var dobj = new Date(xRData.timestamp * 1000);
		re.push("Base currency: HUF\nJSON date: " + MONTHS[dobj.getMonth()] + " " + dobj.getDate() + ", " + dobj.getFullYear());
	}

	return re.join("");
}


/////////////
// WEATHER //
/////////////

var char_degrees = "°";
var char_middot = "·";
var char_rain = "•";
var char_snow = "¤";

function weatherGetLoc() {
	var lat = latitude;
	var long = longitude;
	var	locstr = "";
	if (Number(lat) < 0) {
		locstr = Math.abs(lat) + char_degrees + "S";
	} else {
		locstr = lat + char_degrees + "N";
	}
	locstr += " ";
	if (Number(long) < 0) {
		locstr += Math.abs(long) + char_degrees + "E";
	} else {
		locstr += long + char_degrees + "W";
	}
	return locstr;
}

function toDateObject(raw) {
	var dobj = new Date(
		Number(raw.substr(0, 4)),
		Number(raw.substr(5, 2)) - 1,
		Number(raw.substr(8, 2))
	);
	return dobj;
}

function dateDifference(compareWith, format) {
	var twelveAMToday = new Date();
	twelveAMToday.setHours(0, 0, 0, 0);
	var diff = (twelveAMToday.getTime() - compareWith.getTime()) / ONE_DAY;
	if (diff > -1 && diff < 1) {
		return "Today";
	} else if (diff >= 1 && diff < 2) {
		if (format === "cal") return Math.round(diff) + "d ago";
		return "Yesterday";
	} else if (diff >= 2) {
		return Math.round(diff) + "d ago";
	} else if (diff <= -1 && diff > -2) {
		if (format === "cal") return Math.round(diff) + "d from now";
		return "Tomorrow";
	} else if (diff <= -2) {
		return Math.abs(Math.round(diff)) + "d from now";
	} else {
		return "!unhandled diff: " + diff;
	}
}

function dayNoToId(dayNo, dayOrNight){
	var re = 0;

	// on day 0 we always show the value of item[0]
	if (dayNo != 0) {
		var item0offset = Number(weatherdata.list[0].dt_txt.substr(11,2)) / 3;
		// one day is 8 three hour items
		re = (dayNo * 8) - item0offset;
		if (dayOrNight == "noon") {
			re = re + 4;
		}
	}
	
	return re;

}

function weatherGetDate(dayNo) {
	var dayId = dayNoToId(dayNo, "12am");
	var dobj = toDateObject(weatherdata.list[dayId].dt_txt);
	if (dayNo == 0) {
		return dateDifference(dobj, "cal");
	} else {
		return WEEKDAYS_THREE_LETTER[dobj.getDay()];
	}
}

function weatherGetIcon(dayNo) {
	var dayId = dayNoToId(dayNo, "noon");
	return weatherdata.list[dayId].weather[0].id + ".png";
}

function weatherGetHigh(dayNo) {
	var dayId = dayNoToId(dayNo, "noon");
	return Math.round(weatherdata.list[dayId].main.temp) + char_degrees;
}

function weatherGetLow(dayNo) {
	var dayId = dayNoToId(dayNo, "12am");
	var re;
	if(dayNo == 0){
		// re = weatherdata.list[0].dt_txt.substr(11,5);
		var lastId = dayNoToId(1) - 1;
		re = Math.round(weatherdata.list[lastId].main.temp) + char_degrees;
	} else {
		re = Math.round(weatherdata.list[(dayId + 7)].main.temp) + char_degrees;
	}
	return re;
}

function windDirection(deg) {
	if (deg >= 0 && deg < 11.25) {
		return "North";
	} else if (deg >= 12.25 && deg < 33.75) {
		return "North/Northeast";
	} else if (deg >= 33.75 && deg < 56.25) {
		return "Northeast";
	} else if (deg >= 56.25 && deg < 78.75) {
		return "East/Northeast";
	} else if (deg >= 78.75 && deg < 101.25) {
		return "East";
	} else if (deg >= 101.25 && deg < 123.75) {
		return "East/Southeast";
	} else if (deg >= 123.75 && deg < 146.25) {
		return "Southeast";
	} else if (deg >= 146.25 && deg < 168.75) {
		return "South/Southeast";
	} else if (deg >= 168.75 && deg < 191.25) {
		return "South";
	} else if (deg >= 191.25 && deg < 213.75) {
		return "South/Southwest";
	} else if (deg >= 213.75 && deg < 236.25) {
		return "Southwest";
	} else if (deg >= 236.25 && deg < 258.75) {
		return "West/Southwest";
	} else if (deg >= 258.75 && deg < 281.25) {
		return "West";
	} else if (deg >= 281.25 && deg < 303.75) {
		return "West/Northwest";
	} else if (deg >= 303.75 && deg < 326.25) {
		return "Northwest";
	} else if (deg >= 326.25 && deg < 348.75) {
		return "North/Northwest";
	} else if (deg >= 348.75 && deg <= 360) {
		return "North";
	}
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function leftPad(num) {
	var str = String(num);
	var padWith = "    ";
	return (padWith + str).slice(-padWith.length);
}

function repeat(times, char) {
	var re = [];
	for (var i=0; i < times; i++) {
		re.push(char);
	}
	return re.join("");
}

function precDisplay(rain, snow) {
	var reply = "";

	if (rain > 0 && rain <= 2) reply = repeat(1, char_rain);
	if (rain > 2 && rain <= 10) reply = repeat(2, char_rain);
	if (rain > 10 && rain <= 20) reply = repeat(3, char_rain);
	if (rain > 20 && rain <= 30) reply = repeat(4, char_rain);
	if (rain > 30) reply = repeat(5, char_rain);
	
	if (snow > 0 && snow <= 2) reply = repeat(1, char_snow);
	if (snow > 2 && snow <= 10) reply = repeat(2, char_snow);
	if (snow > 10 && snow <= 20) reply = repeat(3, char_snow);
	if (snow > 20 && snow <= 30) reply = repeat(4, char_snow);
	if (snow > 30) reply = repeat(5, char_snow);

	return reply;
}

function weatherGetDesc(dayNo, tooltipMode, layer) {
	var reply = [];
	var debug = [];
	var dayId = dayNoToId(dayNo, "noon");
	var dobj = toDateObject(weatherdata.list[dayId].dt_txt);

	if (!layer) layer = 0;

	var layers = {1: [], 2: [], 3: [], 4: [], 5: []};

	if (tooltipMode) {
		reply.push(
			dobj.toLocaleDateString("en-US", {
				weekday: "long",
				year: "numeric",
				month: "long",
				day: "numeric"
			}) + "\n"
		);	
	}

	if (tooltipMode) reply.push("-----\n");

	var dayStart, dayEnd;

	if (dayNo == 0) {
		dayStart = 0;
		dayEnd = dayNoToId(1, "12am") - 1;
	} else {
		dayStart = dayNoToId(dayNo, "12am");
		dayEnd = dayStart + 7;
	}

	if (!tooltipMode) {
		// we show the next 24 hours
		dayStart = 0;
		dayEnd = 7;
		// ... and the current windspeed, pressure and humidity
		dayId = 0;
	}

	var rain = 0;
	var snow = 0;
	var rainTotal = 0;
	var snowTotal = 0;
	var prevDesc = "";
	var currentDesc = "";

	for (var d=dayStart; d<=dayEnd; d++){
		var itemTime = weatherdata.list[d].dt_txt.substr(11,5);
		
		if (d > dayStart && itemTime === "00:00") {
			reply.push("-----\n");
			layers[4].push("-----\n");
			layers[1].push("\n");
			layers[2].push("\n");
			layers[3].push("\n");
		}
		// if (d > dayStart && itemTime === "00:00") reply.push("\n");
		
		if (weatherdata.list[d].rain !== undefined) {
			if (weatherdata.list[d].rain["3h"] > 0){
				rain = Number(weatherdata.list[d].rain["3h"]);
				rainTotal = rainTotal + rain;
			}
		}

		if (weatherdata.list[d].snow !== undefined) {
			if (weatherdata.list[d].snow["3h"] > 0){
				snow = Number(weatherdata.list[d].snow["3h"]);
				snowTotal = snowTotal + snow;
			}
		}

		currentDesc = capitalizeFirstLetter(weatherdata.list[d].weather[0].description);
		
		var breakdown = [];
		
		var showTime = itemTime;
		if (itemTime.substr(0,1) === "0") showTime = "  " + itemTime.substr(1);

		breakdown.push(
			showTime + 
			"  " + 
			leftPad(Math.round(weatherdata.list[d].main.temp)) + char_degrees
		);
		layers[1].push(showTime);
		layers[2].push(Math.round(weatherdata.list[d].main.temp) + char_degrees);

		if (currentDesc != prevDesc) {
			breakdown.push("    ");
			if (rain > 0 || snow > 0) {
				breakdown.push(precDisplay(rain, snow) + " ");
				layers[3].push(precDisplay(rain, snow) + " ");
			}
			breakdown.push(currentDesc);
			layers[3].push(currentDesc);
		}
		prevDesc = currentDesc;
		breakdown.push("\n");
		layers[1].push("\n");
		layers[2].push("\n");
		layers[3].push("\n");
		layers[4].push("\n");

		reply.push(breakdown.join(""));

		rain = 0;
		snow = 0;
	}

	if (tooltipMode) reply.push("-----\n");

	var precData = [];
	precData.push("Precipitation: ");
	if (rainTotal == 0) {
		precData.push("-");
	} else {
		precData.push(rainTotal.toFixed(2) + " mm");
	}
	if (snowTotal > 0) {
		precData.push(
			" " +
				char_middot +
				" snow: " +
				snowTotal.toFixed(2) +
				" cm"
		);
	}
	precData.push("\n");
	reply.push(precData.join(""));
	layers[5].push(precData.join(""));

	var windData = [];
	windData.push("Wind: ");
	if (weatherdata.list[dayId].wind.speed == 0) {
		windData.push("-");
	} else {
		windData.push(
			Math.round(Number(weatherdata.list[dayId].wind.speed) * 3.6) + " km/h"
		);
		windData.push(
			" " +
				char_middot +
				" dir.: " +
				windDirection(
					Number(weatherdata.list[dayId].wind.deg)
				)
		);
	}
	windData.push("\n");
	reply.push(windData.join(""));
	layers[5].push(windData.join(""));

	if (tooltipMode) reply.push("-----");
	if (tooltipMode || ((dayEnd - dayStart) < 7)) {
		reply.push("\n");
		layers[5].push("\n");
	}

	var pressureTx = "Pressure: " +
			Math.round(weatherdata.list[dayId].main.grnd_level) + " hPa";
	reply.push(pressureTx);
	layers[5].push(pressureTx);

	if (tooltipMode || weatherdata.list[0].dt_txt.substr(11,5) === "00:00") {
		reply.push("\n");
		layers[5].push("\n");
	} else {
		reply.push(" " + char_middot + " ");
		layers[5].push(" " + char_middot + " ");
	}

	var humidityTx = "Humidity: " + weatherdata.list[dayId].main.humidity + "%\n";
	reply.push(humidityTx);
	layers[5].push(humidityTx);

	var longestRow = 0;
	for (j = 0; j < reply.length; j++) {
		reply[j].length > longestRow ? (longestRow = reply[j].length) : null;
	}

	var dots = [];
	var dotRowLength = Math.ceil(longestRow / 1.7);

	if (!tooltipMode) dotRowLength = 26;

	for (k = 0; k < dotRowLength; k++) {
		dots.push(" " + char_middot + " ");
	}

	// reply.push("-----\n");
	// reply.push(debug.join(" .. "));

	var re = "";

	if (layer == 0) {
		re = reply;
	} else {
		re = layers[layer];
	}

	return re.join("").replace(/-----/g, dots.join(""));
}

function weatherGetPrecipitation(dayNo) {
	var dayStart, dayEnd;

	if (dayNo == 0) {
		dayStart = 0;
		dayEnd = dayNoToId(1, "12am") - 1;
	} else {
		dayStart = dayNoToId(dayNo, "12am");
		dayEnd = dayStart + 7;
	}

	var rain = 0;
	var snow = 0;
	for (var d=dayStart; d<=dayEnd; d++) {
		if (weatherdata.list[d].rain !== undefined) {
			if (weatherdata.list[d].rain["3h"] > 0){
				rain = rain + Number(weatherdata.list[d].rain["3h"]);
						
			}
		}

		if (weatherdata.list[d].snow !== undefined) {
			if (weatherdata.list[d].snow["3h"] > 0){
				snow = snow + Number(weatherdata.list[d].snow["3h"]);
			}
		}
	}

	return precDisplay(rain, snow);
}


//////////////
// CALENDAR //
//////////////

var lowlimit = NOW_TIMESTAMP - ONE_DAY;
var highlimit = NOW_TIMESTAMP + (calrange + 1) * ONE_DAY;

function dateform(input) {
	var darray = input.split(" ");

	var monthlit = darray[0];
	var daylit = darray[1];
	var day = daylit.substring(0, daylit.length - 1);
	var year = darray[2];
	var month;

	for (i = 0; i < MONTHS.length; i++) {
		if (MONTHS[i].toUpperCase() == monthlit) month = i;
	}
	var tmpdate = new Date();
	tmpdate.setFullYear(year, month, day);
	var tmptimestamp = tmpdate.getTime();
	if (tmptimestamp > lowlimit && tmptimestamp < highlimit) {
		return year + "x" + month + "x" + day;
	} else {
		return "0";
	}
}

var char_daypointer = "»";

function calendar(req) {
	var cal_1 =
		MONTHS[NOW_OBJ.getMonth()].toUpperCase() +
		"\n" +
		char_daypointer +
		"   ";
	var cal_2 = "\n";
	//var cal_3 = "\n";
	//var cal_4 = "\n";

	// determine dates of the events in 'calevents'
	/*var rcdates_thisyear = new Array();
	var rcdates_nextyear = new Array();
	var nrcdates = new Array();

	var thisyear = NOW_OBJ.getFullYear();
	var nextyear = thisyear + 1;
	for (j = 0; j < calevents.recurring.length; j++) {
		tdate = calevents.recurring[j].date;

		tmp = dateform(tdate + ", " + thisyear);
		rcdates_thisyear.push(tmp);

		tmp2 = dateform(tdate + ", " + nextyear);
		rcdates_nextyear.push(tmp2);
	}

	for (k = 0; k < calevents.non_recurring.length; k++) {
		tmp = dateform(calevents.non_recurring[k].date);
		nrcdates.push(tmp);
	}*/

	// loop tickers
	var weekdayticker = NOW_OBJ.getDay();
	var dateticker = NOW_OBJ.getTime();
	//	var frdticker=frdday;

	// MAIN LOOP //
	// --------- //

	for (i = 0; i < calrange; i++) {
		var td = new Date(dateticker);
		tday = td.getDate();

		// start of a month
		if (tday == 1 && i != 0) {
			cal_1 += "\n" + MONTHS[td.getMonth()].toUpperCase() + "\n";
			cal_2 += "\n\n";
			// cal_3 += "\n\n";
			// cal_4 += "\n\n";
		}

		// slingshot indicator
		//		if (i!=0)
		//		{
		//			if (frdticker==0 || frdticker==3)
		//			{
		//				cal_1+="-   ";
		//			}
		//		}

		// leading zero
		if (tday < 10) {
			cal_1 += "   ";
		}

		// weekday indicator
		cal_2 += WEEKDAYS_ONE_LETTER[weekdayticker];

		// events
		/*if (req == 3 || req == 4) {
			events = "";

			trtoday =
				td.getFullYear() + "x" + td.getMonth() + "x" + td.getDate();

			specevent = false;

			for (o = 0; o < nrcdates.length; o++) {
				if (nrcdates[o] == trtoday) {
					events += calevents.non_recurring[o].event + ", ";
					specevent = true;
				}
			}

			for (m = 0; m < rcdates_thisyear.length; m++) {
				if (rcdates_thisyear[m] == trtoday) {
					events += calevents.recurring[m].event + ", ";
					specevent = true;
				}
			}

			for (n = 0; n < rcdates_nextyear.length; n++) {
				if (rcdates_nextyear[n] == trtoday) {
					events += calevents.recurring[n].event + ", ";
					specevent = true;
				}
			}

			for (p = 0; p < calevents.weekly.length; p++) {
				if (calevents.weekly[p].date == weekdayticker)
					events += calevents.weekly[p].event + ", ";
			}

			if (events.length > 0) {
				if (specevent) {
					cal_3 += ">   ";
					//cal_3+=events.substring(0,events.length-2)+" ("+(i+1)+")";
					cal_3 +=
						events.substring(0, events.length - 2) + " (" + i + ")";
				} else {
					cal_4 += "     ";
					cal_4 += events.substring(0, events.length - 2);
				}
			}
		}*/

		// main printer
		cal_1 += td.getDate() + "\n";
		cal_2 += "\n";
		// cal_3 += "\n";
		// cal_4 += "\n";

		// iterator
		dateticker += ONE_DAY;

		if (weekdayticker == 6) {
			weekdayticker = 0;
		} else {
			weekdayticker++;
		}

		//		if (frdticker==sequence_length-1)
		//		{
		//			frdticker=0;
		//		} else {
		//			frdticker++;
		//		}
	}

	if (req == 1) {
		return cal_1;
	} else if (req == 2) {
		return cal_2;
	} /* else if (req == 3) {
		return cal_3;
	} else if (req == 4) {
		return cal_4;
	}*/
}

function wordwrap(str, width, brk, cut) {
	var brk = brk || "\n";
	var width = width || 75;
	var cut = cut || false;

	if (!str) {
		return str;
	}

	var regex =
		".{1," +
		width +
		"}(\\s|$)" +
		(cut ? "|.{" + width + "}|.+$" : "|\\S+?(\\s|$)");

	return str.match(RegExp(regex, "g")).join(brk);
}

function gettasks() {
	taskset = new Array();
	for (i = calevents.tasks.length - 1; i >= 0; i--) {
		taskset.push(wordwrap(calevents.tasks[i].task, 60, "\n    "));
	}
	return ">  " + taskset.join("\n>  ");
}


/////////////////////////////////
// SUNRISE/SUNSET CALCULATIONS //
/////////////////////////////////

// Adapted from Stephen P. Morse (http://stevemorse.org/jcal/sunrise.js)

//var NOW_OBJ = new Date();
var thisyear = NOW_OBJ.getFullYear();
var thismonth = NOW_OBJ.getMonth() + 1;
var thisday = NOW_OBJ.getDate();
var ndminuteoftoday = NOW_OBJ.getHours() * 60 + NOW_OBJ.getMinutes();

var JD = calcJD(thisyear, thismonth, thisday);

function formatSsSr(inmins, showrelative) {
	diff = inmins + utc_correction * 60 - ndminuteoftoday;

	phrase = "";

	if (diff >= 0 && showrelative) {
		dhour = Math.floor(diff / 60);
		dminute = Math.round(Math.abs(diff) % 60);
		if (dminute < 10) {
			dminute = "0" + dminute;
		}
		phrase += "(+ " + String(dhour) + ":" + String(dminute) + ")";
	} else {
		hour = Math.floor(inmins / 60) + utc_correction;
		min = inmins % 60;
		phrase += convertTo12Hr(hour, min);
	}

	return phrase;
}

function getSunrise() {
	inmins = Math.floor(calcSunriseUTC(JD, latitude, longitude));
	return formatSsSr(inmins, true);
}

function getSunset() {
	inmins = Math.floor(calcSunsetUTC(JD, latitude, longitude));
	return formatSsSr(inmins, false);

	//hour=Math.floor(inmins/60) + utc_correction;
	//min=inmins%60;
	//return convertTo12Hr(hour,min);
}

function getNextSunEvent() {
	var utcCorrectionMins = utc_correction * 60;
	var sunriseMins = Math.floor(calcSunriseUTC(JD, latitude, longitude)) + utcCorrectionMins;
	var sunsetMins = Math.floor(calcSunsetUTC(JD, latitude, longitude)) + utcCorrectionMins;

	function getDiffStr(diff) {
		var dhour = Math.floor(diff / 60);
		var dminute = Math.round(Math.abs(diff) % 60);
		if (dminute < 10) {
			dminute = "0" + dminute;
		}

		return String(dhour) + ":" + String(dminute);
	}

	function getTimeStr(inMins) {
		var hour = Math.floor(inMins / 60);
		var min = inMins % 60;

		return convertTo12Hr(hour, min);
	}

	if (sunriseMins > ndminuteoftoday) {
		// before sunrise (night)
		return "Sunrise in " + getDiffStr(sunriseMins - ndminuteoftoday) + " at " + getTimeStr(sunriseMins) + "";
	} else if (sunsetMins > ndminuteoftoday) {
		// before sunset (day)
		return "Sunset in " + getDiffStr(sunsetMins - ndminuteoftoday) + " at " + getTimeStr(sunsetMins) + "";
	} else {
		// after sunset (night)
		return "Sunrise in " + getDiffStr((sunriseMins + 24 * 60) - ndminuteoftoday) + " at " + getTimeStr(sunriseMins) + "";
	}
}

function convertTo12Hr(hour, min) {
	suffix = "";
	if (hour > 12) {
		hour -= 12;
		//suffix="PM";
	}
	if (min < 10) {
		min = "0" + min;
	}
	return hour + ":" + min + suffix;
}

// Convert radian angle to degrees

function radToDeg(angleRad) {
	return 180.0 * angleRad / Math.PI;
}

// Convert degree angle to radians

function degToRad(angleDeg) {
	return Math.PI * angleDeg / 180.0;
}

//***********************************************************************/
//* Name:    calcJD														*/
//* Type:    Function													*/
//* Purpose: Julian day from calendar day								*/
//* Arguments:															*/
//*   year : 4 digit year												*/
//*   month: January = 1												*/
//*   day  : 1 - 31														*/
//* Return value:														*/
//*   The Julian day corresponding to the date							*/
//* Note:																*/
//*   Number is returned for start of day.  Fractional days should be	*/
//*   added later.														*/
//***********************************************************************/

function calcJD(year, month, day) {
	if (month <= 2) {
		year -= 1;
		month += 12;
	}
	var A = Math.floor(year / 100);
	var B = 2 - A + Math.floor(A / 4);

	var JD =
		Math.floor(365.25 * (year + 4716)) +
		Math.floor(30.6001 * (month + 1)) +
		day +
		B -
		1524.5;
	return JD;
}

//***********************************************************************/
//* Name:    calcTimeJulianCent											*/
//* Type:    Function													*/
//* Purpose: convert Julian Day to centuries since J2000.0.				*/
//* Arguments:															*/
//*   jd : the Julian Day to convert									*/
//* Return value:														*/
//*   the T value corresponding to the Julian Day						*/
//***********************************************************************/

function calcTimeJulianCent(jd) {
	var T = (jd - 2451545.0) / 36525.0;
	return T;
}

//***********************************************************************/
//* Name:    calcJDFromJulianCent										*/
//* Type:    Function													*/
//* Purpose: convert centuries since J2000.0 to Julian Day.				*/
//* Arguments:															*/
//*   t : number of Julian centuries since J2000.0						*/
//* Return value:														*/
//*   the Julian Day corresponding to the t value						*/
//***********************************************************************/

function calcJDFromJulianCent(t) {
	var JD = t * 36525.0 + 2451545.0;
	return JD;
}

//***********************************************************************/
//* Name:    calGeomMeanLongSun											*/
//* Type:    Function													*/
//* Purpose: calculate the Geometric Mean Longitude of the Sun			*/
//* Arguments:															*/
//*   t : number of Julian centuries since J2000.0						*/
//* Return value:														*/
//*   the Geometric Mean Longitude of the Sun in degrees				*/
//***********************************************************************/

function calcGeomMeanLongSun(t) {
	var L0 = 280.46646 + t * (36000.76983 + 0.0003032 * t);
	while (L0 > 360.0) {
		L0 -= 360.0;
	}
	while (L0 < 0.0) {
		L0 += 360.0;
	}
	return L0; // in degrees
}

//***********************************************************************/
//* Name:    calGeomAnomalySun											*/
//* Type:    Function													*/
//* Purpose: calculate the Geometric Mean Anomaly of the Sun			*/
//* Arguments:															*/
//*   t : number of Julian centuries since J2000.0						*/
//* Return value:														*/
//*   the Geometric Mean Anomaly of the Sun in degrees					*/
//***********************************************************************/

function calcGeomMeanAnomalySun(t) {
	var M = 357.52911 + t * (35999.05029 - 0.0001537 * t);
	return M; // in degrees
}

//***********************************************************************/
//* Name:    calcEccentricityEarthOrbit									*/
//* Type:    Function													*/
//* Purpose: calculate the eccentricity of earth's orbit				*/
//* Arguments:															*/
//*   t : number of Julian centuries since J2000.0						*/
//* Return value:														*/
//*   the unitless eccentricity											*/
//***********************************************************************/

function calcEccentricityEarthOrbit(t) {
	var e = 0.016708634 - t * (0.000042037 + 0.0000001267 * t);
	return e; // unitless
}

//***********************************************************************/
//* Name:    calcSunEqOfCenter											*/
//* Type:    Function													*/
//* Purpose: calculate the equation of center for the sun				*/
//* Arguments:															*/
//*   t : number of Julian centuries since J2000.0						*/
//* Return value:														*/
//*   in degrees														*/
//***********************************************************************/

function calcSunEqOfCenter(t) {
	var m = calcGeomMeanAnomalySun(t);

	var mrad = degToRad(m);
	var sinm = Math.sin(mrad);
	var sin2m = Math.sin(mrad + mrad);
	var sin3m = Math.sin(mrad + mrad + mrad);

	var C =
		sinm * (1.914602 - t * (0.004817 + 0.000014 * t)) +
		sin2m * (0.019993 - 0.000101 * t) +
		sin3m * 0.000289;
	return C; // in degrees
}

//***********************************************************************/
//* Name:    calcSunTrueLong											*/
//* Type:    Function													*/
//* Purpose: calculate the true longitude of the sun					*/
//* Arguments:															*/
//*   t : number of Julian centuries since J2000.0						*/
//* Return value:														*/
//*   sun's true longitude in degrees									*/
//***********************************************************************/

function calcSunTrueLong(t) {
	var l0 = calcGeomMeanLongSun(t);
	var c = calcSunEqOfCenter(t);

	var O = l0 + c;
	return O; // in degrees
}

//***********************************************************************/
//* Name:    calcSunTrueAnomaly											*/
//* Type:    Function													*/
//* Purpose: calculate the true anamoly of the sun						*/
//* Arguments:															*/
//*   t : number of Julian centuries since J2000.0						*/
//* Return value:														*/
//*   sun's true anamoly in degrees										*/
//***********************************************************************/

function calcSunTrueAnomaly(t) {
	var m = calcGeomMeanAnomalySun(t);
	var c = calcSunEqOfCenter(t);

	var v = m + c;
	return v; // in degrees
}

//***********************************************************************/
//* Name:    calcSunRadVector											*/
//* Type:    Function													*/
//* Purpose: calculate the distance to the sun in AU					*/
//* Arguments:															*/
//*   t : number of Julian centuries since J2000.0						*/
//* Return value:														*/
//*   sun radius vector in AUs											*/
//***********************************************************************/

function calcSunRadVector(t) {
	var v = calcSunTrueAnomaly(t);
	var e = calcEccentricityEarthOrbit(t);

	var R = 1.000001018 * (1 - e * e) / (1 + e * Math.cos(degToRad(v)));
	return R; // in AUs
}

//***********************************************************************/
//* Name:    calcSunApparentLong										*/
//* Type:    Function													*/
//* Purpose: calculate the apparent longitude of the sun				*/
//* Arguments:															*/
//*   t : number of Julian centuries since J2000.0						*/
//* Return value:														*/
//*   sun's apparent longitude in degrees								*/
//***********************************************************************/

function calcSunApparentLong(t) {
	var o = calcSunTrueLong(t);

	var omega = 125.04 - 1934.136 * t;
	var lambda = o - 0.00569 - 0.00478 * Math.sin(degToRad(omega));
	return lambda; // in degrees
}

//***********************************************************************/
//* Name:    calcMeanObliquityOfEcliptic								*/
//* Type:    Function													*/
//* Purpose: calculate the mean obliquity of the ecliptic				*/
//* Arguments:															*/
//*   t : number of Julian centuries since J2000.0						*/
//* Return value:														*/
//*   mean obliquity in degrees											*/
//***********************************************************************/

function calcMeanObliquityOfEcliptic(t) {
	var seconds = 21.448 - t * (46.815 + t * (0.00059 - t * 0.001813));
	var e0 = 23.0 + (26.0 + seconds / 60.0) / 60.0;
	return e0; // in degrees
}

//***********************************************************************/
//* Name:    calcObliquityCorrection									*/
//* Type:    Function													*/
//* Purpose: calculate the corrected obliquity of the ecliptic			*/
//* Arguments:															*/
//*   t : number of Julian centuries since J2000.0						*/
//* Return value:														*/
//*   corrected obliquity in degrees									*/
//***********************************************************************/

function calcObliquityCorrection(t) {
	var e0 = calcMeanObliquityOfEcliptic(t);

	var omega = 125.04 - 1934.136 * t;
	var e = e0 + 0.00256 * Math.cos(degToRad(omega));
	return e; // in degrees
}

//***********************************************************************/
//* Name:    calcSunRtAscension											*/
//* Type:    Function													*/
//* Purpose: calculate the right ascension of the sun					*/
//* Arguments:															*/
//*   t : number of Julian centuries since J2000.0						*/
//* Return value:														*/
//*   sun's right ascension in degrees									*/
//***********************************************************************/

function calcSunRtAscension(t) {
	var e = calcObliquityCorrection(t);
	var lambda = calcSunApparentLong(t);

	var tananum = Math.cos(degToRad(e)) * Math.sin(degToRad(lambda));
	var tanadenom = Math.cos(degToRad(lambda));
	var alpha = radToDeg(Math.atan2(tananum, tanadenom));
	return alpha; // in degrees
}

//***********************************************************************/
//* Name:    calcSunDeclination											*/
//* Type:    Function													*/
//* Purpose: calculate the declination of the sun						*/
//* Arguments:															*/
//*   t : number of Julian centuries since J2000.0						*/
//* Return value:														*/
//*   sun's declination in degrees										*/
//***********************************************************************/

function calcSunDeclination(t) {
	var e = calcObliquityCorrection(t);
	var lambda = calcSunApparentLong(t);

	var sint = Math.sin(degToRad(e)) * Math.sin(degToRad(lambda));
	var theta = radToDeg(Math.asin(sint));
	return theta; // in degrees
}

//***********************************************************************/
//* Name:    calcEquationOfTime											*/
//* Type:    Function													*/
//* Purpose: calculate the difference between true solar time and mean	*/
//*		solar time														*/
//* Arguments:															*/
//*   t : number of Julian centuries since J2000.0						*/
//* Return value:														*/
//*   equation of time in minutes of time								*/
//***********************************************************************/

function calcEquationOfTime(t) {
	var epsilon = calcObliquityCorrection(t);
	var l0 = calcGeomMeanLongSun(t);
	var e = calcEccentricityEarthOrbit(t);
	var m = calcGeomMeanAnomalySun(t);

	var y = Math.tan(degToRad(epsilon) / 2.0);
	y *= y;

	var sin2l0 = Math.sin(2.0 * degToRad(l0));
	var sinm = Math.sin(degToRad(m));
	var cos2l0 = Math.cos(2.0 * degToRad(l0));
	var sin4l0 = Math.sin(4.0 * degToRad(l0));
	var sin2m = Math.sin(2.0 * degToRad(m));

	var Etime =
		y * sin2l0 -
		2.0 * e * sinm +
		4.0 * e * y * sinm * cos2l0 -
		0.5 * y * y * sin4l0 -
		1.25 * e * e * sin2m;

	return radToDeg(Etime) * 4.0; // in minutes of time
}

//***********************************************************************/
//* Name:    calcHourAngleSunrise										*/
//* Type:    Function													*/
//* Purpose: calculate the hour angle of the sun at sunrise for the		*/
//*			latitude													*/
//* Arguments:															*/
//*   lat : latitude of observer in degrees								*/
//*	solarDec : declination angle of sun in degrees						*/
//* Return value:														*/
//*   hour angle of sunrise in radians									*/
//***********************************************************************/

function calcHourAngleSunrise(lat, solarDec) {
	var latRad = degToRad(lat);
	var sdRad = degToRad(solarDec);

	var HAarg =
		Math.cos(degToRad(90.833)) / (Math.cos(latRad) * Math.cos(sdRad)) -
		Math.tan(latRad) * Math.tan(sdRad);

	var HA = Math.acos(
		Math.cos(degToRad(90.833)) / (Math.cos(latRad) * Math.cos(sdRad)) -
			Math.tan(latRad) * Math.tan(sdRad)
	);

	return HA; // in radians
}

//***********************************************************************/
//* Name:    calcHourAngleSunset										*/
//* Type:    Function													*/
//* Purpose: calculate the hour angle of the sun at sunset for the		*/
//*			latitude													*/
//* Arguments:															*/
//*   lat : latitude of observer in degrees								*/
//*	solarDec : declination angle of sun in degrees						*/
//* Return value:														*/
//*   hour angle of sunset in radians									*/
//***********************************************************************/

function calcHourAngleSunset(lat, solarDec) {
	var latRad = degToRad(lat);
	var sdRad = degToRad(solarDec);

	var HAarg =
		Math.cos(degToRad(90.833)) / (Math.cos(latRad) * Math.cos(sdRad)) -
		Math.tan(latRad) * Math.tan(sdRad);

	var HA = Math.acos(
		Math.cos(degToRad(90.833)) / (Math.cos(latRad) * Math.cos(sdRad)) -
			Math.tan(latRad) * Math.tan(sdRad)
	);

	return -HA; // in radians
}

//***********************************************************************/
//* Name:    calcSunriseUTC												*/
//* Type:    Function													*/
//* Purpose: calculate the Universal Coordinated Time (UTC) of sunrise	*/
//*			for the given day at the given location on earth			*/
//* Arguments:															*/
//*   JD  : julian day													*/
//*   latitude : latitude of observer in degrees						*/
//*   longitude : longitude of observer in degrees						*/
//* Return value:														*/
//*   time in minutes from zero Z										*/
//***********************************************************************/

function calcSunriseUTC(JD, latitude, longitude) {
	var t = calcTimeJulianCent(JD);

	// *** Find the time of solar noon at the location, and use
	//     that declination. This is better than start of the
	//     Julian day

	var noonmin = calcSolNoonUTC(t, longitude);
	var tnoon = calcTimeJulianCent(JD + noonmin / 1440.0);

	// *** First pass to approximate sunrise (using solar noon)

	var eqTime = calcEquationOfTime(tnoon);
	var solarDec = calcSunDeclination(tnoon);
	var hourAngle = calcHourAngleSunrise(latitude, solarDec);

	var delta = longitude - radToDeg(hourAngle);
	var timeDiff = 4 * delta; // in minutes of time
	var timeUTC = 720 + timeDiff - eqTime; // in minutes

	// alert("eqTime = " + eqTime + "\nsolarDec = " + solarDec + "\ntimeUTC = " + timeUTC);

	// *** Second pass includes fractional jday in gamma calc

	var newt = calcTimeJulianCent(calcJDFromJulianCent(t) + timeUTC / 1440.0);
	eqTime = calcEquationOfTime(newt);
	solarDec = calcSunDeclination(newt);
	hourAngle = calcHourAngleSunrise(latitude, solarDec);
	delta = longitude - radToDeg(hourAngle);
	timeDiff = 4 * delta;
	timeUTC = 720 + timeDiff - eqTime; // in minutes

	// alert("eqTime = " + eqTime + "\nsolarDec = " + solarDec + "\ntimeUTC = " + timeUTC);

	return timeUTC;
}

//***********************************************************************/
//* Name:    calcSolNoonUTC												*/
//* Type:    Function													*/
//* Purpose: calculate the Universal Coordinated Time (UTC) of solar	*/
//*		noon for the given day at the given location on earth			*/
//* Arguments:															*/
//*   t : number of Julian centuries since J2000.0						*/
//*   longitude : longitude of observer in degrees						*/
//* Return value:														*/
//*   time in minutes from zero Z										*/
//***********************************************************************/

function calcSolNoonUTC(t, longitude) {
	var newt = calcTimeJulianCent(
		calcJDFromJulianCent(t) + 0.5 + longitude / 360.0
	);

	var eqTime = calcEquationOfTime(newt);
	var solarNoonDec = calcSunDeclination(newt);
	var solNoonUTC = 720 + longitude * 4 - eqTime; // min

	return solNoonUTC;
}

//***********************************************************************/
//* Name:    calcSunsetUTC												*/
//* Type:    Function													*/
//* Purpose: calculate the Universal Coordinated Time (UTC) of sunset	*/
//*			for the given day at the given location on earth			*/
//* Arguments:															*/
//*   JD  : julian day													*/
//*   latitude : latitude of observer in degrees						*/
//*   longitude : longitude of observer in degrees						*/
//* Return value:														*/
//*   time in minutes from zero Z										*/
//***********************************************************************/

function calcSunsetUTC(JD, latitude, longitude) {
	var t = calcTimeJulianCent(JD);

	// *** Find the time of solar noon at the location, and use
	//     that declination. This is better than start of the
	//     Julian day

	var noonmin = calcSolNoonUTC(t, longitude);
	var tnoon = calcTimeJulianCent(JD + noonmin / 1440.0);

	// First calculates sunrise and approx length of day

	var eqTime = calcEquationOfTime(tnoon);
	var solarDec = calcSunDeclination(tnoon);
	var hourAngle = calcHourAngleSunset(latitude, solarDec);

	var delta = longitude - radToDeg(hourAngle);
	var timeDiff = 4 * delta;
	var timeUTC = 720 + timeDiff - eqTime;

	// first pass used to include fractional day in gamma calc

	var newt = calcTimeJulianCent(calcJDFromJulianCent(t) + timeUTC / 1440.0);
	eqTime = calcEquationOfTime(newt);
	solarDec = calcSunDeclination(newt);
	hourAngle = calcHourAngleSunset(latitude, solarDec);

	delta = longitude - radToDeg(hourAngle);
	timeDiff = 4 * delta;
	timeUTC = 720 + timeDiff - eqTime; // in minutes

	return timeUTC;
}

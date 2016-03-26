
var days = new Array("Sunday","Monday","Tuesday","Wednesday", "Thursday","Friday","Saturday");
var months = new Array('January','February','March', 'April','May','June','July','August','September', 'October','November','December');

function nths(day) {
	if (day == 1 || day == 21 || day == 31) return 'st';
	if (day == 2 || day == 22) return 'nd';
	if (day == 3 || day == 23) return 'rd'; return 'th';}

function getCorrectedYear(year) {
	year = year - 0;
	if (year < 70) return (2000 + year);
	if (year < 1900) return (1900 + year);    return year;}

function y2k(number) {
	return (number < 1000) ? number + 1900 : number; }

var date = new Date(document.lastModified);
var dateY2K = new Date(getCorrectedYear(date.getYear()),date.getMonth(),date.getDate());

document.writeln(days[dateY2K.getDay()]+', '+months[dateY2K.getMonth()]+' '+dateY2K.getDate()+nths(dateY2K.getDate())+' '+y2k(dateY2K.getYear()));



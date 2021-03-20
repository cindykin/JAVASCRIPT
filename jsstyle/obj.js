//cara membuat objek

//objek literal
var std1 = {
	nama : 'Lauren Koyuki',
	nid : '0892349291',
	email : 'laurenky@yuki.co.id',
	jurusan : 'teknik mesin',
}

var std2 = {
	nama : 'kosinus aoi',
	nid : '0892349291',
	email : 'laurenky@yuki.co.id',
	jurusan : 'teknik mesin',
}



// function declaration
function buatObjStudent (nama, nid, email, jurusan) {
	var std = {};
	std.nama = nama;
	std.nid = nid;
	std.email = email;
	std.jurusan = jurusan;
	return std;
}

//cara isi
var std3 = buatObjStudent('Koyuki', '6234532523', 'Koyuki@ere.com', 'STM');




//constructor
function Student (nama, nid, email, jurusan){
	this.nama = nama;
	this.nid = nid;
	this.email = email;
	this.jurusan = jurusan;
}

var std4 = new Student ('Koyuki', '093140941', 'koyuki@kie.com', 'STM');
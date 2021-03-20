function Angkot (sopir, jalur, penumpang, kas) {
	this.sopir = sopir;
	this.jalur = jalur;
	this.penumpang = penumpang;
	this.kas = kas;

	this.penumpangNaik = function(namaPenumpang) {
		this.penumpang.push (namaPenumpang);
		return this.penumpang;
	}

	this.penumpangTurun = function (namaPenumpang, bayar) {
		if (this.penumpang.length === 0) {
			alert ('Angkot masih kosong');
			return false;
		} 

		for (var i = 0; i < this.penumpang.length; i++) {
			if (this.penumpang[i] == namaPenumpang) {
				this.penumpang[i] = undefined;
				this.kas += bayar;
				return this.penumpang;
			}
		} 
	}
}




var angkot1 = new Angkot ('ucok', ['musi 1', 'ilir 3'], [], 0);

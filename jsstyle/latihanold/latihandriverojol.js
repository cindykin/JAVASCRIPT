var driver = []; //ini array kosong

 var tambahDriver = function (namaDriver, driver) {
 	//jika angkot kosong
 	if (driver.length == 0) {
 		//tambah penumpang di awal array
 		driver.push(namaDriver);
 		//return isi array n out dari function
 		return driver;
 	} else {
 		//telusuri sluruh kursi dri awal
 		for (var i = 0; i < driver.length; i++) {
 			//jika ada kursi kosong
 			if (driver[i] == undefined) {
 				//tambah penumpang dikursi tsb
 				driver[i] = namaDriver;
 				//return isi array n out dari function
 				return driver;
 			//jika sudah ada nama yg sama
 			} else if (driver[i] == namaDriver) {
 				//tampilkan pesan kesalahan
 				console.log ('maaf driver dengan nama ' + namaDriver + ' sudah terdaftar diaplikasi kami');
 				//return isi array n out dari function
 				return driver;
 			//jika seluruh kursi terisi
 			} else if (i == driver.length - 1) {
 				//tambah cust diakhir array
 				driver.push(namaDriver);
 				//return isi array n out dari function
 				return driver;
 			}
 			}
 		}
}

var hapusDriver = function (namaDriver, driver) {
	//jika angkot kosong
	if (driver.length == 0) {
		//tampilkan pesan angkot kosong
		//tidak mungkin ada penumpang yg turun
		console.log ('maaf aplikasi driver kami belum ada yang mendaftar :(');
		//return isi array n out dari function
		return driver;
	//else
	} else {
		//telusuri seluruh kursi dari awal
		for (var i = 0; i < driver.length; i++) {
			//jika nama penumpang sesuai
			if (driver[i] == namaDriver) {
				//hapus penumpang dengan mengubah namanya -> undefined
				driver[i] = undefined;
				//return isi array n out dari function
				return driver;
			//jika tak ada yang sesuai
			} else if (i == driver.length - 1) {
				//tampilkan pesan kesalahan
				console.log ('maaf nama driver yang anda masukkan belum terdaftar diaplikasi kami');
				//return isi array n out dari function
				return driver;
			}
		}
	}
}
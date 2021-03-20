 var customer = []; //ini array kosong

 var tambahCust = function (namaCust, customer) {
 	//jika angkot kosong
 	if (customer.length == 0){
 		//tambah penumpang di awal array
 		customer.push(namaCust);
 		//return isi array n out dari function
 		return customer;
	} else {
 		//telusuri sluruh kursi dri awal
 		for (var x = 0; x < customer.length; x++){
 			//jika ada kursi kosong
 			if (customer[x] == undefined) {
 				//tambah penumpang dikursi tsb
 				customer[x] = namaCust;
 				//return isi array n out dari function
 				return customer;
 			//jika sudah ada nama yg sama
 			} else if (customer[x] == namaCust) {
 				//tampilkan pesan kesalahan
 				console.log (namaCust + ' sudah ada didalam angkot');
 				//return isi array n out dari function
 				return customer;
 			//jika seluruh kursi terisi
 			} else if ( x == customer.length - 1) {
 				//tambah cust diakhir array
 				customer.push(namaCust);
 				//return isi array n out dari function
 				return customer;
			}
		}
	}
	
 }
//gunting = gajah
//batu = orang
//kertas = semut


function getBot () {
	const bot = Math.random()
	if (bot < 0.3) return 'kertas';
	if (bot >= 0.3 && bot < 0.6) return 'batu';
	return 'gunting';
}

function getHasil(bot, player) {
	if ( player == bot ) return 'SERI!';
	if ( player == 'gunting' ) return (bot == 'batu') ? 'KALAH !' : 'MENANG !';
	if ( player == 'batu') return (bot == 'kertas') ? 'KALAH !' : 'MENANG !';
	if ( player == 'kertas' ) return (bot == 'gunting') ? 'KALAH !' : 'MENANG !';	
}

const pGajah = document.getElementsByClassName('gajah')[0];
pGajah.style.backgroundColor = 'red';
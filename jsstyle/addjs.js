javascript = js.

bagaimana cara untuk memasukkan js ke html ?
1. embed 
dimasukkan langsung kedalam tag head/body (direkomendasikan dibody paling terakhir)
langsung diketikan jsnya
<body>
	<script>console.log("hello!");</script>
</body>

2. inline
ini ketika tombol diklik maka menampilkan alert hello world
<button onclick="alert('hello world')">klik saya

3. eksternal
jika file js dibuat terpisah dari html
insert file js seperti ini
</body>
	<script src="catkul.js"></script>
</html>
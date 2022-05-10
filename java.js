function jumlah()
{
var bil1 = parseFloat(document.fform.bilangan1.value);
if (isNaN (bil1))
bil1=0.0;
var bil2 = parseFloat(document.fform.bilangan2.value);
if (isNaN (bil2))
bil2=0.0;
var hasil = bil1 + bil2;
alert ("Hasil Penjumlahan = "+hasil);
}
function minus(){
    var min1=parseFloat(document.fform.bilangan1.value);
    if(isNaN (min1))
    min1=0.0;
    var min2=parseFloat(document.fform.bilangan2.value);
    if(isNaN (min2))
    min2=0.0;
    var hasilminus=min1-min2;
    alert(hasilminus);
}

// 2.Örnek: Vize ve final notları belli olan bir öğrencinin yıl sonunda dersten geçip geçmediğini hesaplayalım:

// Şartlar:

// Öğrencinin vize notunun %30'unu final notunun %70'ini alalım.
// Vize ve final notunun toplamından doğan not ortalaması eğer 0-30 aralığındaysa KALDINIZ (FF) yazdıralım.
// 31-49 aralığındaysa DC - KOŞULLU yazdıralım.
// 50- 84 aralığındaysa CC - GEÇTİNİZ! yazdıralım.
// 85-100 aralığındaysa Notunuz AA yazdıralım.

var ogrenciVize = 45;
var ogrenciFinal = 80;

var ogrenciOrtalama = (ogrenciVize * 0.3) + (ogrenciFinal * 0.7);
console.log(ogrenciVize*0.3);
console.log(ogrenciFinal*0.4);

if ( 30>= ogrenciOrtalama>0) { 
  console.log("Not ortalamanız :" + ogrenciOrtalama + " (FF) ik kaldınız ");
} 
else if (ogrenciOrtalama >= 30 && ogrenciOrtalama < 49) {
  console.log("not ortalamanız : " + ogrenciOrtalama + " (DC) ile koşullu geçtiniz ");
} 
else if (ogrenciOrtalama >= 50 && ogrenciOrtalama <= 75) {
  console.log("not ortalamanız : " + ogrenciOrtalama + " (CC) ile Geçtiniz ");
} 
else if (ogrenciOrtalama >= 75 && ogrenciOrtalama <= 84) {
    console.log("not ortalamanız : " + ogrenciOrtalama + " (BB) ile Geçtiniz ");
    
}else{
    console.log("Not ortalamanız :" + ogrenciOrtalama + "  (AA) ile geçtiniz ");
}

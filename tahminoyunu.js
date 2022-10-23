// 3.Örnek Tahmin Oyunu: Bilgisayar tarafından 10 'a kadar tutulmuş olan rastgele sayıyı bulalım:

var randomSayi = Math.floor(Math.random() * 10);

var tahmin = prompt("Bir sayı seçiniz : ");

if (tahmin === randomSayi && tahmin != null) {
  console.log("Tebrikler bildiniz ");
} else if (tahmin == " ") {
  alert("Boş giriş yaptınız");
} else if (tahmin == null) {
  alert("Giriş yapmaktan vazgeçtiniz!");
} else {
  alert("Bir daha deneyiniz , Random sayı: " + randomSayi);
}
0
// 4.Örnek Verilen formüle göre vücut kitle indeksi hesaplayan ve hesapladığı
//değere göre yazı yazan bir program yazalım. Programda yazılmış kısımları
// okuyup eksik kısımları tamamlayın.

// Fonksiyon parametreleri prompt ile kullanıcıdan alınmalı.

// Formül: vki = kg/(m * m)

// İstenilenler:

// Prompt ile kullanıcıdan bilgi almak
// Verilen formülü uygun yere yazmak
// Formülde metre cinsinden istendiği için diyalog kutucuğuna metre cinsinden
//örnek 1.66 yazarak kullanıcıya rehberlik etmek

//Kod satırını buraya ekleyiniz.
// let weight, height, vki;
let weight,height,vki;

 weight = prompt(" Kilonuzu girin Kg cinsinden giriniz : ");
 height = prompt("Boyunuzu m cinsinden giriniz : ");

function vkiHesaplama(weight, height) {
  vki = (weight / (height * height));

 if (vki < 18.5)
    return alert(`Vücut kitle indeksiniz: ${vki}, değerleriniz düşüktür`);
 if (vki >= 18.5 && vki <= 24.9)
     return alert(`Vücut kitle indeksiniz: ${vki}, normal değerdesiniz`);
  if (vki >= 25.0 && vki <= 29.9)
     return alert(`Vücut kitle indeksiniz: ${vki}, kilolusunuz`);
  if (vki >= 30)
    return alert(`Vücut kitle indeksiniz: ${vki}, aşırı kilolusunuz`);
 return alert("Girdiğiniz değerleri kontrol ediniz");
};

 vkiHesaplama(weight, height);



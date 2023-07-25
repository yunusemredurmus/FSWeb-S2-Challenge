/* Aşağıda global olarak tanımlanmış değişkenler bulunmaktadır, bunları değiştirmeyin. Açıklamaları takip ederek görevleri tamamlayın. */
var cumleler = [
	["Annem", "ekmek", "almak", "için", "gitti."],
	["Babam", "her", "zaman", "çok", "sevdi."],
	["Annemin", "bugün", "2'de", "doğum", "günü."],
	["Olanları", "unutup", "bir", "daha", "dönemem."],
	["Her", "zaman", "içinde", "yarası", "var."],
	["O", "zaman", "senin", "bu", "halindim."],
	["Artık", "içimden", "bir", "şey", "gelmiyor."],
	["Kader", "bizi", "her", "zaman", "ayırdı."],
	["Hiç", "bir", "zaman", "yazılanı", "silemedim."],
	["İçimden", "gel", "dedim", "ama", "gelmedin."],
	["Kader", "o", "defteri", "tekrar", "açamaz."],
	["Şarkılar", "seni", "bana", "hatırlatan", "gerçekti."],
	["Bu", "gece", "çok", "uykum", "vardı."],
	["Neden", "böyle", "yaptığına", "anlam", "veremedim."],
	["Benim", "boyum", "ondan", "bayağı", "kısaydı."],
	["Senin", "gibi", "birini", "sevdim."],
	["Kader", "seni", "yeniden", "yazamıyorum."],
	["Neden", "bu", "kadar", "acı?"],
	["Ben", "böyle", "olmasını", "istemedim."],
	["Sonumu", "ve", "önümü", "bilemiyorum."],
	["Sana", "gel", "bile", "diyemiyorum."],
	["Onu", "çok", "seviyor."],
	["Olan", "oldu", "artık."],
	["Basım", "çok", "ağrıyor."],
	["Neden", "böyle", "olduk?"],
	["Nereden", "nereye", "gelmiştik."],
	["Düşünmekten,", "kendimden", "yoruldum."],
	["Böyle", "yaptı."], ["Suçlu", "değilsin."],
	["Neden", "yaptın?"],
	["Sana", "değer."],
	["Acım", "içimde."],
	["Annen", "hazırdı."],
	["Bıktım."],
	["İstedim."],
	["Yaptım."],
	["Nedendi?"],
	["Yoruldum."]
];

var sebzeler = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
var meyveler = ['🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🥭', '🍎', '🍐', '🍑', '🍒', '🍓', '🥝', '🥥']





/* ÖRNEK GÖREV:
	cumleKur fonksiyonuna aşağıdakileri uygulayın:
		1. Fonksiyon argüman olarak birbirinden farklı 5 tane string değişkeni parametre olarak alacak
		2. 5 parametrenin birincisi öntanımsız olacak, diğer 4 string öntanımlı olacak ve `""` (null) değerini alacaktır.
		(💡 İPUCU: Ön tanımlı özelliği fonksiyonun gerekli parametresi gönderilmeden de çağırılabilmesini mümkün kılmaktadır.
		ÖRNEK PARAMETRELERİ ÖN TANIMLI FONKSİYON: 
		function foo(degisken=false){
		return degisken;
		}
		Yukarıdaki fonksiyonu foo("deneme") olarak çağırabiliriz, bu fonksiyon "deneme" stringini döndürecektir. Aynı fonksiyonu foo(); şeklinde de çağırabiliriz. Bu durumda parametre olarak bir şey göndermediğimiz için fonksiyon içindeki degisken değişkenine false değeri atanacaktır. Bu durumda foo(); fonksiyonunu çalıştırdığımız false döndürür.
		)
		3. Alınan 5 string uc uca eklenerek bir stringe dönüştürülecektir.
		4. Fonksiyon, oluşturulan stringi döndürecektir. 
	*/

// ÖRNEĞİN ÇÖZÜMÜ:
function cumleKur(birinci, ikinci = "", ucuncu = "", dorduncu = "", besinci = "") {
	return birinci + ikinci + ucuncu + dorduncu + besinci;
}

/* (Oto test yok) cumleKur fonksiyonuna yalnızca 1 parametre göndererek "Hello World!" stringini elde edin, sonucu konsolde gözlemleyin */

console.log(cumleKur("Hello World!"));



/* (Oto test yok) cumleKur fonksiyonuna yalnızca 2 parametre göndererek "Hello World!" stringini elde edin, sonucu konsolde gözlemleyin */

console.log(cumleKur("Hello", " World!"));



/* (Oto test var) cumleKur fonksiyonuna 5 parametre göndererek "Ben iyi bir yazılımcı olacağım!" stringini elde edin, sonucu `bircumle` değişkenine atayın ve konsolde gözlemleyin */
var bircumle;

var bircumle = cumleKur("Ben ", "iyi ", " bir ", " yazılımcı ", " olacağım! ");
console.log(bircumle);

//		Sayfanın en üstünde global olarak tanımlanmış `cumleler` adında bir dizi bulunmaktadır. Bu dizinin içinde en çok 5 en az 1 adet string bulunan diziler bulunmaktadır. Aşağıdaki görevlerde aksi belirtilmedikçe bu dizi kullanılacaktır.

/* 	GÖREV 1:
		cumlelereDonustur fonksiyonuna aşağıdaki yönergeleri uygulayın.
			1. `cumleler` adındaki dizi fonksiyonun BİRİNCİ parametresi olarak alınacak.
			2. Kelime aralarındaki ayraç(seperator) olarak kullanılmak üzere bir string değişkeni fonksiyonun İKİNCİ parametresi olarak alınacak. Ayraç parametresine "," değerini ön tanımlı yapmanız beklenmektedir.
			3. Dizinin içindeki her dizi elemanı 1 cümle oluşturacak şekilde uc uca eklenecek, kelimelerin aralarına 3. parametrede girilen ayraç yerleştirilecek;
				NOT: cumlelereDonustur(cumleler, " ") fonksiyonu çağırıldığında şu dizinin oluşturacağı cümle: ["Annem","ekmek","almak","için","gitti."] => "Annem ekmek almak için gitti." şeklinde olmalıdır. 
				💡 İPUCU: Bu çalışmada cümleleri kolay oluşturmak için .map ve .join metodunu bir arada kullanmanız gerekmektedir. 
			4. Oluşturulan her cümle yeni bir dizi oluşturulup o dizinin içine aktarılacak. 
			5. Oluşturulan yeni dizi döndürülecek.
	*/

/**
 * 
 * @param {cumleler} cumleler 
 * @param {" "} ayirac 
 * @returns cümleler dizesini birleştiriyor ve anlamlı cümleler oluşturuyor. 
 */

function cumlelereDonustur(cumleler, ayirac = ",") {
	let yeniCumleler = cumleler.map(function (cumle) {
		return cumle.join(ayirac);
	});
	return yeniCumleler;
}
let yeniCumleler = cumlelereDonustur(cumleler, " ");
console.log("GÖREV 1 ", yeniCumleler);



/* GÖREV 2:
		paragrafOlustur fonksiyonuna aşağıdakileri uygulayın.
			1. cumleler dizisi fonksiyonun birinci parametresi olarak alınacak
			2. cumleKur fonksiyonu geriçağırım(callback) için fonksiyonun ikinci parametresi olarak alınacak
			3. cumlelereDonustur fonksiyonu geriçağırım(callback) için fonksiyonun üçüncü parametresi olarak alınacak
			4. Bir dizi oluşturulacak ve cumlelereDonustur fonksiyonu cumleler ve " " ayracıyla çağırılarak bu diziye aktarılacak
			5. Oluşturulan bu dizinin tek sayılı anahtarlarını(index) [1,3,5,7,9] kullanarak ilk 5 elemanı geriçağırım olarak çağırılan cumleKur dizisinin parametreleri olarak aktarılarak çağırılacak ÖRNEK: callback(dizi[1],dizi[2],dizi[3],dizi[5],dizi[7])
			6. Oluşturulan paragraf döndürülecek
	*/

/**
 * Paragraf oluşturma !
 * @param {cumleler str} cumleler 
 * @param {cumleKur} callback 
 * @param {cumlelereDonustur} callback0 
 * @returns cumleler dizinindeki ilk 5 cümle ile yeni oluşturulan paragrafı dönmektedir.
 */

function paragrafOlustur(cumleler, callback, callback0) {
	const dizi = callback0(cumleler, " ");
	const cumleler1 = callback(dizi[1], dizi[2], dizi[3], dizi[4], dizi[5]);
	const paragraf = callback(...cumleler1);
	return paragraf;

}
console.log("Görev 2 ", paragrafOlustur(cumleler, cumleKur, cumlelereDonustur));
/* 	GÖREV 3:
		Yukarıda isimleri sebzeler ve meyveler olan 2 dizi bulunmaktadır. Bu dizileri kullanarak aşağıdaki görevleri tamamlayın.
			3a. meyveler dizisinin ilk ve son elemanlarını diziden çıkartın. (.pop ve .shift metodlarını kullanın)
 */

meyveler.pop();
meyveler.shift();
sebzeler.pop();
sebzeler.shift();
console.log("Görev 3 - Meyveler", meyveler);
console.log("Görev 3 - Sebzeler ", sebzeler);





/* 			3b.  Bir tavşan ve bir kirpi arkadaşlar sebzeler dizimizin peşine düştü. Tavşan => 🐇 , Kirpi=> 🦔 , Tavşanla kirpi sebzeleri ele geçirmek için bir plan kurdular. Tavşan diziye önden saldıracak, kirpi ise arkalarından dolaşacak. Varsayalım ki arkadaşların planları başarılı oldu. Tavşanı dizinin ilk elemanına 🐇, Kirpiyi dizinin son elemanına ekleyin 🦔 
*/
const Tavşan = "🐇";
const Kirpi = "🦔";
sebzeler.unshift(Tavşan);
sebzeler.push(Kirpi);

console.log("GÖREV 3B", sebzeler);





/* 			3c. manav isminde bir dizi oluşturun.`meyveler` dizisi ilk elemanlara, `sebzeler` dizisi son elemanlara denk gelecek şekilde, iki diziyi birleştirip sonucu manav dizisine aktarın. (.concat metodu)
	*/
//3c çözümü
/* kodlar buraya */

var manav = meyveler.concat(sebzeler);
console.log("GÖREV 3C", manav);



/* 	GÖREV 4:
		Yeni kurulmuş bir mesajlaşma startup firması atılan mesajları emojilerle zenginleştirmek istiyor. Bunun için emojiler adında bir nesne tanımlamışlar. Kullanıcının gönderdiği mesaj stringi içinde emojiler nesnesinin anahtarı(index) bulunuyorsa, bu işareti otomatik olarak anahtara ait değerde tanımlanmış emoji ile değiştirecek bir fonksiyon geliştirmek istiyorlar. ÖRNEK: Mesaj içinde ":)" sembolü bulunursa mesajı alan kişi bu sembolü "🙂" olarak görecek. Burdan yola çıkarak emojileriDonustur fonksiyonuna aşağıdakileri uygulayın.
			1. Atılan mesaj stringi fonksiyonun birinci parametresi olarak alınacak
			2. emojiler nesnesi fonksiyonun ikinci parametresi olarak alınacak
			3. mesaj stringi emoji nesnesinde tanımlı olan tüm sembolleri istenilen değere dönüştürecek (.replaceAll metodu kullanılacak)
				NOT: burada dikkat edilmesi gereken husus şudur; harfli sembolleri kullanıcı küçük harf ve büyük harf olarak girebilir. 
				yani hem :d hem de :D sembolleri 😁'a dönüşmelidir. bunun için (.toUpperCase ve .toLowerCase metotlarından istediğinizi kullanabilirsiniz.)
			4. elde edilen string döndürülecek
 */
var emojiler = {
	":)": "🙂",
	":(": "😔",
	":d": "😁",
	":p": "😛",
	":o": "😱",
	"<3": "❤️",
}

/**
 *  Mesajlardaki emojiyi oluştur.
 * @param {mesaj} mesaj 
 * @param {emojiler{}} emojiler 
 * @returns  Girilen mesajdaki sembolleri karşışık gelen değerlere dönüştürmekte
 */
function emojileriDonustur(emoCumle, emoList) {
	return mesaj.replace(/(:\)|:\(|:d|:p|:o|<3)/gi, function (matched) {
		return emojiler[matched.toLowerCase()] || matched;
	});
}
var mesaj = "GÖREV 4 - Güzel kaybettik :( ";
var emojilimesaj = emojileriDonustur(mesaj, emojiler);
console.log(emojilimesaj);



// function emojileriDonustur(emoCumle, emoList) {
// 	for (let emoji in emoList)
// 	emoCumle = emoCumle.replaceAll(emoji.toUpperCase(),emoList[emoji]);
// 	emoCumle = emoCumle.replaceAll(emoji,emoList{emoji});

// 3. YÖNTEM
// 	return mesaj.replace(/(:\)|:\(|:d|:p|:o|<3)/gi, function (matched) {
// 		return emojiler[matched.toLowerCase()] || matched;
// 	});
//  }
// var mesaj = "GÖREV 4 - Güzel kaybettik :( ";
// var emojilimesaj = emojileriDonustur(mesaj, emojiler);
// console.log(emojilimesaj);




/*  Bu satırın aşağısındaki kodları lütfen değiştirmeyin  */
function sa() {
	console.log('Kodlar çalışıyor');
	return 'as';
}
sa();
module.exports = {
	sa,
	cumleler,
	cumleKur,
	bircumle,
	cumlelereDonustur,
	paragrafOlustur,
	sebzeler,
	meyveler,
	manav,
	emojiler,
	emojileriDonustur
}


/////////////////////////////////////////////////////////////////////////////
////// Definujem globalne premenne
var PPam = []      // Pracovna pamat
var BPrav = []     // Baza pravidiel
var Aplik = []     // Potencialne aplikovatelne pravidla

////// Nastavi bazu znalosti
function Inic1() {
	PPam = [
		"Peter je rodic Jano",
		"Peter je rodic Vlado",
		"manzelia Peter Eva",
		"Vlado je rodic Maria",
		"Vlado je rodic Viera",
		"muz Peter",
		"muz Jano",
		"muz Vlado",
		"zena Maria",
		"zena Viera",
		"zena Eva"
	]
	BPrav = [ //["Meno",["muz Vlado"],["pridaj muz Vlado","sprava muz Vlado"]], //testovacie pravidlo
		["DruhyRodic1", ["?X je rodic ?Y", "manzelia ?X ?Z"],// "muz Vlado","<> Vlado ?Y"], //testovacia cast
			["pridaj ?Z je rodic ?Y"]],
		["DruhyRodic2", ["?X je rodic ?Y", "manzelia ?Z ?X"], ["pridaj ?Z je rodic ?Y"]],
		["Otec", ["?X je rodic ?Y", "muz ?X"], ["pridaj ?X je otec ?Y"]],
		["Matka", ["?X je rodic ?Y", "zena ?X"], ["pridaj ?X je matka ?Y"]],
		["Surodenci", ["?X je rodic ?Y", "?X je rodic ?Z", "<> ?Y ?Z"], ["pridaj ?Y a ?Z su surodenci"]],
		["Brat", ["?Y a ?Z su surodenci", "muz ?Y"], ["pridaj ?Y je brat ?Z"]],
		["Stryko", ["?Y je brat ?Z", "?Z je rodic ?X"], ["pridaj ?Y je stryko ?X", "sprava ?X ma stryka"]],
		["Test mazania", ["?Y je stryko ?X", "zena ?X"], ["vymaz zena ?X"]]
	]
	InitVypis()
}
////// Nastavi bazu znalosti ////170
function Inic2() {
	PPam = [
		"faktorial 5"
	]
	BPrav = [
		["F1", ["faktorial 0"],
			["vymaz faktorial 0", "pridaj faktorial 0 je 1", "sprava Faktorial 0 je 1"]],
		["F2", ["faktorial ?x", "<> ?x 0"],
			["vymaz faktorial ?x", "pridaj medzivypocet ?x { ?x - 1 } ?x"]],
		["F3", ["medzivypocet ?x 0 ?y"],
			["vymaz medzivypocet ?x 0 ?y", "pridaj faktorial ?x je ?y", "sprava Faktorial ?x je ?y"]],
		["F4", ["medzivypocet ?x ?y ?z"],
			["vymaz medzivypocet ?x ?y ?z", "pridaj medzivypocet ?x { ?y - 1 } { ?y * ?z }"]]
	]
	InitVypis()
}
////// Nastavi bazu znalosti
function Inic3() {
	PPam = [
		"typ karoserie sedan",
		"pocet dveri 4",
		"pohanana naprava predna",
		"predna maska mriezka",
		"ma okruhle svetla"
	]
	BPrav = [
		["FIAT1", ["typ karoserie ?sedan_hatchback"],
			["pridaj karoseria ?sedan_hatchback"]],
		["FIAT2", ["karoseria sedan", "pocet dveri ?4_5"],
			["pridaj sedan ?4_5"]],
		["FIAT3", ["sedan 5"], ["pridaj vybrany Fiat Croma", "sprava Fiat Croma"]],
		["FIAT4", ["sedan 4", "pohanana naprava ?predna-zadna"],
			["pridaj naprava ?predna-zadna"]],
		["FIAT5", ["naprava predna"],
			["pridaj vybrany Fiat Tempra", "sprava Fiat Tempra"]],
		["FIAT6", ["naprava zadna"],
			["pridaj vybrany Fiat Mirafiorri", "sprava Fiat Mirafiorri"]],
		["FIAT7", ["karoseria hatchback", "pocet dveri ?3alebo5"],
			["pridaj hatchback ?3alebo5"]],
		["FIAT8", ["hatchback 3", "predna maska ?ano-nie-mriezka"],
			["pridaj 3 maska ?ano-nie-mriezka"]],
		["FIAT9", ["3 maska ano"], ["pridaj vybrany Fiat Tipo3", "sprava Fiat Tipo3"]],
		["FIAT10", ["3 maska nie"],
			["pridaj vybrany Fiat Punto3", "sprava Fiat Punto3"]],
		["FIAT11", ["3 maska mriezka"],
			["pridaj vybrany Fiat Panda3", "sprava Fiat Panda3"]],
		["FIAT12", ["hatchback 5", "predna maska ?ano-nie-mriezka"],
			["pridaj 5 maska ?ano-nie-mriezka"]],
		["FIAT13", ["5 maska ano"], ["pridaj vybrany Fiat Tipo5", "sprava Fiat Tipo5"]],
		["FIAT14", ["5 maska nie"],
			["pridaj vybrany Fiat Punto5", "sprava Fiat Punto5"]],
		["FIAT15", ["5 maska mriezka", "ma ?okruhle-integrovane svetla"],
			["pridaj ?okruhle-integrovane svetla"]],
		["FIAT16", ["integrovane svetla"],
			["pridaj vybrany Fiat Uno5", "sprava Fiat Uno5"]],
		["FIAT17", ["okruhle svetla"],
			["pridaj vybrany Fiat Ritmo5", "sprava Fiat Ritmo5"]]
	]
	InitVypis()
}
////// Nastavi bazu znalosti ////1476
function Inic4() {
	PPam = [
		"fibonacci 7"
	]
	BPrav = [
		["Fi1", ["fibonacci 1"],
			["vymaz fibonacci 1", "pridaj fibonacci 1 je 1", "sprava fibonacci 1 je 1"]],
		["Fi2", ["fibonacci 2"],
			["vymaz fibonacci 2", "pridaj fibonacci 2 je 1", "sprava fibonacci 2 je 1"]],
		["Fi3", ["fibonacci ?x", "<> ?x 1", "<> ?x 2"],
			["vymaz fibonacci ?x", "pridaj medzivypocet ?x 1 2 3"]],
		["Fi4", ["medzivypocet ?x ?y ?z ?x"],
			["vymaz medzivypocet ?x ?y ?z ?x", "pridaj fibonacci ?x je ?z", "sprava fibonacci ?x je ?z"]],
		["Fi5", ["medzivypocet ?x ?y ?z ?u"],
			["vymaz medzivypocet ?x ?y ?z ?u", "pridaj medzivypocet ?x ?z { ?y + ?z } { ?u + 1 }"]]
	]
	InitVypis()
}
////// Nastavi bazu znalosti
function Inic5() {
	PPam = [
		"start"
	]
	BPrav = [
		["FIAT1", ["start"],
			["otazka (Aky typ karoserie sa vam paci: sedan hatchback)(karoseria !)"]],
		["FIAT2", ["karoseria sedan"],
			["otazka (Pozadujete pocet dveri: 4 5)(sedan !)"]],
		["FIAT3", ["sedan 5"], ["pridaj vybrany Fiat Croma", "sprava Fiat Croma"]],
		["FIAT4", ["sedan 4"],
			["otazka (Ktora naprava by mala byt pohanana: predna zadna)(naprava !)"]],
		["FIAT5", ["naprava predna"],
			["pridaj vybrany Fiat Tempra", "sprava Fiat Tempra"]],
		["FIAT6", ["naprava zadna"],
			["pridaj vybrany Fiat Mirafiorri", "sprava Fiat Mirafiorri"]],
		["FIAT7", ["karoseria hatchback"],
			["otazka (Pozadujete pocet dveri: 3 5)(hatchback !)"]],
		["FIAT8", ["hatchback 3"],
			["otazka (Otvorena predna maska: ano nie mriezka)(3 maska !)"]],
		["FIAT9", ["3 maska ano"], ["pridaj vybrany Fiat Tipo3", "sprava Fiat Tipo3"]],
		["FIAT10", ["3 maska nie"],
			["pridaj vybrany Fiat Punto3", "sprava Fiat Punto3"]],
		["FIAT11", ["3 maska mriezka"],
			["pridaj vybrany Fiat Panda3", "sprava Fiat Panda3"]],
		["FIAT12", ["hatchback 5"],
			["otazka (Otvorena predna maska: ano nie mriezka)(5 maska !)"]],
		["FIAT13", ["5 maska ano"], ["pridaj vybrany Fiat Tipo5", "sprava Fiat Tipo5"]],
		["FIAT14", ["5 maska nie"],
			["pridaj vybrany Fiat Punto5", "sprava Fiat Punto5"]],
		["FIAT15", ["5 maska mriezka"],
			["otazka (Aky tvar svetiel sa vam paci: okruhle integrovane)(! svetla)"]],
		["FIAT16", ["integrovane svetla"],
			["pridaj vybrany Fiat Uno5", "sprava Fiat Uno5"]],
		["FIAT17", ["okruhle svetla"],
			["pridaj vybrany Fiat Ritmo5", "sprava Fiat Ritmo5"]]
	]
	InitVypis()
}
////// Robi vypisy PPam a BPrav
function InitVypis() {
	var fh = document.forms[0]
	fh.pp.value = ""
	fh.bp.value = ""
	fh.pvystup.value = ""
	fh.vystup.value = ""
	for (var i = 0; i < PPam.length; i++) {
		fh.pp.value += PPam[i] + "\n"
	}
	for (var i = 0; i < BPrav.length; i++) {
		fh.bp.value += "Meno: " + BPrav[i][0] + "\n" +
			"AK    " + BPrav[i][1] + "\n" +
			"POTOM " + BPrav[i][2] + "\n\n"
	}
}
/////////////////////////////////////////////////////////////////////////////
////// Hlada potencialne aplikovatelne pravidla,
////// posiela pomocnej funkcii po jednom pravidle
function Zhoda() {
	for (var i = 0; i < BPrav.length; i++) {
		Zhoda1(BPrav[i])
	}
}
//////  Urobi vsetko, co treba pre jedno pravidlo, plni Aplik
function Zhoda1(Pravidlo) {
// var fh = document.forms[0]
	var Naviazania = [];
	var Nav2 = "";
	var pom = true;
	for (var i = 0; i < Pravidlo[1].length; i++) {
		Naviazania.push(Zhoda1e(Pravidlo[1][i]))         //najdi vsetky mozne naviazania elem. podmienok
		if (Naviazania[Naviazania.length - 1] == "f") {
			pom = false;                                     //ak co len jedna el. pod sa nezhoduje, koniec
			break
		}
	} //for
	if (pom) {
// fh.vystup.value += Naviazania + "\n"
		Nav2 = CistiKombajn(Kombajn(Cisti(Naviazania)))  //vyber len korektne kombinacie
// fh.vystup.value += Nav2 + "\n"
		if (Nav2 != "f") {
			if (NieJeVPoli("s", Naviazania)) Naviazania = Nav2
			else Naviazania = SpecialP(Nav2, Pravidlo[1])    //osetri specialnu podmienku
			if (Naviazania != "f")                          //ak daco ostalo, generuj akcie pravidla
				Generuj(Pravidlo[0], Pravidlo[2], Naviazania)
		}
	}
}
////// Vyberie vhodne porovnavanie pre elementarnu podmienku
////// Moze vratit: "s" - specialna podmienka
//////              "t" - zhoda, bez premennych
//////              [?premenna=hodnota,...] - zoznam (pole) naviazani premennych
//////              "f" - nenasla sa zhoda
function Zhoda1e(Podm) {
	if (Podm.search(/<>/) == 0) return "s";
	else if (Podm.search(/\?/) == -1) return PresnaZhoda(Podm)
	else return Podobne(Podm)
}
////// Prejde vsetky fakty, ak najde rovnaky, vrati "t" inak "f"
function PresnaZhoda(Podm) {
	var test = "f"
	for (var i = 0; i < PPam.length; i++) {
		if (Podm == PPam[i]) {
			test = "t"
			break
		}
	}
	return test
}
////// Vola pomocnu funkciu pre kazdy fakt z pracovnej pamati a uklada vsetky
////// pozitivne vysledky. Vrati zoznam naviazani alebo "f"
function Podobne(Podm) {
	var test = []
	var pom = ""
	for (var k = 0; k < PPam.length; k++) {
		if ((pom = Podobne1(Podm, PPam[k])) != "f") test.push(pom)
	}
	if (test == []) return "f"
	else return test
}
////// Podmienka sa zhoduje s faktom, ak maju rovnaky pocet slov a nezhoduju
////// sa v nej len take slova, ktore su oznacene ako premenne.
////// Vrati pole dvojic ?premenna=hodnota alebo "f" (ak sa nezhoduju)
function Podobne1(Podm, Fakt) {
	var P1 = Podm.split(" ")
	var F1 = Fakt.split(" ")
	var nav = ""
	var p = "t"
	if (P1.length != F1.length) return "f"
	else {
		for (var i = 0; i < P1.length; i++) {
			if (P1[i] != F1[i]) {
				if (P1[i].search(/\?/) == 0) nav += P1[i] + "=" + F1[i] + " "
				else {
					p = "f"
					break
				}
			}
		} //for
		if (p == "f") return p
		else {
			nav = nav.substr(0, nav.length - 1)
			return nav.split(" ")
		}
	}
}
////// Ak najde podobnost, vrati false, inak true
function NieJeVPoliOdpoved(Odpoved, PPamk) {
	for (var i = 0; i < PPamk.length; i++) {
		if (PodobneOdp(Odpoved, PPamk[i])) return false
	}
	return true
}
////// Zisti zhodu odpovede s faktom
function PodobneOdp(Odp, Fakt) {
	var P1 = Odp.split(" ")
	var F1 = Fakt.split(" ")
	if (P1.length != F1.length) {
		return false
	}
	else {
		for (var i = 0; i < P1.length; i++) {
//    window.alert("mame otazku")
			if ((P1[i] != F1[i]) && (P1[i].search(/\!/) != 0)) return false
		} //for
		return true
	}
}
////// Zo vsetkych pozitivnych vysledkov vrati len zoznamy naviazania premennych.
function Cisti(nav) {
	var cnav = []
	for (var i = 0; i < nav.length; i++) {
		if ((nav[i] != "t") && (nav[i] != "s")) cnav.push(nav[i])
	}
	return cnav
}
////// Vytvori kombinacie vsetkych skupin naviazani, ak je to mozne.
function Kombajn(nav) {
	var komb = []
	var komb2 = []
	if (nav.length == 0) return "t"
	else if (nav.length == 1) return nav[0]           //netreba nic kombinovat
	else {

		for (var h = 0; h < nav[0].length; h++) {
			komb.push(nav[0][h])                           //priprava prvej skupiny
		}

		for (var i = 1; i < nav.length; i++)  //pre vsetky zvysne skupiny premennych
		{
			for (var j = 0; j < nav[i].length; j++) {      //pre kazdu alternativu v skupine
				for (var k = 0; k < komb.length; k++) {       //pre kazdu doteraz vytvorenu kombinaciu
					komb2.push(komb[k].concat(nav[i][j]))
				}
			}
			komb = komb2                                   //zapamataj si nove kombinacie
			komb2 = []                                     //a reinicializuj pomocne pole
		}

		return komb
	} //else
}
////// Vrati len kombinacie, kde je jednej premennej priradena len jedna hodnota.
function CistiKombajn(komb) {
	var k2 = []
	var pom = ""
	if (komb == "t") return "t"                       //niet co cistit
	else {
		for (var i = 0; i < komb.length; i++) {
			if (pom = Korektny(komb[i])) k2.push(pom)
		}
		if (k2.length == 0) return "f"                   //neexistuje korektne naviazanie
		else return k2
	} //else
}
////// Funkcia najprv vyhadze vsetky viacnasobne vyskyty naviazani a potom
////// skontroluje, ci tam nie je nejaka premenna viackrat
function Korektny(knav) {
	var n1 = []
	var n2 = []
	var nx = ""
	for (var j = 0; j < knav.length; j++) {
		if (NieJeVPoli(knav[j], n1)) n1.push(knav[j])  //vypusti rovnake naviazania
	}
	for (var k = 0; k < n1.length; k++) {
		nx = n1[k].substring(0, n1[k].search(/=/))
		if (NieJeVPoli(nx, n2)) n2.push(nx)            //vypusti opakovany vyskyt premennej
	}
	if (n1.length == n2.length) return n1          //pocet naviazani musi byt taky ako pocet premennych
	else return false
}
////// Ak prvok nie je v poli TRUE, inak FALSE
function NieJeVPoli(prvok, pole) {
	var xx = true
	for (var w = 0; w < pole.length; w++) {
		if (prvok == pole[w]) {
			xx = false
			break
		}
	}
	return xx
}
////// Vrati len tie naviazania, ktore vyhovuju specialnej podmienke, inak "f"
function SpecialP(nav, podm) {
	var podm1 = []
	var nav1 = []
	var npod = ""
	var npom = ""
	var test = true
	for (var i = 0; i < podm.length; i++) {
		if (podm[i].search(/<>/) == 0) podm1.push(podm[i]) //vyberiem len spec. podm.
	}
	for (var j = 0; j < nav.length; j++) {              //pre vsetky naviazania
		npod = Naviaz(nav[j], podm1)                        //porovnat viem len naviazane hodnoty
		test = true
		for (var k = 0; k < npod.length; k++) {
			npom = npod[k].split(" ")
			if (npom[1] == npom[2]) test = false
		}
		if (test) nav1.push(nav[j])
	}
	if (nav1.length == 0) return "f"
	else return nav1
}
////// Naviaze zoznam vzorov, posiela ich po jednom (rozdelene po slovach)
////// pomocnej funkcii
function Naviaz(navlist, vzorlist) {
	var vysl = []
	var pom = ""
	for (var y = 0; y < vzorlist.length; y++) {
		vysl.push(nav1(navlist, vzorlist[y].split(" ")))
	}
	return vysl
}
////// Zo vzoru urobi fakt, pre kazde slovo vola nahrad. Vrati retazec
function nav1(navlist, vzor) {
	var novyfakt = []
	for (var z = 0; z < vzor.length; z++) {
		novyfakt.push(Nahrad(navlist, vzor[z]))
	}
	return novyfakt.join(" ")
}
////// Ak je slovo premenna, vrati prislusnu hodnotu, inak vrati slovo
function Nahrad(navlist, slovo) {
	var preloz = ""
	var pom = ""
	if (slovo.search(/\?/) != 0) return slovo
	else {
		for (var v = 0; v < navlist.length; v++) {
			pom = navlist[v].split("=")
			if (pom[0] == slovo) {
				preloz = pom[1]
				break
			}
		}
		return preloz
	}
}
////// Plni Aplik naviazanymi akciami
function Generuj(Meno, Akcie, Nav) {
// var fh = document.forms[0]
// fh.vystup.value += Meno + "\n"
// for (var m = 0; m < Nav.length; m++) {
//  fh.vystup. value += Nav[m] + "\n"
// }
//-----------------------------------
	var Nav1 = ""
	var nak = ""
	if (Nav == "t") Nav1 = ["t"]
	else Nav1 = Nav
	for (var i = 0; i < Nav1.length; i++) {
		nak = Naviaz(Nav1[i], Akcie)
		nak = VyhodnotAkcie(nak)
		nak.unshift(Meno)
		Aplik.push(nak)
	}
}
/////////////////////////////////////////////////////////////////////////////
////// Odstrani z Aplik vsetko, co by nic neurobilo
function VyhodZbytocne() {
	var Apl = []
	for (var i = 0; i < Aplik.length; i++) {
		if (Mozne(Aplik[i])) Apl.push(Aplik[i])
	}
	Aplik = Apl
}
////// Vrati TRUE len pre tie, ktore nieco skutocne pridaju alebo zmazu
////// otazka potrebuje mierne odlisny test
function Mozne(Akcie) {
	var pom = ""
	var test = false
	for (var j = 1; j < Akcie.length; j++) {
		pom = Akcie[j].split(" ")
		if (pom[0] == "pridaj") {
			pom.shift()
			if (NieJeVPoli(pom.join(" "), PPam)) {
				test = true
				break
			}
		} else if (pom[0] == "vymaz") {
			pom.shift()
			if (!NieJeVPoli(pom.join(" "), PPam)) {
				test = true
				break
			}
		} else if (pom[0] == "otazka") {
			pom.shift()
			pom = VyberOdpoved(pom.join(" "))
			if (NieJeVPoliOdpoved(pom, PPam)) {
//	window.alert("mame otazku")
				test = true
				break
			}
		}
	}
	return test
}
////// Vyberie otazku z "(otazka)(odpoved)"
function VyberOtazku(OtOdp) {
	return OtOdp.substring(1, OtOdp.indexOf(")"))
}
////// Vyberie odpoved z "(otazka)(odpoved)"
function VyberOdpoved(OtOdp) {
	return OtOdp.substring(OtOdp.lastIndexOf("(") + 1, OtOdp.length - 1)
}
////// Vykona prve pravidlo z Aplik
function Vykonaj() {
	var fh = document.forms[0]
	var pom = ""
	var PP = ""
	for (var j = 1; j < Aplik[0].length; j++) {
		pom = Aplik[0][j].split(" ")
		if (pom[0] == "pridaj") {
			pom.shift()
			if (NieJeVPoli(pom.join(" "), PPam)) PPam.push(pom.join(" "))
		} else if (pom[0] == "vymaz") {
			pom.shift()
			pom = pom.join(" ")
//    fh.pvystup.value += "pom:  " + pom + "\n" //testovaci vystup
//    fh.pvystup.value += "PPam: " + PPam + "\n" //testovaci vystup
			PP = []
			for (var k = 0; k < PPam.length; k++) {
				if (pom != PPam[k]) PP.push(PPam[k])
//     fh.pvystup.value += "PP:   " + PP + "\n" //testovaci vystup
			}
			PPam = PP
		} else if (pom[0] == "otazka") {
			pom.shift()
//   window.alert("mame otazku")
			if (NieJeVPoliOdpoved(VyberOdpoved(pom.join(" ")), PPam)) VykonajOtazku(pom)
		} else {
			pom.shift()
			fh.vystup.value += pom.join(" ") + "\n"
		}
	}
}
////// Vstupny argument je pole.
////// Ak by sa miesto vlozenia "koniec" do pameti nic nevkladalo, system by opakoval otazku
function VykonajOtazku(OtPole) {
	var ot = VyberOtazku(OtPole.join(" "))
	var odp = VyberOdpoved(OtPole.join(" "))
	var odpH = ""
	if (ot.search(/\:/) > -1) {
		odpH = ot.substring(ot.search(/\:/) + 2) //+2 pre ": "
		//  ot = ot.substring(0,ot.search(/\:/))    //mohol by som z otazky vynechat odporucane hodnoty
	}
	// window.alert(odpH)
	var dialog = window.prompt(ot, odpH)
	if ((dialog == "") || (!dialog)) dialog = "koniec" //Ak pouzivatel da Cancel, dialog je null
	odp = odp.split(" ")
	for (var i = 0; i < odp.length; i++) {
		if (odp[i] == "!") odp[i] = dialog
	}
	PPam.push(odp.join(" "))

}
////// Prechadza zoznam akcii, posiela ich na vyhodnotenie pomocnej funkcii
function VyhodnotAkcie(Akcie) {
	var vak = []
	for (var i = 0; i < Akcie.length; i++) {
		vak.push(VyhodnotJednu(Akcie[i]))
	}
	return vak
}
////// Zistuje, ci sa v akcii nachadza vyraz v krutenych zatvorkach
function VyhodnotJednu(Akcia) {
	if (Akcia.search(/\{/) > -1) return SpracujEval(Akcia)
	else return Akcia
}
////// Kazdu cast vyrazu v krutenych zatvorkach nahradi jej hodnotou
function SpracujEval(Vstup) {
	var zoz = Vstup.split("{")
	var vystzoz = []
	var pom = ""
	for (var i = 0; i < zoz.length; i++) {
		if (zoz[i].search(/\}/) == -1) vystzoz.push(zoz[i])
		else {
			pom = zoz[i].split("}")
			pom[0] = eval(pom[0])
			vystzoz.push(pom.join(""))
		}
	}
	return vystzoz.join("")
}
/////////////////////////////////////////////////////////////////////////////
////// Zakladny algoritmus dopredneho produkcneho systemu
function DoKonca() {
	var fh = document.forms[0]
	do {
		Aplik = []
		Zhoda()
		VyhodZbytocne()
		if (Aplik.length > 0) Vykonaj()
	} while (Aplik.length > 0)
	fh.pp.value = ""
	for (var i = 0; i < PPam.length; i++) {
		fh.pp.value += PPam[i] + "\n"
	}
}
////// Vykona jeden krok: Najde aplikovatelne pravidla, vypise ich a vypise aj
////// novy obsah pracovnej pamate
function JedenKrok() {
	var fh = document.forms[0]
	Aplik = []
	Zhoda()
	VyhodZbytocne()
	fh.pvystup.value = ""
	if (Aplik.length > 0) {
		for (var z = 0; z < Aplik.length; z++) {
			fh.pvystup.value += Aplik[z] + "\n"
		}
		Vykonaj()
		fh.pp.value = ""
		for (var i = 0; i < PPam.length; i++) {
			fh.pp.value += PPam[i] + "\n"
		}
	}
}
////// Precita obsah TEXTAREA(pp), zapise ho do pracovnej pamate a znovu vypise pp
function NovaPP() {
	var fh = document.forms[0]
	var pam = ""
	if (navigator.appName == "Netscape") pam = fh.pp.value.split("\n")
	else pam = fh.pp.value.split("\r\n")
	PPam = []
	for (var i = 0; i < pam.length; i++) {
		if (pam[i] != "") {
//    Smuggle(pam[i])
			PPam.push(pam[i])
		}
	}
	fh.pp.value = ""
	for (var i = 0; i < PPam.length; i++) {
		fh.pp.value += PPam[i] + "\n"
	}
}
////// Opravuje nezmysly Internet Explorera - teraz nevyuzita
function Smuggle(fakt) {
	var fh = document.forms[0]
	fh.pvystup.value += navigator.appName
// for (var i = 0; i < fakt.length; i++) {
//  fh.pvystup.value += escape(fakt.charAt(i))
// }
}

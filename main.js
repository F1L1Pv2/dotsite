function site(number){
    window.location.href = `/${number}.html`
}


var iloscpytan = 8;
var wynik = 0;
var wynikpokaz = 0;
var pytania = new Array(iloscpytan);
var klucz = new Array('0', '0', '2', '1','1','2','2','0');

function pobierz() {
    for(i=1; i <= iloscpytan; i++) {
        for (j=0; j<3; j++) {
            if(eval(`document.getElementById(\"test\").pytanie${i}[${j}].checked == true`)) {
                pytania[i] = eval(`document.getElementById(\"test\").pytanie${i}[${j}].value`);
                break;
            }
        }
    }
}

function sprawdz() {
    for(i=1; i <= iloscpytan; i++) {
        if (pytania[i] == klucz[i-1]) {
            wynik++;
        }
    }
}

function main() {
    pobierz();
    sprawdz();
    wynikpokaz = Math.round((wynik / iloscpytan)*100);
    imie = document.getElementById("imie").value;
    nazwisko = document.getElementById("nazwisko").value;
    klasa = document.getElementById("klasa").value;
    alert(`brawo ${imie} ${nazwisko} klasa: ${klasa}\n${wynikpokaz}% (${wynik} poprawnych)`);
    wynik = 0;
    wynikpokaz = 0;
}

function algo(){
    for(let i=0; i<10; i++){
        document.getElementById("text").innerHTML += `${i} `
    }
}
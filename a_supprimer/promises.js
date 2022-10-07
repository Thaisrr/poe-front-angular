const obj = {
  nom: "Jean Michel"
}

console.log(obj.nom)


class Perso {
  name;

  sayMyNameSayMyName() {
    console.log( this.name )
  }

}

const p = new Perso();
p.name = 'Bidule';

const p2 = new Perso();
p2.name = 'Machin';

class A {
  nom = "coucou"
}

class B {
  nom = 'Hello';

  maMethode(nom) {
    console.log( this.nom );
    console.log(nom);
  }

}
const obj_b = new B();
console.log(obj_b.nom); // Hello
obj_b.maMethode('mon param'); //Hello     mon param



const b_again = new B();
b_again.nom = 'machin';

function truc(nom) {
  console.log(nom);
}

truc('toto');
truc('bidule');

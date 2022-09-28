class Kebab {
  viande: string;
  legumes: string[] = ['Salade', 'Tomate', 'Oignons'];
  pain: string;
  sauce: string;
  gratiné?: boolean;
  frite: boolean;
  boisson?: string;

  /**
   * @description Ceci est description
   * @param p_viande : string
   * @param p_sauce : string
   * @param p_frite : boolean (optionnel)
   * @param p_boisson: string (optionnel)
   */
  constructor(p_viande: string, p_sauce: string, p_frite: boolean = false, p_boisson?: string  ) {
    this.viande = p_viande;
    this.frite = p_frite;
    this.sauce = p_sauce;
    this.pain = 'sésame';
    this.boisson = p_boisson;
  }

  brulerLesDoigts() {
    console.log(`Ce kebab au(x) ${this.viande} brule les doigts!`)
  }
}

// objet
const mon_kebab = new Kebab('Falafel', 'Samourai');
mon_kebab.legumes = ['Salade', 'Oignons'];
mon_kebab.brulerLesDoigts();


const kebab_de_philippe = new Kebab('Chat', 'Algérienne', true);
kebab_de_philippe.brulerLesDoigts();



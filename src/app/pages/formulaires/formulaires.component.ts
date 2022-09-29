import { Component } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Formation} from "../../utils/types/Formation";

@Component({
  selector: 'app-formulaires',
  templateUrl: './formulaires.component.html',
  styleUrls: ['./formulaires.component.css']
})
export class FormulairesComponent{

/**** NgModel ***********************/
  plante: string = 'Lierre';
  user = {nom: '', email: ''};
  form_error = '';

  saveUser() {
    if(this.user.nom && this.user.email) {
      console.log('Utilisateur⋅trice sauvegardé⋅e', this.user);
      this.form_error = '';
    } else {
      this.form_error = 'Attention, les informations ne sont pas correctes'
    }
  }

/*********** Formulaires Reactifs *******************/

  // Début du composant
  fleur_control = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(10),
    Validators.pattern(/^[A-Z].*/)
  ]);

  saveFlower() {
    console.log('Fleur sauvegardée : ', this.fleur_control.value);
    // this.fleur_control.setValue('');
    this.fleur_control.reset();
    // vide la valeur et remet les propriétés à zéro ( untouched, pristine )
  }

  get error() {
    let error = '';
    if(this.fleur_control.hasError('required')) {
      error += "Ce champs est obligatoire ! "
    }
    if(this.fleur_control.hasError('minlength')) {
      error += "Minimum 2 caractères ! "
    }
    if(this.fleur_control.hasError('maxlength')) {
      error += "Maximum 10 caractères ! "
    }
    if(this.fleur_control.hasError('pattern')) {
      error += "Doit commencer par une majuscule ! "
    }
    return error;
  }



/******************* Reactive Forms Bis ***************/

// FromGroup => associé à un formulaire / groupe d'inputs
// FormControl => associé à un input ( ou select, textarea, ... )


formation_group = new FormGroup({
  title: new FormControl<string>('', [Validators.required]),
  start_date: new FormControl<string>(''),
  duration: new FormControl<number>(5),
  trainer: new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
  }),
  topics: new FormArray([
    new FormControl(),
    new FormControl()
  ]),
  students: new FormArray([
    new FormGroup({
      firstname : new FormControl(),
      lastname: new FormControl()
    })
  ]),
  tags: new FormArray<FormControl>([])
});
formation?: Formation;

obj_tags = [
  {label: 'Front End', value: 'FRONT'},
  {label: 'Back End', value: 'BACK'},
  {label: 'Informatique', value: 'INFORMATIQUE'},
  {label: 'Design', value: 'DESIGN'},
];

  get title() {
    return this.formation_group.controls.title;
  }

  get topics_array() {
    return this.formation_group.controls.topics as FormArray
  }

  get students_array() {
    return this.formation_group.controls.students as FormArray;
  }

  get tags_array() {
    return this.formation_group.controls.tags as FormArray;
  }

saveFormation() {
   // this.formation = this.formation_group.value as Formation;
    console.log(this.formation_group.value);
}

addTopic() {
    this.topics_array.push(new FormControl());
}

addStudent() {
    this.students_array.push(
      new FormGroup({
        firstname : new FormControl(),
        lastname: new FormControl()
      })
    )
}

toggleTags(e: Event) {
    const checkbox = e.target as HTMLInputElement;
    if(checkbox.checked) {
      // On ajoute le tag dans le tableau tas_array
      this.tags_array.push(new FormControl(checkbox.value))
    } else {

      const index = this.tags_array.controls.findIndex(control => control.value === checkbox.value);
      this.tags_array.removeAt(index);
    }
}

}

import { PersonModel } from './../../model/personModel';
import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  people: PersonModel [] = [];
  formPerson: PersonModel = {
    id: "",
    fullname: "",
    birth: ""
  };
  title: string = this.formPerson.id != "" ? 'Edit' : 'Register';

  constructor(private personInyectable: PersonService) { }

  ngOnInit(): void {
    this.getAllPeople();
  }

  getAllPeople(){
    this.personInyectable.listPerson().subscribe(res =>{
      this.people = res;
    })
  }

  createPerson(){
    this.personInyectable.savePerson(this.formPerson).subscribe(() => {
      alert(`Person ${this.title}) Success`)
      this.formPerson.id = "";
      location.reload();
    })
  }

  public editPerson(persona: PersonModel){
    this.formPerson = persona;
  }

  public deletePerson (idPerson: number | string):any{
    this.personInyectable.deletePerson(idPerson).subscribe((res) => {
      alert("Persona eliminada correctamente");
      location.reload();
    })
  }

}

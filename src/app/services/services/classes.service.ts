import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {
  classes = new BehaviorSubject<any[]>([])

  onAddClass(name: string, year: string, teacher: string){
    let newClass = {
      name: name,
      year: year,
      teacher: teacher
    }
    this.classes.next(this.classes.getValue().concat({name: newClass.name, year: newClass.year, teacher: newClass.teacher}))
  }


  constructor() { 

  }
}

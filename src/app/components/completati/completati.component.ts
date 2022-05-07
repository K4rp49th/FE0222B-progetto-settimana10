import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/service/todos.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {

  constructor(
    public todosService: TodosService
  ) {

   }

  ngOnInit(): void {
  }

}

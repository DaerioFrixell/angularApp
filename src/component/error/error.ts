import { Component, OnInit } from '@angular/core'
import { ErrorService } from 'src/model/error/error.service'

@Component({
  selector: 'error-component',
  templateUrl: './error.html',
  styleUrls: ['./error.scss'],
})
export class ErrorComponent implements OnInit {
  constructor(public errorService: ErrorService) {}
  ngOnInit() {}
}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiChildService {

  constructor() { }

  getAnswer() { return 42; }
}

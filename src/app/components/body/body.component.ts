import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: 'body.component.html'
})
export class BodyComponent {
    
    show: boolean = true;

    sentence = {
        author: 'Ben Parker',
        message: 'With great power comes great responsibility.'
    }

    characters: string[] = ['Thor', 'Ironman', 'Spiderman', 'Juan Villa superhero']
}
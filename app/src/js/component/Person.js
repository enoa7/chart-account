'use strict';

export default class Person {

    constructor(name, answer) {
        this.name = name;
        this.answer = answer;
    };

    displayQuestion() {
        return `Hello ${this.name}! Are you...?`
    };

    displayAnswer() {
       return this.answer;
    }

}

import { 알콜비중 } from "./lawStandard";

/**
 * Drink interface
 * @property {number} volume - The volume of the drink in milliliters(ml)
 * @property {number} alcoholPercentage - The alcohol percentage of the drink
 * @property {number} time - The time the drink was consumed
 */
export class Drink {

  constructor(private volume: number, private alcoholPercentage: number, private time: number = Date.now()) { }

  get elapsedTime() {
    return (Date.now() - this.time);
  }

  get alcoholConsumed() {
    return this.calculateAlcoholConsumed();
  }

  calculateAlcoholConsumed() {
    return this.volume * this.alcoholPercentage * 알콜비중 / 100;
  }
}

export class SojuOneShot extends Drink {
  constructor() {
    super(50, 16,);
  }
}

export class Macju500 extends Drink {
  constructor() {
    super(500, 6.3,);
  }
}

export class WineOneGlass extends Drink {
  constructor() {
    super(150, 10,);
  }
}

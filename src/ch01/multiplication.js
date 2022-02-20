class Dallar {
  #amount;
  constructor(amount) {
    this.#amount = amount;
  }

  times(value) {
    this.#amount *= value;
  }

  get amount() {
    return this.#amount;
  }
}

export default Dallar;

// Definição da classe A
class A {
  constructor(A1, A2) {
    this._A1 = A1;
    this._A2 = A2;
  }

  // Getters e Setters
  get A1() {
    return this._A1;
  }

  set A1(value) {
    this._A1 = value;
  }

  get A2() {
    return this._A2;
  }

  set A2(value) {
    this._A2 = value;
  }

  // Métodos MA1 e MA2
  MA1() {
    console.log("Método MA1 chamado");
  }

  MA2() {
    console.log("Método MA2 chamado");
  }
}

// Definição da classe B
class B {
  constructor(B1, B2) {
    this._B1 = B1;
    this._B2 = B2;
  }

  // Getters e Setters
  get B1() {
    return this._B1;
  }

  set B1(value) {
    this._B1 = value;
  }

  get B2() {
    return this._B2;
  }

  set B2(value) {
    this._B2 = value;
  }

  // Métodos MB1 e MB2
  MB1() {
    console.log("Método MB1 chamado");
  }

  MB2() {
    console.log("Método MB2 chamado");
  }
}

// Exemplo de utilização das classes A e B
const objetoA = new A(10, 3.14);
const objetoB = new B(20, 6.28);

objetoA.MA1();
objetoA.MA2();
objetoB.MB1();
objetoB.MB2();

class C {
  constructor(C1, C2) {
    this._C1 = C1;
    this._C2 = C2;
  }

  // Getters e Setters
  get C1() {
    return this._C1;
  }

  set C1(value) {
    this._C1 = value;
  }

  get C2() {
    return this._C2;
  }

  set C2(value) {
    this._C2 = value;
  }

  // Métodos MC1 e MC2
  MC1() {
    console.log("Método MC1 chamado");
  }

  MC2() {
    console.log("Método MC2 chamado");
  }
}

class Tree {
  constructor(species) {
    this.species = species;
  }

  static definition() {
    return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
  }
}

class Deciduous extends Tree {
  constructor(species, name) {
    super(species);
    this.name = name;
  }

  static definition() {
    return `${super.definition()} Deciduous trees shed their leaves annually.`;
  }
}

class Evergreen extends Tree {
  constructor(species, name) {
    super(species);
    this.name = name;
  }

  static definition() {
    return `${super.definition()} Evergreens keep their leaves all year round.`;
  }
}
const genericTree = new Tree("Generic Tree");
console.log(genericTree.species); // "Generic Tree"
console.log(Tree.definition());

const oakTree = new Deciduous("Oak", "Oak Tree");
console.log(oakTree.species); // "Oak"
console.log(oakTree.name); // "Oak Tree"
console.log(Deciduous.definition());

const pineTree = new Evergreen("Pine", "Pine Tree");
console.log(pineTree.species); // "Pine"
console.log(pineTree.name); // "Pine Tree"
console.log(Evergreen.definition());

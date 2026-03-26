class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello my name is", this.name, "and I ", this.age, "years old");
    }

}

const person = new Person("Filip",20);
person.greet();

class Team{
    constructor(team, ceo, wins, location, tituls){
        this.team = team;
        this.ceo = ceo;
        this.wins = wins;
        this.location = location;
        this.tituls = tituls;
    }

    indroduction()
    {
        console.log(this.team, "je pod vedenim", this.ceo, this.team, "nazbieral za svoju existenciu", 
        this.wins,"vitastiev", "a jeho localita je v", this.location, "a nazbieral celokova", this.tituls, "titulov")
    }
}

const team = new Team("McLaren", "Andrea Stella", 143, "Woking, Velka Britania", 12);
team.indroduction();
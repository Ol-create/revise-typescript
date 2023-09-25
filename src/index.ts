interface Calender {
    name: string;
    addEvent(): void;
    removeEvent(): void;
}

interface GoogleClender extends Calender {
    syn(): void;
}

class CloudCarlender implements Calender {
    // name: string;
    constructor(public name: string) {}
    addEvent(): void {
        throw new Error("Method not implemented.");
    }
    removeEvent(): void {
        throw new Error("Method not implemented.");
    }

}
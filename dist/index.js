"use strict";
class Rider {
    start() {
        Rider._activeRide++;
    }
    stop() {
        Rider._activeRide--;
    }
    static get activeRide() {
        return Rider._activeRide;
    }
}
Rider._activeRide = 0;
let rider1 = new Rider;
let rider2 = new Rider;
rider1.start();
rider2.stop();
console.log(Rider.activeRide);
//# sourceMappingURL=index.js.map
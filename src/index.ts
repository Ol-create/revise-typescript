class Rider {
    private static _activeRide: number = 0

    start() {
        Rider._activeRide++
    }

    stop() {
        Rider._activeRide--
    }

    static get activeRide() {
        return Rider._activeRide
    }
}

let rider1 = new Rider

let rider2 = new Rider

rider1.start()
rider2.stop()

console.log(Rider.activeRide)
// console.log(Rider._activeRide);
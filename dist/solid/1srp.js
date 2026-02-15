// class User {
//     getUserById() {
//         console.log(`Retrive the user information....`)
//     }
//     countTotalBooking() {
//         console.log(`Count the total booking of the user....`)
//     }
//     calculateThePerformance() {
//         console.log(`Calculate the performance of the user....`)
//     }
// }
import { v4 as uuidv4 } from 'uuid';
class User {
    userId;
    constructor() {
        this.userId = uuidv4();
    }
    getUserById() {
        console.log(`Retrive the user information....`);
        return this.userId;
    }
}
class Booking {
    countTotalBooking(user) {
        console.log(`Count the total booking of the user....${user.getUserById()}`);
    }
}
class Performance {
    calculateThePerformance(user) {
        console.log(`Calculate the performance of the user....${user.getUserById()}`);
    }
}
const user = new User();
const booking = new Booking();
const performance = new Performance();
booking.countTotalBooking(user);
performance.calculateThePerformance(user);
//# sourceMappingURL=1srp.js.map
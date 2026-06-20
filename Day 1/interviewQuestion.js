// let vehicles = [2,3,5,7,45]; // dynamic sizes

// function minTrips(vehicles, capacity = 50) {
//     if (!vehicles || vehicles.length === 0) return 0;

//     // Sort sizes
//     vehicles.sort((a, b) => a - b);

//     let left = 0;
//     let right = vehicles.length - 1;
//     let trips = 0;

//     while (left <= right) {
//         // If smallest + largest fits in one trip
//         if (vehicles[left] + vehicles[right] <= capacity) {
//             left++;
//         }
//         // Always take the largest vehicle
//         right--;
//         trips++;
//     }

//     return trips;
// }

// console.log(minTrips(vehicles));



function minTripsTwoLanes(vehicles, capacity = 50) {
    // Sort descending (big vehicles first)
    vehicles.sort((a, b) => b - a);

    let trips = [];

    for (let v of vehicles) {
        let placed = false;

        // Try to place in existing trips
        for (let trip of trips) {
            if (trip.top + v <= capacity) {
                trip.top += v;
                placed = true;
                break;
            } else if (trip.bottom + v <= capacity) {
                trip.bottom += v;
                placed = true;
                break;
            }
        }

        // If not placed, create new trip
        if (!placed) {
            trips.push({ top: v, bottom: 0 });
        }
    }

    return trips.length;
}

// Example
const vehicles = [2, 3, 5, 7, 45];
console.log(minTripsTwoLanes(vehicles)); 
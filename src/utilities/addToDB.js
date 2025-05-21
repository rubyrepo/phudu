import toast from 'react-hot-toast';

const getStoredAppoinment = () => {
    const storedDataStr = localStorage.getItem("appoinmentList");
    if (storedDataStr) {
        const storedDataData = JSON.parse(storedDataStr);
        return storedDataData;
    } else {
        return [];
    }
}

const addToStoredDB = (id, name) => {
    const storedDataData = getStoredAppoinment();

    if (storedDataData.includes(id)) {
        toast.error("Appointment already booked!");
        return "alreadyBooked";  // <-- Add this line
    } else {
        storedDataData.push(id);
        const data = JSON.stringify(storedDataData);
        localStorage.setItem("appoinmentList", data);

        toast.success(`Your appointment with ${name} is created!`);
        return "newBooking";  // <-- Add this line
    }
}


export { addToStoredDB };

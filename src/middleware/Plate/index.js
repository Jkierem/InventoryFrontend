import { getCollectionPath, createPlatePath, updatePlatePath, deletePlatePath } from "./constants";
import { strip } from "../../utils";

const Plate = {
    getAllPlates: () => {
        return fetch(getCollectionPath())
            .then(x => x.json())
            .then(x => {
                if (x.status === 200) {
                    return x.plates
                } else {
                    throw x.message
                }
            })
    },
    createPlate: ({ name, price }) => {
        return fetch(createPlatePath(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, price })
        })
            .then(x => x.json())
            .then(x => {
                if (x.status === 200) {
                    return x.plate;
                } else {
                    throw x.message;
                }
            })
    },
    updatePlate: ({ id, name, price }) => {
        return fetch(updatePlatePath(id), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(strip({ name, price }))
        })
            .then(x => x.json())
            .then(x => {
                if (x.status === 200) {
                    return x.plate;
                } else {
                    throw x.message;
                }
            })
    },
    deletePlate: (id) => {
        return fetch(deletePlatePath(id), {
            method: "DELETE"
        })
            .then(x => x.json())
            .then(x => {
                if (x.status === 200) {
                    return x.plate;
                } else {
                    throw x.message;
                }
            })
    }
}

export default Plate;
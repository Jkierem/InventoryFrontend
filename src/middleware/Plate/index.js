import { getCollectionPath, createPlatePath, updatePlatePath } from "./constants";
import { strip } from "../../utils";

const Plate = {
    getAllPlates: () => {
        return fetch(getCollectionPath())
            .then(x => x.json())
            .then(x => {
                if (x.status === 200) {
                    return x.plates
                } else {
                    return x.message
                }
            })
    },
    createPlate: ({ name, price, tags }) => {
        return fetch(createPlatePath(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, price, tags })
        })
    },
    updatePlate: ({ id, name, price, tags }) => {
        return fetch(updatePlatePath(id), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(strip({ name, price, tags }))
        })
            .then(x => x.json())
            .then(x => {
                if (x.status === 200) {
                    return x.plate;
                } else {
                    return x.message;
                }
            })
    },
}

export default Plate;
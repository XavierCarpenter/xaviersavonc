import axios from "axios";
import fre3agent from "../img/fre3agent.png"
import contentum from "../img/contentum.png"

// CONSTANTS

const UPDATE_BUSPROFILE = "UPDATE_BUSPROFILE";


// ACTION CREATORS

// export function getUser() {
//     return {
//         type: GET_USER,
//         payload: axios
//             .request({ url: "/api/me" })
//             .then(response => response.data)
//             .catch(err => err.message)
//     };
// }
export function updateBusProfile() {
    return {
        type: UPDATE_BUSPROFILE,
        payload: true
    };
}


// INITIAL STATE

const initialState = {
    busProfile: false,
    projects: [
        {
            name: "Fre3Agent",
            description: "Application for freelancers to post their content, and manage apointments with clients",
            image: fre3agent,
            tools: ["Javascript", "React", "Node.js", "Express.js", "SQL", "Material UI"],
            link: "fre3agent.club"
        },
        {
            name: "Contintum",
            description: "Front-End Developer",
            image: contentum,
            tools: ["Javascript", "React", "Node.js", "Express.js", "SQL", "Material UI"],
            link: "yes"
        },


        {
            name: "Cash app",
            description: "Application for freelancers to post their content, and manage apointments with clients",
            image: fre3agent,
            tools: ["Javascript", "React", "Node.js", "Express.js", "SQL", "Material UI"],
            link: "fre3agent.club"
        },
        {
            name: "Contintum",
            description: "Front-End Developer",
            image: contentum,
            tools: ["Javascript", "React", "Node.js", "Express.js", "SQL", "Material UI"],
            link: "yes"
        },

        {
            name: "Scooby",
            description: "Application for freelancers to post their content, and manage apointments with clients",
            image: fre3agent,
            tools: ["Javascript", "React", "Node.js", "Express.js", "SQL", "Material UI"],
            link: "fre3agent.club"
        },
        {
            name: "Contintum",
            description: "Front-End Developer",
            image: contentum,
            tools: ["Javascript", "React", "Node.js", "Express.js", "SQL", "Material UI"],
            link: "yes"
        },


        {
            name: "Registry",
            description: "Application for freelancers to post their content, and manage apointments with clients",
            image: fre3agent,
            tools: ["Javascript", "React", "Node.js", "Express.js", "SQL", "Material UI"],
            link: "fre3agent.club"
        },
        {
            name: "Contintum",
            description: "Front-End Developer",
            image: contentum,
            tools: ["Javascript", "React", "Node.js", "Express.js", "SQL", "Material UI"],

            link: "yes"
        }
    ]



};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        // case `${GET_USER}_PENDING`:
        //     return Object.assign({}, state, { isLoading: true });

        // case `${GET_USER}_FULFILLED`:
        //     return Object.assign({}, state, {
        //         isLoading: false,
        //         user: action.payload
        //     });

        // case `${GET_USER}_REJECTED`:
        //     return Object.assign({}, state, { isLoading: false, didErr: true });

        case UPDATE_BUSPROFILE:
            return Object.assign({}, state, { busProfile: action.payload });

        default:
            return state;
    }
}
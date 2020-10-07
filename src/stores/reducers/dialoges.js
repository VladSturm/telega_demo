const initialState = {
    dialoges: [],
    messagesWork: [],
    messagesFlood: []
}

export default function dialogesData(state = initialState, action) {
    switch (action.type) {
        case "SET_DIALOGES":
            return { ...state, dialoges: action.payload };
        case "SET_MESSAGES_WORK":            
            return { ...state, messagesWork: action.payload };
        case "SET_MESSAGES_FLOOD":            
            return { ...state, messagesFlood: action.payload };
        default:
            return state;
    }
}
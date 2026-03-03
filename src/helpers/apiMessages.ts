export const API_MESSAGES = {
    CLIENTS: {
        FETCH_ERROR: {
            status: 500,
            code: "CLIENT_FETCH_ERROR",
            message: "Error fetching clients list"
        },
        CREATE_ERROR: {
            status: 500,
            code: "CLIENT_CREATE_ERROR",
            message: "Error creating client"
        },
        UPDATE_ERROR: {
            status: 500,
            code: "CLIENT_UPDATE_ERROR",
            message: "Error updating client"
        },
        DELETE_ERROR: {
            status: 500,
            code: "CLIENT_DELETE_ERROR",
            message: "Error deleting client"
        },
        NOT_FOUND: {
            status: 404,
            code: "CLIENT_NOT_FOUND",
            message: "Client not found"
        },
        ALREADY_EXISTS: {
            status: 409,
            code: "CLIENT_ALREADY_EXISTS",
            message: "Client already exists"
        },
        INVALID_DATA: {
            status: 400,
            code: "CLIENT_INVALID_DATA",
            message: "Invalid client data"
        },
        SUCCESS: {
            status: 200,
            code: "CLIENT_SUCCESS",
            message: "Client operation successful"
        },
    },
    DEVELOPMENTS: {
        FETCH_ERROR: {
            status: 500,
            code: "DEVELOPMENT_FETCH_ERROR",
            message: "Error fetching developments list"
        },
        CREATE_ERROR: {
            status: 500,
            code: "DEVELOPMENT_CREATE_ERROR",
            message: "Error creating development"
        },
        UPDATE_ERROR: {
            status: 500,
            code: "DEVELOPMENT_UPDATE_ERROR",
            message: "Error updating development"
        },
        DELETE_ERROR: {
            status: 500,
            code: "DEVELOPMENT_DELETE_ERROR",
            message: "Error deleting development"
        },
        NOT_FOUND: {
            status: 404,
            code: "DEVELOPMENT_NOT_FOUND",
            message: "Development not found"
        },
        ALREADY_EXISTS: {
            status: 409,
            code: "DEVELOPMENT_ALREADY_EXISTS",
            message: "Development already exists"
        },
        INVALID_DATA: {
            status: 400,
            code: "DEVELOPMENT_INVALID_DATA",
            message: "Invalid development data"
        },
        SUCCESS: {
            status: 200,
            code: "DEVELOPMENT_SUCCESS",
            message: "Development operation successful"
        }
    },
    USERS: {
        FETCH_ERROR: {
            status: 500,
            code: "USER_FETCH_ERROR",
            message: "Error fetching users list"
        },
        CREATE_ERROR: {
            status: 500,
            code: "USER_CREATE_ERROR",
            message: "Error creating user"
        },
        UPDATE_ERROR: {
            status: 500,
            code: "USER_UPDATE_ERROR",
            message: "Error updating user"
        },
        DELETE_ERROR: {
            status: 500,
            code: "USER_DELETE_ERROR",
            message: "Error deleting user"
        },
        NOT_FOUND: {
            status: 404,
            code: "USER_NOT_FOUND",
            message: "User not found"
        },
        ALREADY_EXISTS: {
            status: 409,
            code: "USER_ALREADY_EXISTS",
            message: "User already exists"
        },
        INVALID_DATA: {
            status: 400,
            code: "USER_INVALID_DATA",
            message: "Invalid user data"
        },
        SUCCESS: {
            status: 200,
            code: "USER_SUCCESS",
            message: "User operation successful"
        }
    },
    AUTH: {
        LOGIN_ERROR: {
            status: 401,
            code: "AUTH_LOGIN_ERROR",
            message: "Invalid credentials"
        },
        LOGIN_SUCCESS: {
            status: 200,
            code: "AUTH_LOGIN_SUCCESS",
            message: "Login successful"
        },
        LOGOUT_SUCCESS: {
            status: 200,
            code: "AUTH_LOGOUT_SUCCESS",
            message: "Logout successful"
        },
        FORBIDDEN: {
            status: 403,
            code: "AUTH_FORBIDDEN",
            message: "Access denied"
        }
    }
};

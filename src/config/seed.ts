import bcrypt from "bcrypt";
import { userRepository } from "../repositories/userRepository.js";
import { API_MESSAGES } from "../helpers/apiMessages.js";
import env from "dotenv";

env.config();

async function seed() {
    const email = process.env.FIRST_ADMIN_EMAIL;
    const password = process.env.FIRST_ADMIN_PASSWORD;

    if (!email || !password) {
        console.error(API_MESSAGES.USERS.INVALID_DATA.message);
        process.exit(1);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    try {
        await userRepository.create({
            name: "Sistema Admin",
            email: email,
            password: hashedPassword,
            role: "admin"
        });
        console.log(API_MESSAGES.USERS.SUCCESS.message);
    } catch (error) {
        console.error(API_MESSAGES.USERS.CREATE_ERROR.message);
    }
}

seed();

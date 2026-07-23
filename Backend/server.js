import { app } from './src/app.js';
import { connectDB } from './src/config/db.js';

const port = process.env.PORT || 3000;
const startServer = async () => {
    await connectDB();

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};
startServer();
async () => {
    try {
        
    } catch (error) {
        console.error(`connected failed ${error.message}`);
        throw error;
    }
}
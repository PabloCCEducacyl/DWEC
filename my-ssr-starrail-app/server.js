import express from 'express';
import { StarRail } from 'starrail.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert import.meta.url to __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Initialize the StarRail client
const client = new StarRail();

// Serve static files from the "public" directory
app.use(express.static('public'));

// SSR route
app.get('/:userId', async (req, res) => {
    const userId = req.params.userId;
    try {
        // Fetch user data (replace 'USER_ID' with the actual user ID)
        const user = await client.fetchUser(userId);

        // Read the HTML template
        const templatePath = path.resolve(__dirname, 'index.html');
        let template = fs.readFileSync(templatePath, 'utf-8');

        // Inject user data into the HTML
        const renderedHtml = template
            .replace('<!-- USERNAME -->', user.nickname)
            .replace('<!-- LEVEL -->', user.friends)
            .replace('<!-- SIGNATURE -->', user.signature)
            .replace('<!-- CHARACTERS -->', user.characterCount)

        // Send the rendered HTML to the client
        res.status(200).send(renderedHtml);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
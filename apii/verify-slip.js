export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // Simulate slip verification (replace with real OCR/image processing logic)
            const isValid = req.body.accountNumber === '7748756';
            res.status(200).json({ valid: isValid });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}

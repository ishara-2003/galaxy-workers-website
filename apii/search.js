export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { phone } = req.body;
          
            const response = await fetch('https://graph.facebook.com/v17.0/phone_numbers', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer YOUR_ACCESS_TOKEN`
                }
            });
            const data = await response.json();
            const accounts = data.data.filter(acc => acc.phone.includes(phone)).map(acc => ({
                number: acc.phone,
                name: acc.display_name,
                repeated: accounts.some(a => a.number === acc.phone && a !== acc)
            }));
            res.status(200).json({ accounts });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}

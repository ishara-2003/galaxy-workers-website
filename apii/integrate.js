export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
          
            const { code } = req.body;
            const response = await fetch(`https://graph.facebook.com/v17.0/oauth/access_token?client_id=YOUR_META_APP_ID&client_secret=YOUR_META_APP_SECRET&code=${code}&redirect_uri=${encodeURIComponent('YOUR_REDIRECT_URI')}`);
            const data = await response.json();
            res.status(200).json({ success: true, accessToken: data.access_token });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    } else {
        res.status(405).json({ success: false, error: 'Method not allowed' });
    }
}

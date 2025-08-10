export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const { code } = req.query;
           
            const response = await fetch(`https://graph.facebook.com/v17.0/oauth/access_token?client_id=1282075310376377
&client_secret=4a3ce4f658d88e408d42443dbd5caa4c&code=${code}&redirect_uri=${encodeURIComponent('https://galaxy-workers.vercel.app/api/integrate-callback')}`);
            const data = await response.json();
          
            res.redirect('/?integrated=true');
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}

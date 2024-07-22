const express = require('express');
const pubg = require('pubg.js');
const app = express();
const PORT = process.env.PORT || 3000;

const client = new pubg.Client('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIyZTkwYzUwMC0yYTg0LTAxM2QtMGNkNC0zYTQyODlkMDMzMDgiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNzIxNjcyMDc4LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6Imp1c3RpY2UtdG91cm5hIn0.8t36_xyRhv8Zh2JEOD_9RxmuJ-qk6TzN87V7dk2VEeY', 'pc-eu'); // استبدل 'yourKey' بالقيمة الصحيحة واستخدم الشارد المناسب

app.use(express.static('public'));

app.get('/player/:name', async (req, res) => {
    try {
        const playerName = req.params.name;
        const player = await client.getPlayer({name: playerName});
        res.json({
            name: player.name,
            id: player.id
        });
    } catch (error) {
        res.json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

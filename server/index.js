const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const cors = require('cors');
require('dotenv').config();

const DB_URL = process.env.MONGODB_URL;
const dbName = 'doggies';
const dbCollection = 'messages';
const client = new MongoClient(DB_URL, { useUnifiedTopology: true });

const app = express();
app.use(morgan('common'));
app.use(helmet());
app.use(
	cors({
		origin: `http://localhost:${process.env.CLIENT_PORT}`,
	})
);
app.use(express.json());

app.get('/', (req, res) => {
	client.connect((err) => {
		const db = client.db(dbName);
		const collection = db.collection(dbCollection);

		//client.close();
	});
});

app.post('/api/postMessages', (req, res) => {
	client.connect((error) => {
		if (error) throw error;

		const db = client.db(dbName);
		const postsCollection = db.collection(dbCollection);
		postsCollection.find().toArray(async (err, result) => {
			postsCollection.insertOne(
				{
					name: req.body.name,
					email: req.body.email,
					message: req.body.message,
					postedAt: new Date(),
				},
				(err, result) => {
					assert.strictEqual(err, null);
					assert.strictEqual(1, result.result.n);
					assert.strictEqual(1, result.ops.length);
					res.json({ message: 'message posted' });
				}
			);
		});
	});
});

const port = process.env.SERVER_PORT || 8080;
app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
});

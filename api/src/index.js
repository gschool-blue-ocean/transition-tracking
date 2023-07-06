import app from "./server.js";

const PORT = process.env.PORT;

app.get();

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});

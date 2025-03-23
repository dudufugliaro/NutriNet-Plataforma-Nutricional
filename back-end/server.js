import "dotenv/config"
import app from "./src/app.js"

app.listen(3000, () => {
    console.log("Servidor back-end escutando na porta 3000");
})
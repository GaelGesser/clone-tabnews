import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT NOW() AS resultado");

  console.log(result.rows[0].resultado);
  response.status(200).json({ message: "Minha primeira API em Next.js!" });
}

export default status;

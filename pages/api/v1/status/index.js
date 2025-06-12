function status(request, response) {
  response.status(200).json({ message: "Minha primeira API em Next.js!" });
}

export default status;

function status(request, response) {
  response.status(200).json({ message: "Tudo ok!!!" });
}

export default status;
const ctrl = {};

ctrl.multer = (req, res) => {
  const fileUrl = req.file.path;
  const { name, price, description } = req.body;
  const doc = {
    name,
    price,
    description,
    imageUrl: fileUrl,
    id: crypto.randomUUID(),
  };
  console.log(doc);
  res.status(201).json({
    image: "http://localhost.4000/products/" + req.body.image,
  });
};
ctrl.cloudinary = () => {
  const { name, price, description } = req.body;
  const doc = {
    name,
    price,
    description,
    id: crypto.randomUUID(),
  };
  if (!req.file) {
    return res.status(400).json({ message: "No se ha subido ningún archivo" });
  }

  const fileUrl = req.file.path;
  doc.imageUrl = fileUrl;
  console.log("objeto", doc);
  res.status(200).json(doc);
};

export default ctrl;

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res
    .status(200)
    .json({ title: "John Doe", id: 1, description: "description_description" });
}

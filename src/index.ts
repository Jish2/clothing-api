import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const clothingCategories = {
	Tops: [
		"Graphics & Tees",
		"Basic Tees",
		"Hoodies & Sweatshirts",
		"Long Sleeve Tees",
		"Shirts",
		"Jackets",
		"Tank Tops",
		"Sweaters",
	],
	Bottoms: [
		"Pants",
		"Jeans",
		"Swim",
		"Shorts",
		"Sweatpants",
		"Cargo Pants ",
		"Baggy Pants",
		"Trousers",
		"Track Pants",
		"Carpenter Pants",
		"Chino Pants",
		"Joggers",
	],
	Shoes: ["Casual Shoes", "Slides & Slippers", "Athletic", "Boots", "Shoe Accessories"],
	Accessories: [
		"Hats & Beanies",
		"Socks",
		"Jewelry",
		"Backpacks & Sling Bags",
		"Sunglasses",
		"Boxer Briefs",
		"Belts",
	],
	Refined: ["Shirts", "Jackets", "Sweatshirts", "Pants", "Shorts", "Shoes", "Accessories"],
};

app.get("/", (req: Request, res: Response) => {
	res.send("TESTING!");
});

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

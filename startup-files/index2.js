const MATERIAL_IRON_INGOT_ID = "IRON-INGOT";
const MATERIAL_STICK_ID = "STICK";
const MATERIAL_AIR_ID = "";

const MATERIAL_AIR_IMG = "./assets/air.webp";
const MATERIAL_IRON_INGOT_IMG = "./assets/iron-ingot.webp";
const MATERIAL_STICK_IMG = "./assets/stick.webp";

const materials = [MATERIAL_AIR_ID, MATERIAL_IRON_INGOT_ID, MATERIAL_STICK_ID];
const materialsImageSrc = [
	MATERIAL_AIR_IMG,
	MATERIAL_IRON_INGOT_IMG,
	MATERIAL_STICK_IMG,
];

const pickaxeRecipe = [
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_AIR_ID,
	MATERIAL_STICK_ID,
	MATERIAL_AIR_ID,
	MATERIAL_AIR_ID,
	MATERIAL_STICK_ID,
	MATERIAL_AIR_ID,
];
const axeRecipe = [
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_AIR_ID,
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_STICK_ID,
	MATERIAL_AIR_ID,
	MATERIAL_AIR_ID,
	MATERIAL_STICK_ID,
	MATERIAL_AIR_ID,
];

const pickaxeRecipeImageSrc = "./assets/iron-pickaxe.webp";
const axeRecipeImageSrc = "./assets/iron-axe.webp";

const recipeList = [pickaxeRecipe, axeRecipe];
const recipeImageSrcList = [pickaxeRecipeImageSrc, axeRecipeImageSrc];

const craftingTable = ["", "", "", "", "", "", "", "", ""];
const inventoryTable = [1, 2];

// Coder ici
const btn = document.createElement("button");
const btn1 = document.createElement("button");
const imgAdd = document.createElement("img");
const imgAdd2 = document.createElement("img");
const invent = document.getElementById("inventory");

imgAdd.src = MATERIAL_STICK_IMG;
imgAdd.alt = "Iron-axe";
imgAdd2.src = MATERIAL_IRON_INGOT_IMG;
imgAdd2.alt = "Iron-lingot";

btn.appendChild(imgAdd);
invent.appendChild(btn);

btn1.appendChild(imgAdd2);
invent.appendChild(btn1);
const caseCraft = document.querySelectorAll(".case");
const case0 = document.getElementById("case0");
const imgAddCase0 = document.createElement("img");
imgAddCase0.src = MATERIAL_IRON_INGOT_IMG;

console.log(craftingTable);

let save = "";
btn.addEventListener("click", () => {
	btn.style.border = "3px, solid, red";
	save = MATERIAL_STICK_IMG;
	console.log(save);
});

let save1 = "";
btn1.addEventListener("click", () => {
	btn.style.border = "3px, solid, red";
	save1 = MATERIAL_IRON_INGOT_IMG;
	console.log(save1);
});

const imgAdd0 = document.createElement("img");
imgAdd0.src = MATERIAL_STICK_IMG;

for (let i = 0; i < caseCraft.length; i++) {
	const caseCraftObjet = caseCraft[i];

	caseCraftObjet.addEventListener("click", () => {
		const newImg = caseCraft[i].firstElementChild;

		if (newImg == null) return;

		newImg.src = save;
		newImg.alt = "stick";
	});
}

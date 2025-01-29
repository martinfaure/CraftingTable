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

const btn = document.createElement("button");
const imgAdd = document.createElement("img");
const invent = document.getElementById("inventory");

imgAdd.src = "./assets/stick.webp";
imgAdd.alt = "Iron-axe";

btn.appendChild(imgAdd);

invent.appendChild(btn);

const btn1 = document.createElement("button");
const imgAdd2 = document.createElement("img");
const case0 = document.getElementById("case0");
const case1 = document.getElementById("case1");
const case2 = document.getElementById("case2");
const case3 = document.getElementById("case3");
const case4 = document.getElementById("case4");
const case5 = document.getElementById("case5");
const case6 = document.getElementById("case6");
const case7 = document.getElementById("case7");
const case8 = document.getElementById("case8");

imgAdd2.src = MATERIAL_IRON_INGOT_IMG;
imgAdd2.alt = "Iron-lingot";

btn1.appendChild(imgAdd2);

invent.appendChild(btn1);

const imgAddCase0Iron = document.createElement("img");
imgAddCase0Iron.src = MATERIAL_IRON_INGOT_IMG;
const imgAddCase0Stick = document.createElement("img");
imgAddCase0Stick.src = MATERIAL_STICK_IMG;

btn1.addEventListener("click", () => {
	btn1.style.border = "3px, solid, red";

	if (
		case0.addEventListener("click", () => {
			case0.appendChild(imgAddCase0Iron);
		})
	) {
	}
	if (
		case1.addEventListener("click", () => {
			case1.appendChild(imgAddCase0Iron);
		})
	) {
	}
});

btn.addEventListener("click", () => {
	btn.style.border = "3px, solid, red";

	if (
		case0.addEventListener("click", () => {
			case0.appendChild(imgAddCase0Stick);
		})
	) {
	}
});

let button = "";
let image = "";
let save = "";

btn1.addEventListener("click", () => {
	btn1.classList.add("active");
});

btn.addEventListener("click", () => {
	btn.classList.add("active");
});

btn.addEventListener("click", () => {
	if ((btn1.classList.contains = "active")) {
		btn1.classList.remove = "active";
		btn.classList.add = "active";
		btn1.style.border = "none";
		btn.style.border = "active";
	}
});

btn1.addEventListener("click", () => {
	if ((btn.classList.contains = "active")) {
		btn.classList.remove = "active";
		btn1.classList.add = "active";
		btn.style.border = "none";
		btn1.style.border = "active";
	} else if (
		(btn.onclick = () => {
			btn.classList.remove("active");
		})
	) {
	}
});

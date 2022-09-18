
const allCategories = document.querySelectorAll(".item");
 console.log(`Number of categories: ${allCategories.length}`);
 for (let i = 0; i < allCategories.length; i += 1) {
     const textAllHeaders = allCategories[i].firstElementChild.textContent;
     const numberElements = allCategories[i].lastElementChild.children.length;
     console.log(`Category: ${textAllHeaders}`);
     console.log(`Elements: ${numberElements}`);
 }
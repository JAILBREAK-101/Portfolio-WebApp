// import * as pdfjsLib from "pdfjs-dist/webpack";

// export async function parsePdf(filePath) {
//   const loadingTask = pdfjsLib.getDocument(filePath);

//   const pdf = await loadingTask.promise;
//   const textContent = [];

//   for (let i = 1; i <= pdf.numPages; i++) {
//     const page = await pdf.getPage(i);
//     const content = await page.getTextContent();
//     const pageText = content.items.map((item) => item.str).join(" ");
//     textContent.push(pageText);
//   }

//   return textContent.join("\n"); // Returns combined text of all pages.
// }

import { AppContextType } from "./type";
import html2canvas from "html2canvas";
export const defaultAppData: AppContextType = {
  texts: {
    primary: { text: "Hello", font: "serif", size: "M" },
    secondary: { text: "World", font: "sans-serif", size: "SM" },
  },
  background: { color: "#F81CB4", type: "color" },
};
const downloadImage = (blob: string, fileName: string) => {
  const fakeLink = window.document.createElement("a");
  fakeLink.style.display = "none";
  fakeLink.download = fileName;

  fakeLink.href = blob;

  document.body.appendChild(fakeLink);
  fakeLink.click();
  document.body.removeChild(fakeLink);

  fakeLink.remove();
};
export const exportAsImage = async (
  element: HTMLElement,
  imageFileName: string
) => {
  const canvas = await html2canvas(element);
  const image = canvas.toDataURL("image/png", 1.0);
  downloadImage(image, imageFileName);
};

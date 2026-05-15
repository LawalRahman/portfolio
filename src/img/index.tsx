import logo from "./logo.PNG";
import avatar from "./avatar.jpeg";

export { logo, avatar };

const cryptoModules = import.meta.glob("./crypto/crypto*.jpeg", { eager: true });
export const cryptoImages = Object.keys(cryptoModules)
  .sort((a, b) => {
    const aNum = parseInt(a.match(/\d+/)![0]);
    const bNum = parseInt(b.match(/\d+/)![0]);
    return aNum - bNum;
  })
  .map((key) => (cryptoModules[key] as any).default);

const jobModules = import.meta.glob("./job/job*.jpeg", { eager: true });
export const jobImages = Object.keys(jobModules)
  .sort((a, b) => {
    const aNum = parseInt(a.match(/\d+/)![0]);
    const bNum = parseInt(b.match(/\d+/)![0]);
    return aNum - bNum;
  })
  .map((key) => (jobModules[key] as any).default);

const datingModules = import.meta.glob("./dating/dating*.jpeg", { eager: true });
export const datingImages = Object.keys(datingModules)
  .sort((a, b) => {
    const aNum = parseInt(a.match(/\d+/)![0]);
    const bNum = parseInt(b.match(/\d+/)![0]);
    return aNum - bNum;
  })
  .map((key) => (datingModules[key] as any).default);

const foodjointModules = import.meta.glob("./foodjoint/foodjoint*.png", { eager: true });
export const foodjointImages = Object.keys(foodjointModules)
  .sort((a, b) => {
    const aNum = parseInt(a.match(/\d+/)![0]);
    const bNum = parseInt(b.match(/\d+/)![0]);
    return aNum - bNum;
  })
  .map((key) => (foodjointModules[key] as any).default);

const kudiexModules = import.meta.glob("./kudiex/kudiex*.png", { eager: true });
export const kudiexImages = Object.keys(kudiexModules)
  .sort((a, b) => {
    const aNum = parseInt(a.match(/\d+/)![0]);
    const bNum = parseInt(b.match(/\d+/)![0]);
    return aNum - bNum;
  })
  .map((key) => (kudiexModules[key] as any).default);

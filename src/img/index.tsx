export const logo = require("./logo.PNG");
export const avatar = require("./avatar.jpeg");
export const cryptoImages = (() => {
  const imgs = [];
  for (let i = 1; i <= 18; i++) {
    const img = require(`./crypto/crypto${i}.jpeg`);
    imgs.push(img);
  }
  return imgs;
})();
export const jobImages = (() => {
  const jobs = [];
  for (let i = 1; i <= 5; i++) {
    const job = require(`./job/job${i}.jpeg`);
    jobs.push(job);
  }
  return jobs;
})();
export const datingImages = (() => {
  const dating = [];
  for (let i = 1; i <= 16; i++) {
    const date = require(`./dating/dating${i}.jpeg`);
    dating.push(date);
  }
  return dating;
})();
export const foodjointImages = (() => {
  const foodjoints = [];
  for (let i = 1; i <= 3; i++) {
    const foodjoint = require(`./foodjoint/foodjoint${i}.png`);
    foodjoints.push(foodjoint);
  }
  return foodjoints;
})();
export const kudiexImages = (() => {
  const kudiex = [];
  for (let i = 1; i <= 1; i++) {
    const kud = require(`./kudiex/kudiex${i}.png`);
    kudiex.push(kud);
  }
  return kudiex;
})();

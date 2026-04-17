
const fs = require('fs-extra');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const session = process.env.SESSION || ' KEITH;;;H4sIAAAAAAAAA5VUS5KjRhC9iqO2UoxASICI6IgBfUAfJCSEhHDMooDiI/HrogChCUXYvkT3wjqCN76Ar9RHcNCf6VnY4zarIqsi8+V7L/MrSNIwR3NUA+EryHBYQoKaI6kzBAQgFZ6HMGgDFxIIBDAe8wi54cGYSU7Etzaif2pZymKCE70vS2XJu60YibM4ovI7cG2DrLCj0PlBwnyl+yOxs1uFFl+ibbWq40Vq9WPR3k+z0u+xlqIfKD02g94duDYZYYjDxB9nAYoRhtEc1RoM8cfgr5an2pLQcSpik5+mFxrd74bRvqMoFsdO5N3gEKoLu4qnlPMx+Kzkkgmzw8l21rO7y92q7GrV/Yg2ld1In/Dn+X50XDIHi9+IL/Dz0E+QO3VRQkJSf5j3+ZyymYFUSAd1fi9JJy04GnqpdyMuPHmceV45Mh3bHBsk/Ad517Fy8luHkaXKyb22ibfzzjyoeXOsK/sqNmkoK3Mqtn0p/x64ht+8cvo/vKsji6SzIKU7A3NUMYtQRzDe6J3gsjTzYbVLyYHcL/r7kFY/Bn/h7yHLaqI5Og0Lq2RMsy8t98ZU9YrDwLKHy/VajS50IZr+O3xICvwjlIbo8YYxkWVZ2pBDWohrGpnacU1W2kSVcc3HA98uWc86dzU8M+RiQSZDe5/MYWT4YjGRJLqr9gYlFXM0kqMxJ3lJsL577uiE6qkLBPraBhj5YU4wJGGaNLEu3W8D6JY6cjAiz/QChWPVXTki/JFmNNXcdbRTp8ezFJVWo1lZ9vfnTLP4jUVR1R1ogwynDspz5CphTlJcqyjPoY9yIPz8pQ0SdCYvwjXlmG4beCHOiZEUWZRC903Vt0voOGmREL1OnGFzQBgI1HsYERImft7wWCQQO0FYomEASQ4ED0Y5+tYhwsgFAsEF+ja1w9RtiF+pqz23kznQBvGzIKELBNDtMQOKpak+1+MF+nP+qWqywiz7lCAC2iB6ecUMehw1oHmKojiaEejPTbwNEtikAk+3h9+fbg9//fR0e/jj6fbw59Pt8den2+MvT7fH3xohXttoqrqIwDDKgQCGy6PR6Tij8QzSnErJsjj2xaEvgve23/zzoo8pK1vk5hXetLahanvdQ5mho2Y4MbcidJkOvZHIs2YUROu7f0gCBFB215dlJ6ICORJ3p8tWZRXLCtU5PumuM62yNK33dmtDH2OZcfFZsc0hnx5HdK+Xn31JdKL+8WIMECTGMa0m1ZapkDr075pqLipDB31fLDyZq9jbd9aTineN+2PH2RwKn5TG9nxqraWqomBkqYwoDmotXmyzkSj1VvaUPXjnOpizHXVseEQ7T/vifsyuipJS5q3Af3H282RFrxstfPZcI2jz64XoeUG8avNfAr/gbmxIXdvfpXjdOP8ytdLuHFBMYqtzyjv1jjIziBesmV5oZVZcsGuzYlJV2irqHywDXK9f2iCLIPFSHAMBwMTF6bN/cFo0vp4mXvqDYkNxOpXWvt40HsGciO+zsg1jlBMYZ0CgOY7h2QHX5V9eaTjNFJgHQABJzEh24/tazDKdQPI2eUBsPiWH4Po3p2UHnZUHAAA=';
const dev = process.env.OWNER_NUMBER || '243982697752';

const autostatusAutoviewStatus = process.env.AUTOVIEW_STATUS || 'true';
const autostatusAutoLikeStatus = process.env.AUTOLIKE_STATUS || 'false';
const autostatusAutoReplyStatus = process.env.AUTOREPLY_STATUS || 'false';
const autostatusStatusReplyText = process.env.STATUS_REPLY_TEXT || '✅ Status Viewed By Keith Md';
const autostatusStatusLikeEmojis = process.env.STATUS_LIKE_EMOJIS || '💛,❤️,💜,🤍,💙';

const botPrefix = process.env.PREFIX || "+";
const botAuthor = process.env.AUTHOR || "𝗜𝗿 𝗱𝗮𝘃𝗶𝗱 𝗺𝗽𝗼𝗻𝗴𝗼";
const botexpiration = process.env.BOT_EXPIRATION_DATE || "11/03/2027";
const botUrl = process.env.BOT_PIC || "https://i.ibb.co/0vYTTpS/file-00000000fa7471fdb2e898553ecaf7dc.png";
const botGurl = process.env.BOT_GURL || "https://github.com/Keithkeizzah/KEITH-MD";
const botTimezone = process.env.BOT_TIMEZONE || "Africa/Nairobi";
const botBotname = process.env.BOTNAME || "𝗗𝗮𝘃𝗯𝗼𝘁 𝗢𝘂𝘁𝗶𝗹𝘀";
const botPackname = process.env.BOT_PACKNAME || "𝗗𝗮𝘃𝗯𝗼𝘁";
const botMode = process.env.BOT_MODE || "public";
const botSessionName = process.env.BOT_SESSION_NAME || "keith-md";

const { Sequelize } = require('sequelize'); 
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; 

const database = DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {  
  database,
  dev,
  session, 
  autostatusAutoviewStatus,
  autostatusAutoLikeStatus,
  autostatusAutoReplyStatus,
  autostatusStatusReplyText,
  autostatusStatusLikeEmojis,
  botPrefix,
  botAuthor,
  botUrl,
  botGurl,
  botTimezone,
  botBotname,
  botexpiration,
  botPackname,
  botMode,
  botSessionName
};

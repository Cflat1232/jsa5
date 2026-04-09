import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "trivia";

const fallbackGreeting = [
  { content: "Powered by MongoDB — explore Rick & Morty trivia content with a modern database backend." },
  { content: "Browse characters, view the latest news, and enjoy a responsive app experience." },
];

const fallbackNews = {
  title: "MongoDB integration is ready",
  body: "The app is configured to fetch news content from MongoDB when MONGODB_URI is provided. Until then, this fallback content keeps the page available.",
  image: null,
};

let cachedClient = global.mongoClient;
let cachedDb = global.mongoDb;

async function connectMongo() {
  if (!uri) {
    throw new Error("Missing MONGODB_URI environment variable.");
  }
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(uri, {
    maxPoolSize: 10,
  });
  await client.connect();

  const db = client.db(dbName);
  cachedClient = client;
  cachedDb = db;
  global.mongoClient = client;
  global.mongoDb = db;

  return { client, db };
}

export async function fetchGreeting() {
  if (!uri) {
    return fallbackGreeting;
  }

  try {
    const { db } = await connectMongo();
    const greetingDocs = await db
      .collection("greetings")
      .find({}, { projection: { _id: 0, content: 1 } })
      .toArray();

    if (!greetingDocs || greetingDocs.length === 0) {
      return fallbackGreeting;
    }

    return greetingDocs;
  } catch (error) {
    console.warn("MongoDB greeting fetch failed:", error);
    return fallbackGreeting;
  }
}

export async function fetchNewsItem() {
  if (!uri) {
    return fallbackNews;
  }

  try {
    const { db } = await connectMongo();
    const newsItem = await db
      .collection("news")
      .findOne({}, { projection: { _id: 0, title: 1, body: 1, image: 1 } });

    if (!newsItem) {
      return fallbackNews;
    }

    return newsItem;
  } catch (error) {
    console.warn("MongoDB news fetch failed:", error);
    return fallbackNews;
  }
}

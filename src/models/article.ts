import { Author, Source, Topic, Keyword } from ".";

class Article {
  id: number;
  headline: string;
  summary: string;
  body: string;
  image: string;
  source: Source;
  topics: Topic[];
  keywords: Keyword[];
  publicationDate: Date;
  author: Author;

  constructor(
    id: number,
    headline: string,
    summary: string,
    body: string,
    image: string,
    publicationDate: Date,
    source: Source,
    topics: Topic[],
    keywords: Keyword[],
    author: Author,
  ) {
    this.id = id;
    this.headline = headline;
    this.summary = summary;
    this.body = body;
    this.image = image;
    this.source = source;
    this.topics = topics;
    this.keywords = keywords;
    this.publicationDate = new Date();
    this.author = author;
  }
}

export default Article;

type SiteLink = {
  url: string;
  name: string;
};

type BlogEntryMetaData = {
  content: string;
  data: {
    title: string;
    date: string;
    tags: string[];
    slug: string;
    summary: string;
  };
};

export type { SiteLink, BlogEntryMetaData };

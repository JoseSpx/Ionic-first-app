export interface News{
    articles : Article[];
    status : string;
    totalResults : string;
}

export interface Article{

    author : string;
    content : string;
    description: string;
    publishedAt : string;
    title : string;
    url : string;
    urlToImage : string;
}
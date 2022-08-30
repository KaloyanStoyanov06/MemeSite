export class Post {
  postLink!: string;
  subreddit!: string;
  title!: string;
  url!: string;
  nsfw!: boolean;
  spoiler!: boolean;
  author!: string;
  ups!: number;
  preview!: string[];

  constructor(data?: any) {
    if (data) {
      console.log(data);
      this.postLink = data.postLink;
      this.subreddit = data.subreddit;
      this.title = data.title;
      this.url = data.url;
      this.nsfw = data.over_18;
      this.spoiler = data.spoiler;
      this.author = data.author;
      this.ups = data.ups;
      this.preview = data.preview;
    } else {
      this.postLink = '';
      this.subreddit = '';
      this.title = '';
      this.url = '';
      this.nsfw = false;
      this.spoiler = false;
      this.author = '';
      this.ups = 0;
      this.preview = [];
    }
  }
}

// {
//   "postLink": "https://redd.it/x1ey7v",
//   "subreddit": "dankmemes",
//   "title": "There is no Meme.",
//   "url": "https://i.redd.it/4td4fdt8ptk91.png",
//   "nsfw": false,
//   "spoiler": false,
//   "author": "Dumbass718101",
//   "ups": 44,
//   "preview": [
//     "https://preview.redd.it/4td4fdt8ptk91.png?width=108&crop=smart&auto=webp&s=53008ba247b367e1d6a9675da392d2ca3fc43d5f",
//     "https://preview.redd.it/4td4fdt8ptk91.png?width=216&crop=smart&auto=webp&s=705cbdaa93465cbf2269f580c9576873ef8ac802",
//     "https://preview.redd.it/4td4fdt8ptk91.png?width=320&crop=smart&auto=webp&s=786cf0bd36adb84bd4474e798d36a6342ea9874c"
//   ]
// }

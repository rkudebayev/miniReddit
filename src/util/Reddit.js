const url = 'https://www.reddit.com'

export const Reddit = {
    async getSubreddit() {
        const response = await fetch(`${url}/subreddits.json`);
        const json = await response.json();
       
        return json.data.children.map((subreddit) => subreddit.data);
    },

    async getSubreditPosts(subreddit) {
        const response = await fetch(`${url}${subreddit}.json`);
        const json = await response.json();

        return json.data.children.map((post) => post.data);
    },

     async getPostComment(permalink) {
        const response = await fetch(`${url}${permalink}.json`);
        const json = await response.json();
      
        return json[1].data.children.map((subreddit) => subreddit.data);
      }

}
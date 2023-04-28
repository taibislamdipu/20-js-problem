"use strict";
// Problem-12: A social media app needs to find all unique hashtags used in a user's posts.
// Scenario 1
const userPosts = [
    "Just went for a #run #fitness",
    "Enjoying the #weekend #friends #run",
    "Can't wait for the #vacation #beach",
];
const hashtagsSet = new Set();
const expressions = /#[a-zA-Z]+/g;
for (const post of userPosts) {
    const tags = post.match(expressions);
    if (tags) {
        for (const tag of tags) {
            hashtagsSet.add(tag);
        }
    }
}
console.log(hashtagsSet);
// Scenario 2
const posts = [
    {
        id: 1,
        content: "Check out my #cat pictures! #cute #feline",
    },
    {
        id: 2,
        content: "I love #coffee #coffee! #caffeineaddict",
    },
    {
        id: 3,
        content: "Just finished a great #workout! #fitnessgoals",
    },
];
const hashTagsSetOfPost = new Set();
const expression = /#[a-zA-Z]+/g;
for (const post of posts) {
    const tags = post.content.match(expression);
    if (tags) {
        for (const tag of tags) {
            hashTagsSetOfPost.add(tag);
        }
    }
}
console.log(hashTagsSetOfPost);

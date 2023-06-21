// Ques:-TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk. Design a class to encode a URL and decode a tiny URL.

// There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.

// Implement the Solution class:

// Solution() Initializes the object of the system.
// String encode(String longUrl) Returns a tiny URL for the given longUrl.
// String decode(String shortUrl) Returns the original long URL for the given shortUrl. It is guaranteed that the given shortUrl was encoded by the same object.

// Soln:-


let url = "https://leetcode.com/problems/design-tinyurl";

 let obj={};
function encode(longUrl) {
    
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let output="";
    let len= str.length;
    for(let i=0;i<6;i++){
    output+=str[Math.floor(Math.random()*len)];
    obj[output]=longUrl
return ("http://tinyurl.com/"+output)
    }
};
function decode(shortUrl) {
    let arr=shortUrl.split("/");
    return (obj[arr[arr.length-1]])
};
console.log(encode(longUrl));
console.log(decode(shortUrl))
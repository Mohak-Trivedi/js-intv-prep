// Class and Constructors

// Classes were introduced in ES6. Before that we used to use constructor functions.

// class Teacher {
//     constructor(name, channel, likes = 0) {
//         this.name = name;
//         this.channel = channel;
//         this.videoLikes = likes;
//     }

//     // no need to use function keyword
//     intro() {
//         return `Hey, it's ${this.name}! Welcome to ${this.channel}`;
//     }

//     like() {
//         this.videoLikes++;
//         return `Liked this video! Current Likes: ${this.videoLikes}`;
//     }
// }

// const mohakCoder = new Teacher("Mohak", "MohakCoder");
// Now type mohakCoder in browser console, you'll get:
// Teacher {name: 'Mohak', channel: 'MohakCoder', videoLikes: 0}
// Upon expanding, you'll notice [[Prototype]]: Object, upon expanding it, you'll get:
// intro(), like(), constructor() and [[Prototype]]: Object i.e. the Object Prototype
// If you type in console: mohakCoder.like() 3 times 
// and then type mohakCoder, you'll see the videoLikes: 3 
// const mohakCoder2 = new Teacher("MohakTrivedi", "MohakCoder2");
// Now, if you check videoLikes for mohakCoder2, it will be different, as 
// videoLikes of each object of Teacher is bound only to that object.
// In this manner, classes are also useful for maintaining states for each instance.


// Question: Convert the above class into a function constructor code.
// Answer:
// function Teacher(name, channel, likes = 0) {
//     this.name = name;
//     this.channel = channel;
//     this.videoLikes = likes;
// }

// Teacher.prototype.intro = function () {
//         return `Hey, it's ${this.name}! Welcome to ${this.channel}`;
// }

// Teacher.prototype.like = function () {
//     this.videoLikes++;
//     return `Liked this video! Current Likes: ${this.videoLikes}`;
// }

// const mohakCoder = new Teacher("Mohak", "MohakCoder");
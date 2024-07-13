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


// Inheritance
// Parent class
// class Teacher {
//     constructor(name, channel, likes = 0) {
//         this.name = name;
//         this.channel = channel;
//         this.videoLikes = likes;
//     }

//     intro() {
//         return `Hey, it's ${this.name}! Welcome to ${this.channel}`;
//     }

//     like() {
//         this.videoLikes++;
//         return `Liked this video! Current Likes: ${this.videoLikes}`;
//     }
// }

// // Child inherits from Parent class Teacher
// class YouTubeTeacher extends Teacher {
//     constructor(name, channel, likes, subscribers) {
//         super(name, channel, likes, subscribers);
//         this.subscribers = subscribers;
//     }

//     subscribersCount() {
//         return `${this.channel} has ${this.subscribers} subscribers.`;
//     }
// }

// const ytTeacher = new YouTubeTeacher("Mohak", "MohakCoder", 70, "70k");

// Type ytTeacher in console, you get:
// YouTubeTeacher {name: 'Mohak', channel: 'MohakCoder', videoLikes: 70, subscribers: '70k'}
// Upon expanding it, you get:
// name, channel, videoLikes, subscribers and [[Prototype]]: Object. 
// Upon expanding [[Prototype]]: Object, you get:
// constructor(), subscribersCount() and [[Prototype]]: Object
// Upon expanding [[Prototype]]: Object, you get:
// the prototype of Teacher i.e.:
// constructor() of Teacher, intro(), like() and [[Prototype]]: Object i.e. the Object Prototype

// Also, you'll be able to execute:
// ytTeacher.subscribersCount()
// ytTeacher.intro()
// i.e. even the methods of the parent.


// Static Methods
// Static Methods are usually made for factory usage i.e. some internal setting
// related work of the class.
// e.g. the static method paidCourse() will be used for initializing an object
// of the class. Not a good e.g. though.
// Static methods can't be accessed by any instance of the class nor within the 
// class. You have to access it by using the class name only as seen in below e.g. 
// class Teacher {
//     constructor(name, channel, likes = 0) {
//         this.name = name;
//         this.channel = channel;
//         this.videoLikes = likes;
//     }

//     static paidCourse() {
//         console.log('Not everyone should access this. This is a paid course.');
//         return new Teacher("Mohak", "MohakCoder", 70);
//     }

//     intro() {
//         return `Hey, it's ${this.name}! Welcome to ${this.channel}`;
//     }

//     like() {
//         this.videoLikes++;
//         return `Liked this video! Current Likes: ${this.videoLikes}`;
//     }
// }

// const teacher1 = Teacher.paidCourse();
// Type and check in console that an object of teacher has been created and its
// reference is given to teacher1.
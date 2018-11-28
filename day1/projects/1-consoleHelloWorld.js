// console.log("Hello World!");

// Try doing 
// console.log(document);

// console.log(window);
// console.log(process);
console.log(process.env.API_KEY);

if(process.env.NODE_ENV == 'development') {
    console.log("I am in development")
} else {
    console.log("I am in production")
}
// code your solution here
//1. saturdayFun function
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun(activity)


//2.mondaywork function expression
const mondayWork= function (action= "go to the office") {
    return `This Monday, I will ${action}.`;
};
console.log(mondayWork());
console.log(mondayWork("work from home."));



//3. wrapAdjectives function that returns a function
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}
const wrapWithStars = wrapAdjective("*");
console.log(wrapWithStars("a hard worker"))

const wrapWithPipes = wrapAdjective("||");
console.log(wrapWithPipes("a dedicated programmer"));

var today = new Date();
var hours = today.getHours();
var greetings;

if (hours > 18)
    greetings = "Good Evening";
else if (hours > 12)
    greetings = "Good Afternoon";
else if (hours > 0)
    greetings = "Good Morning";
else
    greetings = "Welcome";
document.write("<h1>" + greetings + "</h3>");

const nameSpan = document.getElementById("name"); 
const cursorSpan = document.getElementById("cursor"); 

autoType("Hello my name is Zafeer!", 200, 150);

function autoType(text, typeSpeed, blinkSpeed)
{
    let i = 0;
    // for typing wiht a certain speed.
    for (const letter of text)
    {
        setTimeout(() => {
            nameSpan.textContent += letter; 
        }, i*typeSpeed);
        i++;
    }

    // For blinking cursor
    let cursor = true;
    setInterval(() => {
        if (cursor)
        {
            cursorSpan.textContent = "_"
            cursor = false;
        }
        else
        {
            cursorSpan.textContent = ""
            cursor = true;
        }
    }, blinkSpeed);
}
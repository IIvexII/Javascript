let curElementNumber = 0;

function scrollHandler() {
    const distanceToBottom = document.body.getBoundingClientRect().bottom;

    if (distanceToBottom < document.documentElement.clientHeight + 150) {
        const newDataElement = document.createElement('div');
        curElementNumber++;
        newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
        document.body.append(newDataElement);
    }
}
window.addEventListener('scroll', scrollHandler);
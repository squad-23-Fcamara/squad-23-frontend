// -- FILTER FOR MENTORS (for each character while writing) -- 

//criação de form e evento submit 

const inputSearch = document.querySelector('');

inputSearch.addEventListener('input', event => {
    console.log(event.target.value.trim());
})

// -- GENERAL FUNCTION TO CREATE TAG W/ TEXTNODE  -- 

function createElementWithText(tagName, text) {
    const tag = document.createElement(tagName);
    const textNode = document.createTextNode(text);

    tag.appendChild(textNode);
    return tag;
} 

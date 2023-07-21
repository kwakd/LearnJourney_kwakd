const tagsEl = document.getElementById('tags');
const textArea = document.getElementById('textarea');

textArea.focus();

textArea.addEventListener('keyup', (e) => {
    createTags(e.target.value);
});

function createTags(input)
{
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    
    tagsEl.innerHTML = '';

    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    })
}
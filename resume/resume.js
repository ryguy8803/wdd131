const projects = [
	{
        title: 'AI Chatbot',
        desc: 'Lilith is an AI program that I developed in Python. It uses an early version of GPT and has an API key that connects with it. The program will wait and listen for voice input. Once it receives input it will send the text to the AI to process and then it will respond using text to voice.',
        tags: ['AI', 'API', 'Python', 'Text-to-voice', 'Voice-to-text'],
        link: 'https://github.com/ryguy8803/Lilith'
    }, 
    {
        title: 'Sentence Generator',
        desc: 'This program uses basic grammar logic to make short sentences in past present and future tenses.',
        tags: ['Python', 'Logic Problem', 'Dynamic'],
        link: 'https://github.com/ryguy8803/CSC-110/blob/main/sentences.py'
    },
    {
        title: 'Goal Tracker',
        desc: "This goal tracker program can create new goals, list all goals, save the goals to a file, load files, and keep track of how many times you've done a goal or if you completed it",
        tags: ['C#', 'Save-to-file', 'Load-from-file', 'Dynamic'],
        link: 'https://github.com/ryguy8803/CSE210/tree/main/prove/Develop05'
    },
    {
        title: 'Resume Website',
        desc: "I built this website that you're on, feel free to check out the source code!",
        tags: ['HTML', 'CSS', 'Javascript', 'Dynamic'],
        link: 'https://github.com/ryguy8803/wdd131/tree/main/resume'
    },
    {
        title: 'Maze Solver',
        desc: 'This program utilizes threading to find its way through a generated maze. Part 1 focuses on using depth-first searching, trying each route and backtracking after each dead end. Part 2 is breadth-first search. It does not backtrack but will split when different options are presented to it. Those options will continue to move forward and split until it finds the end of the maze.',
        tags: ['Recursion', 'Python', 'Threads', 'DFS', 'BFS'],
        link: 'https://github.com/ryguy8803/cse351/tree/main/lesson_08/prove'
    },
]

const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-btn');
const mainContainer = document.querySelector('#project-container');

function projectTemplate(project) {
    
    const tagsHtml = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    return `
        <div class="project-card">
            <h2 class="project-title">${project.title}</h2>
            <div class="project-tags">
                ${tagsHtml}
            </div>
            <p class="project-desc">${project.desc}</p>
            <a href="${project.link}" target="_blank" class="project-link">View Code on GitHub</a>
        </div>
    `;
}

function renderProjects(projectList) {
    mainContainer.innerHTML = '';

    if (projectList.length === 0) {
        mainContainer.innerHTML = '<p class="no-results">No projects found matching your search.</p>';
        return;
    }

    projectList.forEach(project => {
        const html = projectTemplate(project);
        mainContainer.insertAdjacentHTML('beforeend', html);
    });
}

// Search Logic
function searchHandler(event) {
    event.preventDefault();
    const query = searchInput.value.toLowerCase();

    const filteredProjects = projects.filter(project => {
        return (
            project.title.toLowerCase().includes(query) ||
            project.desc.toLowerCase().includes(query) ||
            project.tags.find(tag => tag.toLowerCase().includes(query))
        );
    });

    filteredProjects.sort((a, b) => a.title.localeCompare(b.title));
    renderProjects(filteredProjects);
}


searchBtn.addEventListener('click', searchHandler);
searchInput.addEventListener('keydown', function(element) {
    if (element.key === 'Enter') {
        searchHandler(element);
    }
});

function init() {
    renderProjects(projects);
}

init();
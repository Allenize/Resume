function printResume() {
    window.print();
}

const printButton = document.createElement('button');
printButton.textContent = 'Print Resume';
printButton.style.position = 'fixed';
printButton.style.top = '20px';
printButton.style.right = '20px';
printButton.style.padding = '10px 15px';
printButton.style.backgroundColor = '#3498db';
printButton.style.color = 'white';
printButton.style.border = 'none';
printButton.style.borderRadius = '4px';
printButton.style.cursor = 'pointer';
printButton.addEventListener('click', printResume);

document.body.appendChild(printButton);

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    const toggleButton = document.getElementById('dark-mode-toggle');
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Light Mode';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        toggleButton.textContent = 'Dark Mode';
        localStorage.setItem('darkMode', 'disabled');
    }
}

const darkModeToggle = document.createElement('button');
darkModeToggle.id = 'dark-mode-toggle';
darkModeToggle.textContent = 'Dark Mode';
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.top = '20px';
darkModeToggle.style.left = '20px';
darkModeToggle.style.padding = '10px 15px';
darkModeToggle.style.backgroundColor = '#2c3e50';
darkModeToggle.style.color = 'white';
darkModeToggle.style.border = 'none';
darkModeToggle.style.borderRadius = '4px';
darkModeToggle.style.cursor = 'pointer';
darkModeToggle.addEventListener('click', toggleDarkMode);

document.body.appendChild(darkModeToggle);

const darkModePreference = localStorage.getItem('darkMode');
if (darkModePreference === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeToggle.textContent = 'Light Mode';
}

const style = document.createElement('style');
style.id = 'dark-mode-styles';
style.textContent = `
    body.dark-mode {
        background-color: #2c3e50;
        color: #ecf0f1;
    }
    
    body.dark-mode .resume-section {
        background-color: #34495e;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }
    
    body.dark-mode header {
        background-color: #1a252f;
    }
    
    body.dark-mode .resume-section h2 {
        color: #2980b9;
        border-bottom-color: #2980b9;
    }
    
    body.dark-mode .job h3, 
    body.dark-mode .education-item h3 {
        color: #2980b9;
    }
    
    body.dark-mode footer {
        background-color: #1a252f;
    }
    
    body.dark-mode .contact a {
        color: #2980b9;
    }
    
    body.dark-mode .contact a:hover {
        color: #3498db;
    }
    
    body.dark-mode button {
        background-color: #2980b9;
    }
    
    body.dark-mode button:hover {
        background-color: #3498db;
    }
`;

document.head.appendChild(style);
console.log('This is my index.js...');
//Data is an array of object with contains information about the candidates
const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'kolkata',
        language: 'python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/23.jpg'
    },
    {
        name: 'Shubham sharma',
        age: 18,
        city: 'Bangalore',
        language: 'python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/24.jpg'
    },
    {
        name: 'camella cabello',
        age: 18,
        city: 'kolkata',
        language: 'python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/25.jpg'
    },
    {
        name: 'ashwariya rai',
        age: 47,
        city: 'mumbai',
        language: 'python',
        framework: 'flask',
        image: 'https://randomuser.me/api/portraits/women/26.jpg'
    },
    {
        name: 'Rohit Sharma',
        age: 35,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go framework',
        image: 'https://randomuser.me/api/portraits/men/27.jpg'
    },
]
//cv iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            //used ternary operator
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    };
}

//button listener for next button
const candidates = cvIterator(data);
nextCV();

const next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV() {
    const currentCandidate = candidates.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src='${currentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item">Name: ${currentCandidate.name}</li>
        <li class="list-group-item">${currentCandidate.age} years</li>
        <li class="list-group-item">Lives in ${currentCandidate.city}</li>
        <li class="list-group-item">primaily works on ${currentCandidate.language}</li>
        <li class="list-group-item">uses ${currentCandidate.framework}</li>
        </ul>`;
    }
    else {
        alert('End of Application');
        window.location.reload();
    }
}
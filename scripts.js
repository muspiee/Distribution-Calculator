document.getElementById('distributionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let orangesPerPerson = parseInt(document.getElementById('age').value);
    const totalPeople = parseInt(document.getElementById('totalPeople').value);
    const totalOranges = parseInt(document.getElementById('totalOranges').value);
    const gender = document.getElementById('gender').value;
    const trivial = document.getElementById('trivial').value;

    if (gender === 'male' && orangesPerPerson !== 15 && trivial === 'non-trivial') {
        orangesPerPerson += 2;
    }

    if (trivial === 'trivial') {
        if (gender === 'female' && orangesPerPerson !== 15) {
            orangesPerPerson += 4;
        } else if (gender === 'male' && orangesPerPerson !== 15) {
            orangesPerPerson += 2;
        }
    }

    document.getElementById('orangesAllowed').textContent = orangesPerPerson;
    const orangesDistributed = orangesPerPerson * totalPeople;
    const remainingOranges = totalOranges - orangesDistributed;

    document.getElementById('remainingOranges').textContent = remainingOranges;
});
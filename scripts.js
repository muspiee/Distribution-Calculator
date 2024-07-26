document.getElementById('distributionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve initial values
    const totalPeople = parseInt(document.getElementById('totalPeople').value);
    const totalOranges = parseInt(document.getElementById('totalOranges').value);
    const gender = document.getElementById('gender').value;
    const trivial = document.getElementById('trivial').value;
    
    // Start with the base oranges per person based on age group, which is also the max limit for that age group
    const maxOrangesPerAgeGroup = parseInt(document.getElementById('age').value);

    // Calculate equal distribution of total oranges among people, not exceeding the age-specific maximum
    let orangesPerPerson = Math.min(Math.floor(totalOranges / totalPeople), maxOrangesPerAgeGroup);

    // Apply conditional adjustments without exceeding the age-specific maximum
    if (trivial === 'non-trivial' && gender === 'male' && orangesPerPerson < maxOrangesPerAgeGroup) {
        orangesPerPerson = Math.min(orangesPerPerson + 2, maxOrangesPerAgeGroup);
    }

    if (trivial === 'trivial') {
        if (gender === 'female' && orangesPerPerson < maxOrangesPerAgeGroup) {
            orangesPerPerson = Math.min(orangesPerPerson + 4, maxOrangesPerAgeGroup);
        } else if (gender === 'male' && orangesPerPerson < maxOrangesPerAgeGroup) {
            orangesPerPerson = Math.min(orangesPerPerson + 2, maxOrangesPerAgeGroup);
        }
    }

    // Update the DOM with the results
    document.getElementById('orangesAllowed').textContent = orangesPerPerson;
    const orangesDistributed = orangesPerPerson * totalPeople;
    const remainingOranges = totalOranges - orangesDistributed;

    document.getElementById('remainingOranges').textContent = remainingOranges;
});

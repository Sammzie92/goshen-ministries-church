    fetch('texts/mission.txt')
        .then(response => response.text())
        .then(content => {
            // Insert the fetched content into the specified element
            document.getElementById('mission-content').textContent = content;
        })
        .catch(error => console.error('Error fetching content:', error));


    const sectionsOfInterest = ['transformation', 'community', 'kingdom-culture' , 'spirit-life',
        'church-community', 'serving', 'ministry', 'purpose_church', 'footer', 'location',
    ];

    fetch('texts/placeholders.txt')
        .then(response => response.text())
        .then(content => {
            const sections = content.split('#');
            sections.shift(); // Remove empty first element

            sections.forEach(section => {
                const lines = section.trim().split('\n');
                const sectionTitle = lines.shift().trim();

                if (sectionsOfInterest.includes(sectionTitle)) {
                    const content = lines.join('\n').trim();
                    document.querySelector(`.content-section[data-section="${sectionTitle}"]`).innerHTML = content;
                }
            });
        });

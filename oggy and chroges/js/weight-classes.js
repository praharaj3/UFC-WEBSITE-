document.addEventListener('DOMContentLoaded', function() {
    const weightClasses = [
       
      {
    name: "Flyweight",
    range: "125 lb / 56.7 kg",
    fighters: [
        { name: "Alexandre Pantoja", rank: 1, record: "27-5-0", isChamp: true },
        { name: "Brandon Moreno", rank: 2, record: "21-7-2" },
        { name: "Brandon Royval", rank: 3, record: "16-7-0" },
        { name: "Amir Albazi", rank: 4, record: "17-1-0" },
        { name: "Kai Kara-France", rank: 5, record: "24-11-0" },
        { name: "Matheus Nicolau", rank: 6, record: "19-4-1" },
        { name: "Alex Perez", rank: 7, record: "24-8-0" },
        { name: "Manel Kape", rank: 8, record: "19-6-0" }
    ]
},
{
    name: "Bantamweight", 
    range: "135 lb / 61.2 kg",
    fighters: [
        { name: "Sean O'Malley", rank: 1, record: "17-1-0", isChamp: true },
        { name: "Merab Dvalishvili", rank: 2, record: "16-4-0" },
        { name: "Aljamain Sterling", rank: 3, record: "23-4-0" },
        { name: "Cory Sandhagen", rank: 4, record: "17-4-0" },
        { name: "Marlon Vera", rank: 5, record: "23-8-1" },
        { name: "Petr Yan", rank: 6, record: "16-5-0" },
        { name: "Henry Cejudo", rank: 7, record: "16-3-0" },
        { name: "Song Yadong", rank: 8, record: "21-7-1" }
    ]
},
        // Add all other weight classes similarly
        {
            name: "Lightweight",
            range: "155 lb / 70.3 kg",
            fighters: [
                { name: "Islam Makhachev", rank: 1, record: "25-1-0", isChamp: true },
                { name: "Charles Oliveira", rank: 2, record: "34-9-0" },
                { name: "Justin Gaethje", rank: 3, record: "25-4-0" },
                { name: "Dustin Poirier", rank: 4, record: "29-8-0" },
                { name: "Arman Tsarukyan", rank: 5, record: "21-3-0" },
                { name: "Mateusz Gamrot", rank: 6, record: "23-2-0" },
                { name: "Beneil Dariush", rank: 7, record: "22-6-1" },
                { name: "Rafael dos Anjos", rank: 8, record: "32-15-0" }
            ]
        },
        {
    name: "Welterweight",
    range: "170 lb / 77.1 kg",
    fighters: [
        { name: "Leon Edwards", rank: 1, record: "22-3-0", isChamp: true },
        { name: "Belal Muhammad", rank: 2, record: "23-3-0" },
        { name: "Kamaru Usman", rank: 3, record: "20-4-0" },
        { name: "Shavkat Rakhmonov", rank: 4, record: "18-0-0" },
        { name: "Gilbert Burns", rank: 5, record: "22-7-0" },
        { name: "Jack Della Maddalena", rank: 6, record: "17-2-0" },
        { name: "Sean Brady", rank: 7, record: "16-1-0" },
        { name: "Geoff Neal", rank: 8, record: "15-5-0" }
    ]
},
{
    name: "Middleweight",
    range: "185 lb / 83.9 kg",
    fighters: [
        { name: "Dricus Du Plessis", rank: 1, record: "21-2-0", isChamp: true },
        { name: "Sean Strickland", rank: 2, record: "28-6-0" },
        { name: "Israel Adesanya", rank: 3, record: "24-3-0" },
        { name: "Robert Whittaker", rank: 4, record: "26-7-0" },
        { name: "Jared Cannonier", rank: 5, record: "17-6-0" },
        { name: "Paulo Costa", rank: 6, record: "14-3-0" },
        { name: "Marvin Vettori", rank: 7, record: "19-7-1" },
        { name: "Brendan Allen", rank: 8, record: "23-5-0" }
    ]
},
{
    name: "Heavyweight",
    range: "265 lb / 120.2 kg",
    fighters: [
        { name: "Jon Jones", rank: 1, record: "27-1-0", isChamp: true },
        { name: "Tom Aspinall", rank: 2, record: "14-3-0" },
        { name: "Ciryl Gane", rank: 3, record: "12-2-0" },
        { name: "Stipe Miocic", rank: 4, record: "20-4-0" },
        { name: "Sergei Pavlovich", rank: 5, record: "18-2-0" },
        { name: "Curtis Blaydes", rank: 6, record: "18-4-0" },
        { name: "Alexander Volkov", rank: 7, record: "37-10-0" },
        { name: "Jailton Almeida", rank: 8, record: "20-3-0" }
    ]
}
        // Continue for other weight classes...
    ];

    const grid = document.querySelector('.weight-class-grid');

    weightClasses.forEach(weightClass => {
        const card = document.createElement('div');
        card.className = 'weight-class-card';
        
        card.innerHTML = `
            <div class="weight-class-header">
                <h2 class="weight-class-title">${weightClass.name}</h2>
                <p class="weight-class-range">${weightClass.range}</p>
            </div>
            <div class="top-fighters">
                ${weightClass.fighters.map(fighter => `
                    <div class="top-fighter ${fighter.isChamp ? 'champion' : ''}">
                        <div class="fighter-rank">${fighter.rank}</div>
                        <div class="fighter-info">
                            <div class="fighter-name">${fighter.name}</div>
                            <div class="fighter-record">${fighter.record}</div>
                        </div>
                    </div>
                `).join('')}
                <button class="view-all-btn">View All ${weightClass.name} Fighters</button>
            </div>
        `;
        
        grid.appendChild(card);
    });
});
const marvel = {
    render: () => {

    const apikey = "d8b02dc109d7a677a61793797397e470";
    const ts = "1000";
    const hash = "15aa89127ec7f5cc41b3362aa8c68a9b";
    const url = 'http://gateway.marvel.com/v1/public/characters?limit=8&ts=' + ts +"&apikey=" + apikey + "&hash=" + hash;

        const container = document.querySelector('#marvel-row');
        let contentHTML = '';

        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                for (const hero of json.data.results) {
                    let urlHero = hero.urls[0].url;

                    contentHTML += `
                        <div class="hero-container">
                            <h2>${hero.name}.</h2>
                            <a href="${urlHero}" target="_blank">
                                <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}." class="thumbnail">
                            </a>
                            <br><br>
                            <a href="${hero.series.collectionURI}?&ts=1000&apikey=b8967386ad4e6ef1046e11c80cdd219d&hash=e377227eb68f9fa376e805403e164854" target="_blank">Ver series</a><br>
                            <a href="${hero.events.collectionURI}?&ts=1000&apikey=b8967386ad4e6ef1046e11c80cdd219d&hash=e377227eb68f9fa376e805403e164854" target="_blank">Ver eventos</a><br>
                            <a href="${hero.comics.collectionURI}?&ts=1000&apikey=b8967386ad4e6ef1046e11c80cdd219d&hash=e377227eb68f9fa376e805403e164854" target="_blank">Ver comics</a><br>
                            <a href="${hero.stories.collectionURI}&ts=1000&?apikey=b8967386ad4e6ef1046e11c80cdd219d&hash=e377227eb68f9fa376e805403e164854" target="_blank">Ver stories</a>
                        </div>`;
                }

                container.innerHTML = contentHTML;
            });
    },
};

marvel.render();

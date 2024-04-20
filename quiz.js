function generateWinners() {
    const participants = parseInt(document.querySelector('#participants').value);
    const winners = parseInt(document.querySelector('#winners').value);

    try {
        if (isNaN(participants) || isNaN(winners)) {
            throw new Error('Please enter valid numbers for participants and winners.');
        }

        const url = `http://www.random.org/integers/?num=${winners}&min=1&max=${participants}&col=1&base=10&format=plain&rnd=new`;

        fetch(url)
            .then(response => response.text())
            .then(data => {
                const winnersList = data.split('\n').filter(value => value.trim() !== '');
                document.querySelector('#result').innerText = `Winners: ${winnersList.join(', ')}`;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    } catch (error) {
        console.error('Error:', error.message);
    }
}

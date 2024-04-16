async function simuliereVerzoegung(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ms)
        }, ms)
    })
}

async function addiereNachVerzoegerung(a, b, ms){
    try {
        const mss = await simuliereVerzoegung(ms);
        console.log('Verzoegerung: ', mss ,'\n', 'Ergebnis: ', a + b)
    } catch (err) {
        console.error(err)
    }
}

addiereNachVerzoegerung(29, 71, 1000)
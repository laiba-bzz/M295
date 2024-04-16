function verdoppeln(num, callback) {
    setTimeout(() => {
        const ergebnis = num * 2;
        callback(ergebnis)
    }, 10);
}

verdoppeln(2, (ergebnis) => {
    console.log('Das Ergebnis ist: ', ergebnis)
});



export async function getData2 () {

    try {
        const getData2 = await fetch('https://catfact.ninja/fact')
        .then(getData => console.log(getData));
    }
}
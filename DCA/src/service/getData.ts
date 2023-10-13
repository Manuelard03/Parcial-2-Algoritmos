export async function getData () {

    try {
        const getData = await fetch('https://cataas.com/cat/')
        .then(getData => console.log(getData));
    }
}

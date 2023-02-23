const HelloWorld = () => {

    const getImages = async () => {

        try {
            const ApiKey = 'D8v7D4HRTGYvqymAspGnS64jqOBJoR49';
            const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ApiKey}`);
            const { data } = await res.json();
    
            const { url } = data.images.original;
            const img = document.createElement('img');
            img.src = url;
            document.body.append(img);
        } catch (error) {
            console.log(error)
        }

    }

    getImages();

    return;
}

export default HelloWorld;
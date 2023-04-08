import{v4 as uuidv4} from "uuid";

function chillHop() {
    return[
        {
            name: "Jazz Cabbage",
            artist: "Ian Weing, Strehlow",
            cover: "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
            id: uuidv4(), //generates a random id
            active: true, //is this song playing?
            color: ["#A74C4B", "#FDF0DD"], //array of colors
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9363"
        },

        {
            name: "Lagoons",
            artist: "Strehlow, Chris Mazuera",
            cover: "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
            id: uuidv4(), //generates a random id
            active: false, //is this song playing?
            color: ["#A74C4B", "#FDF0DD"], //array of colors
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8266"
        },

        {
            name: "Everlight",
            artist: "Parkbench Epiphany",
            cover: "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
            id: uuidv4(), //generates a random id
            active: false, //is this song playing?
            color: ["#A74C4B", "#FDF0DD"], //array of colors
            audio: "https://mp3.chillhop.com/serve.php/?mp3=27501"
        },

        {
            name: "Waiting",
            artist: "Parkbench Epiphany",
            cover: "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ["#A74C4B", "#FDF0DD"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=27504"
        },

        {
            name: "Waybackwhen",
            artist: "Philanthrope, Parkbench Epiphany",
            cover: "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
            id: uuidv4(), //generates a random id
            active: false, //is this song playing?
            color: ["#A74C4B", "#FDF0DD"], //array of colors
            audio: "https://mp3.chillhop.com/serve.php/?mp3=27502"
        },

    ];
}

export default chillHop;
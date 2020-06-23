import Tanya from "./images/image-tanya.jpg";
import John from "./images/image-john.jpg"
import Image3 from "./images/image-3.jpg"

const characters = [
    {
        id: 1,
        name: "Tanya Sinclair",
        testimony: "I've been interested in coding for a while but never taken the jump, until now. I couldnt recommend this course enough. I'm now in the job of my dreams and so excited about the future",
        image: Tanya,
        position: "UX Engineer",
        hobbies: "photography, cars, dogs"
    },
    {
        id: 2,
        name: "John Takpor",
        testimony: "If you want to lay the best foundation possible, I reccommend you take this course. The depth the instuctors go to is incredible. I now feel confident about starting out as a profesional developer",
        position: "Junior Fullstack Developer",
        image: John,
        hobbies: "board games, outdoors"
    },
    {
        id: 3,
        name: "Ishi Ukwu 9jaSwag",
        testimony: "I like web developement. Years ago, I wanted to get into a program that will help me immensely to achieve my goals. I stumbled on this program and enrolled. In hindsight, that was the best decision that I ever made beacuse I am now a mid-level programmer and this bootcamp was my springboard",
        position: "Mid-level DevOps Engineer",
        image: Image3,
        hobbies: "fashion, cooking, hanging out"
    }
];

export function getHobbies(){
    for (let i =0; i < characters.length; i++){
        return characters[i]['hobbies'];
    }
}

export default characters;
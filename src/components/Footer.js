import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () =>{
    return (
        <footer className ='bg-stone-900 text-white p-4 mt-4 '>
            <div className="flex justify-center">
            Made by  <a className="text-yellow-300 hover:underline pl-2" href="https://github.com/EyuReaper">Eyuel Getachew</a>
            - Design inspired by <a className="text-purple-300 pl-2 pr-2 hover:underline" href="https://dribbble.com/shots/24481094-Furniture-Purchase-Vision-OS">Yi Li</a>

            <p >Copyright &copy; {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;
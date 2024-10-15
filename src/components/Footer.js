import React from "react";

const Footer = () =>{
    return (
        <footer className ='bg-blue-600 text-white p-4 mt-4'>
            <p>Copyright &copy; {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;
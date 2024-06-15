import React from "react";
import { BrowserRouter, Route, Link, Routes} from "react-router-dom";
import Contents from "./Contents";
import Contacts from "./Contact";
import AboutUs from "./AboutUs";

function Navbar() {
    return (
        <BrowserRouter>
            <nav style={styles.nav}>
                <ul style={styles.ul}>
                    <li style={styles.li}>
                        <Link to="/Contents" style={styles.a}>
                            Contents
                        </Link>
                    </li>
                    <li style={styles.li}>
                        <Link to="/AboutUs" style={styles.a}>
                            About Us
                        </Link>
                    </li>
                    <li style={styles.li}>
                        <Link to="/Contact" style={styles.a}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/Contents" element={<Contents/>} />
                <Route path="/AboutUs" element={<AboutUs/>} />
                <Route path="/Contact" element={<Contacts/>} />
            </Routes>
        </BrowserRouter>
    );
}

const styles = {
    nav: {
        backgroundColor: "#000",
        width: "21%",
        padding: 10,
    },
    ul: {
        listStyleType: "none",
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "space-around",
    },
    li: {
        display: "inline",
    },
    a: {
        color: "#FFF",
        textDecoration: "none",
        padding: "10px 20px",
        display: "block",
    },
};

export default Navbar;
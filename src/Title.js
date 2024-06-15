import React from "react";
function Title() {
    return (
        <header style={styles.header}>
            <h1>Simple React SPA With Using Routing</h1>
        </header>
    );
}
const styles = {
    header: {
        backgroundColor: '#FFD700',
        padding: '20px',
        textAlign: 'center',
        width: '20%',
    }
};
export default Title;

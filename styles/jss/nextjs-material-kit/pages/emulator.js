const emulatorStyles = {
    container: {
        height: '100%'
    },

    body: {
        height: "100vh",
        fontFamily: 'monospace',
        fontWeight: 'bold',
        fontSize: '20px',
        margin: '0',
        overflow: 'hidden',
        backgroundColor: '#222',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    
    },
    box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#aaa',
        height: '20em',
        width: '30em',
        maxWidth: '80%',
        maxHeight: '80%',
        backgroundColor: '#333',
        borderRadius: '0.4em',
        border: '2px solid #555',
        position: 'relative',
        flexDirection: 'column',
        transitionDuration: '0.2s',
        overflow: 'hidden'
    },
    input: {
        cursor: 'pointer',
        position: 'absolute',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        opacity: '0'
    },
    gameContainer: {
        width:'640px',
        height:'480px',
        maxWidth:'100%'
    }
}




// body, #box {
//     display: flex;
//     align-items: center;
//     justify-content: center;
// }

// #box {
//     color: #aaa;
//     height: 20em;
//     width: 30em;
//     max-width: 80%;
//     max-height: 80%;
//     background-color: #333;
//     border-radius: 0.4em;
//     border: 2px solid #555;
//     position: relative;
//     flex-direction: column;
//     transition-duration: 0.2s;
//     overflow: hidden
// }

// #box:hover, #box[drag] {
//     border-color: #38f;
//     color: #ddd
// }



// #display {
//     width: 100%;
//     height: 100%
// }

// select, button {
//     padding: 0.6em 0.4em;
//     margin: 0.5em;
//     width: 15em;
//     max-width: 100%;
//     font-family: monospace;
//     font-weight: bold;
//     font-size: 16px;
//     background-color: #444;
//     color: #aaa;
//     border-radius: 0.4em;
//     border: 1px solid #555;
//     cursor: pointer;
//     transition-duration: 0.2s
// }

// select:hover, button:hover {
//     background-color: #666;
//     color: #ddd
// }

export default emulatorStyles
  
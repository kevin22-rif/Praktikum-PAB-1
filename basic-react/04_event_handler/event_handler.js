// // Button Component
// const MyButton = (props) => {
//     const handleButtonClick = () => {
//         alert(props.message);
//     }

//     return (
//         <button onClick={handleButtonClick} style={{ margin: "10px" }}>
//             {props.children}
//         </button>
//     );
// }

// // App Component
// const MyApp = () => {
//     return (
//         <div>
//             <h1>Learn React</h1>
//             <MyButton message="Learn React">React</MyButton>
//             <MyButton message="Learn JavaScript">JavaScript</MyButton>
//         </div>
//     );
// }

// const myElement = <MyApp />;
// const myApp = myElement;

// ReactDOM.createRoot(document.getElementById('root')).render(myApp);



// Versi Class Component

class Button extends React.Component {
  handleClick = () => {
    alert(this.props.message);
  };

  render() {
    return (
      <button onClick={this.handleClick} style={{ margin: "10px" }}>
        {/* 'props.children' juga diakses dengan 'this.props.children' */}
        {this.props.children}
      </button>
    );
  }
}

class MyApp extends React.Component {
  render() {
    return (
      <div>
        <h1>Belajar React! (Class Component)</h1>
        <Button message="Pesan dari Tombol Pertama!">Tombol 1</Button>
        <Button message="Pesan dari Tombol Kedua!">Tombol 2</Button>
      </div>
    );
  }
}

const myElement = <MyApp />;
const myApp = myElement;

ReactDOM.createRoot(document.getElementById("root")).render(myApp);
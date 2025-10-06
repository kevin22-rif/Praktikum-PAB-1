// // Functional Component

// const { useState } = React;

// function SederhanaApp() {
//   // 1. Membuat state 'count' dengan nilai awal 0
//   const [count, setCount] = useState(0);

//   // 2. Membuat fungsi untuk menambah nilai
//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   // 3. Membuat fungsi untuk mengurangi nilai
//   const handleDecrement = () => {
//     setCount(count - 1);
//   };

//   // 4. Menampilkan JSX
//   return (
//     <div>
//       <h1>Pengenalan React Tingkat Dasar</h1>
//       <h2>Counter</h2>
      
//       {/* Tampilkan nilai state 'count' */}
//       <h1 style={{ fontSize: "4rem" }}>{count}</h1>
      
//       {/* Tombol dengan event handler onClick */}
//       <button onClick={handleDecrement} style={{ padding: "10px", margin: "5px" }}>-1</button>
//       <button onClick={handleIncrement} style={{ padding: "10px", margin: "5px" }}>+1</button>
//     </div>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<SederhanaApp />);



// Versi Class Component
const { useState } = React;

function SederhanaApp() {
  // 1. Membuat state 'count' dengan nilai awal 0
  const [count, setCount] = useState(0);

  // 2. Membuat fungsi untuk menambah nilai
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // 3. Membuat fungsi untuk mengurangi nilai
  const handleDecrement = () => {
    setCount(count - 1);
  };

  // 4. Menampilkan JSX
  return (
    <div>
      <h1>Pengenalan React Tingkat Dasar</h1>
      <h2>Counter</h2>
      
      {/* Tampilkan nilai state 'count' */}
      <h1 style={{ fontSize: "4rem" }}>{count}</h1>
      
      {/* Tombol dengan event handler onClick */}
      <button onClick={handleDecrement} style={{ padding: "10px", margin: "5px" }}>-1</button>
      <button onClick={handleIncrement} style={{ padding: "10px", margin: "5px" }}>+1</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<SederhanaApp />);
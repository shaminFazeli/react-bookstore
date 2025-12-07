// src/App.jsx
function App() {
  return (
    <div>
      {/* تست ۱: ساده‌ترین حالت */}
      <div style={{ padding: "20px" }}>
        <h1>تست Tailwind - فقط اینها باید رنگی باشند:</h1>

        <div className="p-4 bg-red-500 text-white mb-2">
          ✅ این باید قرمز باشد (bg-red-500)
        </div>

        <div className="p-4 bg-blue-500 text-white mb-2">
          ✅ این باید آبی باشد (bg-blue-500)
        </div>

        <div className="p-4 bg-green-500 text-white mb-2">
          ✅ این باید سبز باشد (bg-green-500)
        </div>

        <p className="text-red-500">✅ این متن باید قرمز باشد</p>
        <p className="text-blue-500">✅ این متن باید آبی باشد</p>
        <p className="text-green-500">✅ این متن باید سبز باشد</p>
      </div>
    </div>
  );
}

export default App;

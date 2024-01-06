import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  // Suggestion: Wrap the components with the context.
  return (
      <Router>
        <div className="bg-gray-200 min-h-screen">
          <div className="max-w-xl mx-auto w-full py-32 px-4">
            <div className="bg-white p-8 py-12 rounded-lg shadow-xl">
              {/*
                  Create the routing navigation considering the following:
                  "/": Form,
                  "/users": UserList,
                  "/users/:id": UserView
              */}
            </div>
          </div>
        </div>
      </Router>
  );
}

export default App;

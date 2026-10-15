import Books from "./components/Books";
import Layout from "./layouts/Layout";


function App() {
  return (
    // whatever we write between Layout component, turns to be its children 
    <Layout>
      <Books />
    </Layout>
  );
}

export default App;

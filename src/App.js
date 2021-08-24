import EditableForm from "./components/EditableForm";
import './App.css'
import { useState } from "react";
import InlineEditingPackage from "./components/InlineEditingPackage";
import ReactContentEditable from './components/ReactContentEditable'
import FullForm from "./components/FullForm";

function App() {

  const [resource, setResource] = useState({
    title: "Method 1 - Inputs.",
    desc: "Lorem Ipsum blah blah blah",
    type: "Backend",
  })

  const [resource2, setResource2] = useState({
    title: "Method 2 - ReactInlineEditing.",
    desc: "Lorem Ipsum blah blah blah",
    type: "Frontend",
  })

  const [resource3, setResource3] = useState({
    title: "Method 3 - ReactContentEditable.",
    desc: "Lorem Ipsum blah blah blah",
    type: "Frontend",
  })

  const [fullResource, setFullResource] = useState({
    title: "Method 1 - Inputs.",
    desc: "Lorem Ipsum blah blah blah",
    type: "Blog",
    link: "https://www.google.com",
    category: 'Backend',
    img: 'https://images.unsplash.com/photo-1575475479667-67b69b48b60b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1436&q=80'
  })

  return (
    <div className="App">
      <FullForm initResource={fullResource} updateResource={setFullResource} />
      {/* <EditableForm initResource={resource} updateResource={setResource} /> */}
      {/* <InlineEditingPackage initResource={resource2} updateResource={setResource2}/> */}
      {/* <ReactContentEditable initResource={resource3} updateResource={setResource3}/> */}
    </div>
  );
}

export default App;

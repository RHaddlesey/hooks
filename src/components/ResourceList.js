import React, { useState, useEffect } from "react";
import axios from "axios";

// the {resource} below is the prop value received from App.js as posts or todos
const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);
  // here we set up state on resources as an empty array and then we can change that on setResources

  const fetchResource = async resource => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );

    setResources(response.data);
  };

  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return <div>{resources.length}</div>;
  // return <div>{this.state.resources.length}</div>; as there is NO this on a function - we need to drop it
};

export default ResourceList;

// Pre-Hook
//  ResourceList extends React.Component {
//     state = { resources: [] };

//     async componentDidMount() {
//         const response = await axios.get(
//             `https://jsonplaceholder.typicode.com/${this.props.resource}`
//         );
//         this.setState({ resources: response.data });
//     }

//     async componentDidUpdate(prevProps) {
//         if (prevProps.resource !== this.props.resource) {
//             const response = await axios.get(
//                 `https://jsonplaceholder.typicode.com/${this.props.resource}`
//             );
//             this.setState({ resources: response.data });
//         }
//     }

//     render() {
//         return <div>{this.state.resources.length}</div>;
//     }
// }

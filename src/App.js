import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Home from './pages/Home';
import { useLocation } from 'react-router-dom'

import Chip from '@mui/joy/Chip';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

// Wrapper functional component to use hooks and pass props to class-based component
function withRouter(Component) {
    return (props) => {
        const location = useLocation();
        return <Component {...props} location={location} />;
    };
}

class App extends Component {

    render() {
        const currentPath = this.props.location.pathname;

        // Define a mapping of paths to text
        const pathTextMapping = {
            '/': 'Home',
            '/india': 'India News',
            '/us': 'US News',
            '/general': 'General News',
            '/technology': 'Technology News',
            '/science': 'Science News',
            '/health': 'Health News',
            '/business': 'Business News',
            '/entertainment': 'Entertainment News',
            '/sports': 'Sports News',
        };

        // Get the text for the current path
        const currentText = pathTextMapping[currentPath] || 'Unknown';

        return (
            <>
                <div className='flex'>
                    <Navbar />
                    <div aria-label='actual-rightSide' className='ml-64 min-h-screen flex-grow p-8 space-y-5 bg-slate-100'>
                        <div className='w-full flex items-center justify-between p-3 space-y-3'>
                            <h1 className='font-semibold tracking-wider text-xl'>Top Headlines</h1>

                            <Chip
                                color="primary"
                                size="sm"
                                variant="soft"
                                sx={{paddingX:'10px', paddingY:'5px'}}
                                >
                                {currentText}
                            </Chip>
                        </div>
                        
                        <Routes>
                            <Route path="/" element={<Home />} />

                            {/* Countries */}
                            <Route path="/india" element={<News country={"in"} category={"general"} />} />
                            <Route path="/us" element={<News country={"us"} category={"general"} />} />

                            {/* Categories */}
                            <Route path="/general" element={<News country={"us"} category={"general"} />} />
                            <Route path="/technology" element={<News country={"us"} category={"technology"} />} />
                            <Route path="/science" element={<News country={"us"} category={"science"} />} />
                            <Route path="/health" element={<News country={"us"} category={"health"} />} />
                            <Route path="/business" element={<News country={"us"} category={"business"} />} />
                            <Route path="/entertainment" element={<News country={"us"} category={"entertainment"} />} />
                            <Route path="/sports" element={<News country={"us"} category={"sports"} />} />
                        </Routes>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(App);



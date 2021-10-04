import React, { Component } from 'react'
import BlogPost from './components/BlogPost'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <BlogPost />
                <Footer />
            </div>
        )
    }
}

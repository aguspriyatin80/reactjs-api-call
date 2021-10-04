import React, { Component } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import Post from './Post';
import axios from 'axios'

let timestamp = new Date().getTime()

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false
    }
    handleFormChange = (event) => {
        // let title = event.target.value
        let formBlogPostNew = { ...this.state.formBlogPost }
        // console.log(event.target.name)        
        formBlogPostNew['id'] = timestamp
        // console.log(timestamp)
        formBlogPostNew[event.target.name] = event.target.value
        // console.log('new form', formBlogPostNew)
        this.setState({
            formBlogPost: formBlogPostNew
        })

    }
    putDataToAPI = () => {
        axios.put(`http://localhost:3009/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
            .then(res => {
                console.log(res)
                this.getPostAPI()
            })
    }
    postDataToAPI = () => {
        axios.post('http://localhost:3009/posts', this.state.formBlogPost)
            .then(res => {
                console.log(res)
            }, (err) => {
                console.log(err)
            })
    }
    handleSubmit = () => {
        // console.log(this.state.formBlogPost)
        if (this.state.isUpdate) {
            this.putDataToAPI()
            // this.handleFormChangeClear()

        } else {
            this.postDataToAPI()
            // this.handleFormChangeClear()

        }
        this.getPostAPI()


    }
    handleEdit = (data) => {
        console.log(data)
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })

        // axios.put(`http://localhost:3009/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
        //     .then(res => {
        //         console.log(res)
        //         this.setState({
        //             formBlogPost: this.state.formBlogPost
        //         })
        //     })
        //     .catch(err => {
        //         console.log(err.message)
        //     })
    }
    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             post: json
        //         })
        //     })
        this.getPostAPI()
    }
    getPostAPI = () => {
        axios.get('http://localhost:3009/posts?_sort=id&_order=desc')
            .then(result => {
                // console.log(result)
                this.setState({
                    post: result.data
                })
            })
    }
    handleRemove = (data) => {
        console.log(data)

        axios.delete(`http://localhost:3009/posts/${data}`)
            .then(res => {
                console.log(res)
                this.getPostAPI()
            })

    }
    handleFormChangeClear = () => {
        let formBlogPostNew = { ...this.state.formBlogPost };
        formBlogPostNew['id'] = '';
        formBlogPostNew['userId'] = '';
        formBlogPostNew['title'] = '';
        formBlogPostNew['body'] = '';

        this.setState({
            formBlogPost: formBlogPostNew,
            isUpdate: false
        }, () => { })
        this.getPostAPI()
    }

    render() {
        return (
            <Fragment>
                <div className="container" style={{ marginTop: '20px' }}>
                    <div className="card">
                        <div className="card-header" style={{ display: 'flex' }}>
                            <span style={{ flex: '1' }}>Inpu Data Post</span>
                            <span style={{ flex: '1', textAlign: 'right', color: 'blue', fontWeight: 'bold' }} className="text"><a style={{ textDecoration: 'none', fontSize: '20px' }} href="#">X</a></span>
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input
                                    onChange={this.handleFormChange}
                                    type="text"
                                    name="title"
                                    className="form-control"
                                    id="title"
                                    value={this.state.formBlogPost.title}
                                    placeholder="type title here . . ."
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="body" className="form-label">Description</label>
                                <textarea
                                    onChange={this.handleFormChange}
                                    className="form-control"
                                    name="body"
                                    id="body"
                                    value={this.state.formBlogPost.body}
                                    placeholder="type description here . . ." rows={3}
                                />
                            </div>

                            {/* <button onClick={this.handleSubmit} className="btn btn-primary">Add</button> */}
                            {/* {
                                this.state.isUpdate
                                    ? <button className='btn btn-success' onClick={this.handleSubmit}>Update</button>
                                    : <button className='btn btn-primary' onClick={this.handleSubmit}>Save</button>
                            } */}
                            <button onClick={this.handleSubmit} className="btn btn-primary">
                                {this.state.isUpdate ? 'Update' : 'Save'}
                            </button>
                        </div>
                    </div>
                </div>


                <div
                    className="container"
                    style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    {
                        this.state.post.map((post, index) => {
                            return (
                                <Post key={index} data={post} remove={this.handleRemove} update={this.handleEdit} />

                            )
                        })
                    }
                </div>


            </Fragment>
        );
    }
}

export default BlogPost;
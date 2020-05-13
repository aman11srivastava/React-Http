import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             errorMsg: " "
        }
    }
    
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            console.log(response)
            this.setState({
                posts: response.data
            })
        })
        .catch(error => {
            console.log(error)
            this.setState({
                errorMsg: "Error retreiving the data"
            })
        })
    }

    render() {
        const {posts, errorMsg}=this.state
        return (
            <div>
                <h1>Lists of Posts</h1>
                <h3>Title  User Id  Id</h3>                
                {
                    (posts.length>0) ?
                posts.map(post => <div key={post.id}>{post.title} {post.userId} {post.id}</div>) :
                    null
                }

                {
                    (errorMsg) ? <h1>{errorMsg}</h1> : null
                }
            </div>
        )
    }
}

export default PostList

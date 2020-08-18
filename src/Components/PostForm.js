import React, { useState } from 'react'

const PostForm = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const titleOnChange = (e) => {
        setTitle(e.target.value)
    }

    const bodyOnChange = (e) => {
        setBody(e.target.value)
    }

    const formSubmit = (e) => {
        e.preventDefault();

        let post = {
            title: title,
            body: body
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
            .then(data => console.log(data))

        setBody('');
        setTitle('');
    }

    return (
        <div className="postForm">
            <form onSubmit={formSubmit}>
                <div className="input-group">
                    <label>Title:</label>
                    <input type="text" name="title" value={title} onChange={titleOnChange} />
                </div>
                <div className="textarea-group">
                    <label>Body:</label>
                    <textarea type="text" name="body" value={body} onChange={bodyOnChange} />
                </div>
                <div className="button-wrapp">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default PostForm;

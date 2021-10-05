import React from 'react'

const Post = (props) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="card" style={{ width: '420px', marginTop: '10px', borderRadius: '20px', padding: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ flex: '1', padding: '10px' }}>
                        <img src="https://placeimg.com/50/75/tech" className="card-img-top" style={{ borderRadius: '10px' }} alt="..." />
                    </div>

                    <div style={{ flex: '2', padding: '10px' }}>
                        <h5
                            style={{
                                display: '-webkit-box',
                                WebkitLineClamp: '2',
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                            className="card-title">{props.data.title}</h5>

                        <p
                            style={{
                                display: '-webkit-box',
                                WebkitLineClamp: '3',
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                            className="card-text">{props.data.body}</p>
                        <button className="btn btn-danger" onClick={() => props.remove(props.data.id)}>Delete</button> {` `}
                        <button className="btn btn-success" onClick={() => props.update(props.data)}>Edit</button>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Post
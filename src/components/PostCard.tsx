
const PostCard = ({ post }: { post: Post }) => {


    return (
        <div className="">
            <h1>{post.id} and {post.userId} </h1>
            <h1>{post.title}</h1>
            <h3>{post.body}</h3>
        </div>
    )
}

// export default postCard
export default PostCard
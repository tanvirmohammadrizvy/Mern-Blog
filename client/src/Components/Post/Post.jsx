import './Post.css'

export default function post() {
    return (
        <div className="post">
            <img className="postImg" src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet. 
                </span>
                <hr/>
                <spna className="postDate">
                    1 hour ago
                </spna>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, neque nobis eligendi ea sit quaerat architecto suscipit, officia numquam natus esse dolore porro deleniti quisquam libero voluptate similique saepe distinctio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, neque nobis eligendi ea sit quaerat architecto suscipit, officia numquam natus esse dolore porro deleniti quisquam libero voluptate similique saepe distinctio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, neque nobis eligendi ea sit quaerat architecto suscipit, officia numquam natus esse dolore porro deleniti quisquam libero voluptate similique saepe distinctio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, neque nobis eligendi ea sit quaerat architecto suscipit, officia numquam natus esse dolore porro deleniti quisquam libero voluptate similique saepe distinctio.
            </p>
        </div>
    )
}

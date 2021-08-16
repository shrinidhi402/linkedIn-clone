import { Avatar } from '@material-ui/core'
import React ,{forwardRef} from 'react'
import InputOptions from './InputOptions'
import './Posts.css'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

const Posts = forwardRef(({name,description,message,photoUrl} , ref) => {
    return (
        <div ref={ref}className="posts">
            <div className="post__header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
           <div className="post__body">
               <p>{message}</p>
           </div>
           <dic className="post__buttons">
               <InputOptions Icon={ThumbUpOutlinedIcon} title="Like"  color="gray"/>
               <InputOptions Icon={ChatOutlinedIcon} title="Chat" color="gray" />
               <InputOptions Icon={ShareOutlinedIcon} title="Share" color="gray"/>
               <InputOptions Icon={SendOutlinedIcon} title="Send" color="gray" />
           </dic>
        </div>
    )
})

export default Posts

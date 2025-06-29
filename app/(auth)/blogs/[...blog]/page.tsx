
import axios from "axios";

async function getBlog(blogid: any){
        const response:any = await axios.get(`https://jsonplaceholder.typicode.com/posts/${blogid}`)

        return response.data.body;
    }

export default async function Blog({params}: any){

    const blogid = (params).blog;


    return(
        <div>
            {JSON.stringify(blogid)}
        </div>
    )
}
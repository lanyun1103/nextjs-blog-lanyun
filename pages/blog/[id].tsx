import { useRouter } from 'next/router'

function Post() {
  const router = useRouter()
  const { id } = router.query
  const clickButton = () => {
    console.log('hi')
  }
  return <div>Post: {id} <button onClick={clickButton}>hi</button></div>
}

export default Post;

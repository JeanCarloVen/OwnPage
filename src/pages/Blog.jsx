const Blog = () => {
  return (
    <>
        <div className="p-5">            
            <div className="flex flex-auto text-orange-400 justify-center">
                <h1 className="font-bold text-2xl">Blog</h1>
            </div>
            
            <script src="//rss.bloople.net/?url=https%3A%2F%2Fjeancarloven.wordpress.com%2Ffeed&detail=10&showempty=true&striphtml=true&type=js"></script>

        </div>
    </>
    
  )
}

export default Blog
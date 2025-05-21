import React, { useEffect, useState, Suspense, useState as useReactState } from 'react';

const Blogs = () => {
    const [allBlogs, setAllBlogs] = useState([]);
    const [isLoading, setIsLoading] = useReactState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false); 
        }, 800);
        fetch("blog.json")
            .then(res => res.json())
            .then(data => {
                setAllBlogs(data);
            });

        return () => clearTimeout(timer); 
    }, []);

    if (isLoading || allBlogs.length === 0) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-dots loading-xl"></span>
            </div>
        ); 
    }

    return (
        <div className="px-30">
            <h1 className="text-4xl font-bold mb-6 text-center">All Blogs</h1>
            {allBlogs.map((blog, index) => (
                <div key={index} className="p-6 rounded-lg transition">
                    <div className="collapse collapse-plus border border-base-300">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">{blog.question}</div>
                        <div className="collapse-content text-sm">{blog.answer}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const BlogsWithFallback = () => (
    <Suspense fallback={<div className="flex justify-center items-center"><span className="loading loading-dots loading-xl"></span></div>}>
        <Blogs />
    </Suspense>
);

export default BlogsWithFallback;

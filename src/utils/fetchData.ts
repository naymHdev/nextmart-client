/* eslint-disable @typescript-eslint/no-explicit-any */

export const fetchData = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T | null> => {
  try {
    const API_URL = "http://localhost:5000/apiv1";

    const response = await fetch(`${API_URL}${endpoint}`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return (await response.json()) as T;
  } catch (error: any) {
    console.error("Fetch error:", error.message);
    return null;
  }
};

// +===============================================================

/* 
  import { fetchData } from "@/utils/fetchData";
  
  const getBlogs = async () => {
    const blogs = await fetchData("/api/blog");
    console.log("Blogs:", blogs);
    return blogs;
  };
  
  
  const createBlog = async (blogData: { title: string; content: string }) => {
    const response = await fetchData("/api/blog", {
      method: "POST",
      body: JSON.stringify(blogData),
    });
  
    if (response) {
      console.log("Blog created successfully:", response);
    } else {
      console.error("Failed to create blog.");
    }
  };
  
  
  const updateBlog = async (id: string, blogData: { title: string; content: string }) => {
    const response = await fetchData(`/api/blog/${id}`, {
      method: "PUT",
      body: JSON.stringify(blogData),
    });
  
    if (response) {
      console.log("Blog updated successfully:", response);
    } else {
      console.error("Failed to update blog.");
    }
  };
  
  
  const deleteBlog = async (id: string) => {
    const response = await fetchData(`/api/blog/${id}`, { method: "DELETE" });
  
    if (response) {
      console.log("Blog deleted successfully");
    } else {
      console.error("Failed to delete blog.");
    }
  };
  
  */

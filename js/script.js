
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const passwords = registerForm.querySelectorAll(
            'input[type="password"]'
        );

        if (passwords[0].value !== passwords[1].value) {
            alert("Passwords do not match!");
            return;
        }

        alert("Registration form submitted successfully!");

        registerForm.reset();
    });
}


const blogList = document.getElementById("blogList");

if (blogList) {
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

    document.getElementById("totalBlogs").textContent = blogs.length;
    document.getElementById("publishedBlogs").textContent = blogs.length;

    blogList.innerHTML = "";

    if (blogs.length === 0) {
        blogList.textContent = "No blogs published yet.";
    } else {
        blogs.forEach(function(blog) {
            const card = document.createElement("div");

            const title = document.createElement("h3");
            title.textContent = blog.title;

            const category = document.createElement("p");
            category.textContent = "Category: " + blog.category;

            const content = document.createElement("p");
            content.textContent = blog.content;

            card.appendChild(title);
            card.appendChild(category);
            card.appendChild(content);

            blogList.appendChild(card);
        });
    }
}

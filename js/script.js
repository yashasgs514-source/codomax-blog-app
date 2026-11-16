
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

        alert("Registration successful!");
        registerForm.reset();
    });
}


// DISPLAY, EDIT AND DELETE BLOGS

const blogList = document.getElementById("blogList");

function renderBlogs() {
    if (!blogList) return;

    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

    document.getElementById("totalBlogs").textContent = blogs.length;
    document.getElementById("publishedBlogs").textContent = blogs.length;

    blogList.innerHTML = "";

    if (blogs.length === 0) {
        blogList.textContent = "No blogs published yet.";
        return;
    }

    blogs.forEach(function(blog, index) {
        const card = document.createElement("div");

        card.style.background = "white";
        card.style.padding = "20px";
        card.style.margin = "15px 0";
        card.style.borderRadius = "10px";

        const title = document.createElement("h3");
        title.textContent = blog.title;

        const category = document.createElement("p");
        category.textContent = "Category: " + blog.category;

        const content = document.createElement("p");
        content.textContent = blog.content;

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.style.margin = "10px";

        editBtn.onclick = function() {
            const newTitle = prompt("Enter new title:", blog.title);

            if (newTitle === null || newTitle.trim() === "") return;

            const newContent = prompt("Enter new content:", blog.content);

            if (newContent === null || newContent.trim() === "") return;

            blogs[index].title = newTitle.trim();
            blogs[index].content = newContent.trim();

            localStorage.setItem("blogs", JSON.stringify(blogs));

            renderBlogs();
            alert("Blog updated successfully!");
        };

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.style.background = "red";

        deleteBtn.onclick = function() {
            if (confirm("Do you want to delete this blog?")) {
                blogs.splice(index, 1);

                localStorage.setItem("blogs", JSON.stringify(blogs));

                renderBlogs();
                alert("Blog deleted successfully!");
            }
        };

        card.appendChild(title);
        card.appendChild(category);
        card.appendChild(content);
        card.appendChild(editBtn);
        card.appendChild(deleteBtn);

        blogList.appendChild(card);
    });
}

renderBlogs();

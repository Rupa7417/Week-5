document.addEventListener('DOMContentLoaded', () => {
    // Sample blog posts data
    const blogPosts = [
        { id: 1, title: 'Post 1', summary: 'This is the summary of post 1.' },
        { id: 2, title: 'Post 2', summary: 'This is the summary of post 2.' },
        { id: 3, title: 'Post 3', summary: 'This is the summary of post 3.' },
        { id: 4, title: 'Post 4', summary: 'This is the summary of post 4.' },
        { id: 5, title: 'Post 5', summary: 'This is the summary of post 5.' },
        { id: 6, title: 'Post 6', summary: 'This is the summary of post 6.' },
        { id: 7, title: 'Post 7', summary: 'This is the summary of post 7.' },
        { id: 8, title: 'Post 8', summary: 'This is the summary of post 8.' },
        { id: 9, title: 'Post 9', summary: 'This is the summary of post 9.' },
    ];

    const postsPerPage = 3;
    let currentPage = 1;

    function renderPosts(page) {
        const start = (page - 1) * postsPerPage;
        const end = start + postsPerPage;
        const postsToShow = blogPosts.slice(start, end);

        const blogPostsContainer = document.getElementById('blogPosts');
        blogPostsContainer.innerHTML = '';

        postsToShow.forEach(post => {
            const postCard = document.createElement('div');
            postCard.className = 'post-card';
            postCard.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.summary}</p>
                <a href="post.html?id=${post.id}">Read More</a>
            `;
            blogPostsContainer.appendChild(postCard);
        });
    }

    function renderPagination() {
        const totalPages = Math.ceil(blogPosts.length / postsPerPage);
        const paginationContainer = document.getElementById('pagination');
        paginationContainer.innerHTML = '';

        const prevButton = document.createElement('button');
        prevButton.textContent = 'Previous';
        prevButton.disabled = currentPage === 1;
        prevButton.classList.toggle('disabled', currentPage === 1);
        prevButton.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderPosts(currentPage);
                renderPagination();
            }
        });
        paginationContainer.appendChild(prevButton);

        const nextButton = document.createElement('button');
        nextButton.textContent = 'Next';
        nextButton.disabled = currentPage === totalPages;
        nextButton.classList.toggle('disabled', currentPage === totalPages);
        nextButton.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderPosts(currentPage);
                renderPagination();
            }
        });
        paginationContainer.appendChild(nextButton);
    }

    renderPosts(currentPage);
    renderPagination();
});

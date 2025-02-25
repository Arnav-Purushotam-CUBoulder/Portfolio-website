// Portfolio Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const projects = document.querySelectorAll('.portfolio-project');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const paginationDots = document.querySelectorAll('.pagination-dot');
    
    let currentIndex = 0;
    let filteredProjects = [...projects];
    
    // Initialize: show the first project without animation
    showProject();
    
    // Filter buttons
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const filter = this.getAttribute('data-filter');
        
        // Filter projects
        if (filter === 'all') {
          filteredProjects = [...projects];
        } else {
          filteredProjects = [...projects].filter(project => 
            project.getAttribute('data-category') === filter
          );
        }
        
        // Reset and update display
        currentIndex = 0;
        showProject();
        updatePagination();
      });
    });
    
    // Navigation buttons
    nextBtn.addEventListener('click', function() {
      if (filteredProjects.length === 0) return;
      const newIndex = (currentIndex + 1) % filteredProjects.length;
      showProject(newIndex, 'next');
    });
    
    prevBtn.addEventListener('click', function() {
      if (filteredProjects.length === 0) return;
      const newIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
      showProject(newIndex, 'prev');
    });
    
    // Pagination dots
    paginationDots.forEach(dot => {
      dot.addEventListener('click', function() {
        const index = parseInt(this.getAttribute('data-index'));
        if (index < filteredProjects.length && index !== currentIndex) {
          // Determine direction based on relative index
          const direction = (index > currentIndex) ? 'next' : 'prev';
          showProject(index, direction);
        }
      });
    });
    
    // Helper function to display a project with smooth slide animation.
    // If no newIndex is passed, simply show the current project.
    function showProject(newIndex, direction) {
      if (newIndex === undefined) {
        filteredProjects[currentIndex].classList.add('active');
        filteredProjects[currentIndex].style.transform = "translateX(0)";
        filteredProjects[currentIndex].style.opacity = "1";
        updatePagination();
        return;
      }
      
      const currentProject = filteredProjects[currentIndex];
      const nextProject = filteredProjects[newIndex];
      if (!currentProject || !nextProject) return;
      
      // Animate the current project out.
      if (direction === 'next') {
        currentProject.style.transform = "translateX(-100%)"; // Slide out to the left
      } else if (direction === 'prev') {
        currentProject.style.transform = "translateX(100%)"; // Slide out to the right
      }
      currentProject.style.opacity = "0";
      
      // After the transition, remove the active class from the current project
      // and animate the next project in.
      setTimeout(() => {
        currentProject.classList.remove('active');
        
        // Set starting position for the incoming project based on direction.
        if (direction === 'next') {
          nextProject.style.transform = "translateX(100%)"; // Start off-screen right
        } else if (direction === 'prev') {
          nextProject.style.transform = "translateX(-100%)"; // Start off-screen left
        }
        nextProject.style.opacity = "0";
        
        // Force reflow to ensure the starting position is applied.
        nextProject.offsetWidth;
        
        // Animate the next project into view.
        nextProject.classList.add('active');
        nextProject.style.transform = "translateX(0)";
        nextProject.style.opacity = "1";
        
        // Update the current index and pagination.
        currentIndex = newIndex;
        updatePagination();
      }, 600); // Delay should match the CSS transition duration (0.6s)
    }
    
    function updatePagination() {
      // Update pagination dots visibility and active state.
      paginationDots.forEach((dot, index) => {
        dot.style.display = index < filteredProjects.length ? 'block' : 'none';
        if (index === currentIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
  });
  
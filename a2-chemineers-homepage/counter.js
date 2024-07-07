document.addEventListener("DOMContentLoaded", function() {
    let counter = document.getElementById('counter');
    let counting = false;

    function startCounting() {
      if (!counting) {
        counting = true;
        let count = 0;
        const scrollListener = () => {
          if (window.scrollY >= 100 && count === 0) { // Change 100 to the scroll position you prefer
            countUp();
            window.removeEventListener('scroll', scrollListener);
          }
        };
        window.addEventListener('scroll', scrollListener);
        
        function countUp() {
          counter.style.opacity = '1';
          const interval = setInterval(() => {
            counter.textContent = count++;
            if (count > 100) { // Change 100 to the number you want to count up to
              clearInterval(interval);
              counting = false;
            }
          }, 20);
        }
      }
    }

    startCounting();
  });
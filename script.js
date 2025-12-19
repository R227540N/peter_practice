let images = [
  {
    src: "images/familia.jpg",
    caption: "Family Reunion 2025",
    story: "This moment captures our family united in 2025, grateful for life, health, and togetherness. It reminds us that no matter where we go, family remains our strongest foundation."
  },
  {
    src: "images/uz_event.jpg",
    caption: "University of Zimbabwe Event",
    story: "A memorable academic gathering at the University of Zimbabwe in 2025. Events like these reflect growth, learning, and the importance of mentorship and networking."
  },
  {
    src: "images/peter_n_shushue.jpg",
    caption: "A Special Friendship",
    story: "A joyful moment shared between Peter Name and Shumirai Shiriyapinda, highlighting companionship, support, and the value of meaningful relationships in our journey."
  },
  {
    src: "images/tanaka_n_mai_shami.jpg",
    caption: "Celebrating Togetherness",
    story: "A beautiful snapshot of friendship and unity, reminding us that shared moments and laughter create memories that last a lifetime."
  },
  {
    src: "images/frend.jpg",
    caption: "Elegance and Confidence",
    story: "This photo reflects confidence, elegance, and self-expression — a reminder that how we carry ourselves speaks volumes about who we are."
  }
];

let index = 0;

const sliderImage = document.getElementById("slider-image");
const caption = document.getElementById("caption");
const storyText = document.getElementById("story-text");

function showImage(i) {
  sliderImage.src = images[i].src;
  caption.textContent = images[i].caption;
  storyText.textContent = images[i].story;
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage(index);
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  showImage(index);
}

showImage(index);

/* Auto change every 5 seconds */
setInterval(nextImage, 5000);

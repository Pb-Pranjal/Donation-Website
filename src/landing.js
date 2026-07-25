import React from "react";
import "./landing.css";

const App = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <img src="/new.png" alt="Bridge the Gap Logo" />
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="./requestlist">Donate</a>
          <a href="./contactus">Contact</a>
          <a href="./aboutus">About</a>
        </nav>
      </header>

      <section className="hero">
        <h2>Turn your used items into someone’s treasure</h2>
        <img src="/image1.png" alt="Hero" />
        <a href="./getstarted">
          <button className="get-started-btn">Get Started</button>
        </a>
      </section>

      <section className="what-we-do">
        <h3>What do we do?</h3>
        <p>Connect donors with individuals and NGOs in need effortlessly</p>
        <div className="features">
          <div className="feature">
            <a href="./requestlist">
              <img
                src="https://i.pinimg.com/736x/17/75/ee/1775ee2493c6645525d1ed3d8b746e9d.jpg"
                alt="Donate Icon"
              />
              <p>Donate items easily</p>
            </a>
          </div>
          <div className="feature">
            <a href="./requestform">
              <img
                src="https://cdn.sanity.io/images/81k3cw4t/production/41b4131f684dcb3ac5382518e99d7fa15dbf6444-2626x1606.png"
                alt="Search Icon"
              />
              <p>Find matching NGOs</p>
            </a>
          </div>
          <div className="feature">
            <a href="./aboutus">
              <img
                src="https://i.pinimg.com/236x/82/3b/1d/823b1d14c9c664c20afe474b378b19a7.jpg"
                alt="Lightbulb Icon"
              />
              <p>Make a difference</p>
            </a>
          </div>
        </div>
      </section>

      <section className="container">
        <h1>Stories of Receiver</h1>
        <div className="grid">
          <div className="card">
            <div className="icon">👩</div>
            <h2>A New Beginning for Asha's Baby</h2>
            <p>
              <strong>Asha's Story:</strong> Asha, a single mother, was
              struggling to care for her newborn after losing her job. She
              needed basic baby supplies but couldn't afford them. Through the
              platform, she connected with a kind donor who provided a baby
              stroller, clothes, and toys.
            </p>
            <p>
              <strong>Her Regards:</strong> Thanks to this platform, my baby has
              everything she needs to be comfortable. It feels like a blessing!
            </p>
            <p className="name">- Asha</p>
          </div>
          <div className="card">
            <div className="icon">🏫</div>
            <h2>Education Unlocked for the Children of Hope Academy</h2>
            <p>
              <strong>Hope Academy's Story:</strong> A small NGO, Hope Academy,
              supports underprivileged children by providing education. They
              needed books and stationery for their 50 students. Within days,
              multiple donors came forward to meet their request.
            </p>
            <p>
              <strong>Their Regards:</strong> The kids now have the resources to
              study and dream big. We're so grateful to everyone who helped!
            </p>
            <p className="name">- Hope Academy Founder</p>
          </div>
          <div className="card">
            <div className="icon">🧑‍🔧</div>
            <h2>Warm Winters for Ravi and His Family</h2>
            <p>
              <strong>Ravi's Story:</strong> Ravi, a daily wage worker,
              struggled to keep his family warm during the harsh winter. His
              request for blankets and warm clothes was fulfilled by a generous
              donor, ensuring his family's safety.
            </p>
            <p>
              <strong>His Regards:</strong> The winters are now bearable for my
              family. Thank you for being our guardian angel.
            </p>
            <p className="name">- Ravi</p>
          </div>
        </div>
      </section>

      <section className="container">
        <h1>Why Choose Us?</h1>
        <div className="grid">
          <div className="column">
            <div className="card">
              <img
                src="https://5.imimg.com/data5/GD/SE/GLADMIN-19185922/mobile-app-development-250x250.jpg"
                alt="Easy-to-Use Platform"
              />
              <h2>Easy-to-Use Platform</h2>
              <p>
                "Donating has never been simpler! Our user-friendly interface
                allows you to list items and connect with recipients in just a
                few clicks."
              </p>
            </div>
            <div className="card">
              <img
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSqcVS_XoIyB5u3AONf3KiK7asYbK2gCK67Imi-yAUeG-LqpOSU"
                alt="Secure and Transparent Process"
              />
              <h2>Secure and Transparent Process</h2>
              <p>
                "We prioritize trust and transparency. Track your donations from
                start to finish and rest assured your items reach those in
                need."
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img
                src="https://publicdomainvectors.org/tn_img/affiliate-business.webp"
                alt="Direct Impact"
              />
              <h2>Direct Impact</h2>
              <p>
                "Choose exactly who receives your donations, whether it's
                individuals or trusted NGOs, ensuring your generosity makes a
                real difference."
              </p>
            </div>
            <div className="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7929R5EnIteMf693t8wa45VhWi0oQrvUOHdAk_YLoPwyI8iOe"
                alt="Eco-Friendly and Community Driven"
              />
              <h2>Eco-Friendly and Community Driven</h2>
              <p>
                "Reduce waste by reusing items and join a growing community of
                change-makers passionate about sustainability and social
                impact."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h1>Start Donating Today and Change Lives</h1>
          <div className="donation-options">
            <div className="donation-option">
              <a href="./requestlist">
                <img
                  src="https://media.istockphoto.com/id/1223169200/vector/food-and-grocery-donation.jpg?s=612x612&w=0&k=20&c=0fv8hwXeS9RCL-ewqkr2oyi0Nu8jAQxGtroS0XA9nsQ="
                  alt="Food"
                />
                <p>Food</p>
              </a>
            </div>
            <div className="donation-option">
              <a href="./requestlist">
                <img
                  src="https://media.istockphoto.com/id/886006886/vector/hands-puting-coins-into-donation-box-donate-money-charity-concept.jpg?s=612x612&w=0&k=20&c=f-PuFHdkS94bG2wvFueAKmFfd9_ZuCI_ky8Q18ogsqs="
                  alt="Money"
                />
                <p>Money</p>
              </a>
            </div>
            <div className="donation-option">
              <a href="./requestlist">
                <img
                  src="https://img.freepik.com/free-vector/hand-drawn-clothing-donation-illustration_23-2148814803.jpg"
                  alt="Clothes"
                />
                <p>Clothes</p>
              </a>
            </div>
            <div className="donation-option">
              <a href="./requestlist">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/001/879/882/non_2x/donation-and-charity-concept-free-vector.jpg"
                  alt="Other"
                />
                <p>Other</p>
              </a>
            </div>
          </div>

          <button
            className="get-started-btn"
            onClick={() => (window.location.href = "./getstarted")}
          >
            Get Started
          </button>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Bridge the Gap. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

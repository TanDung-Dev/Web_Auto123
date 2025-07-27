import React from "react";
import "../styles/HeroSection.css";
import carImg from "../assets/img/anh_oto_porscher.png";
import carImg from "../../../assets/images/anh_oto_porscher.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Ảnh nền */}
      <div className="hero-background"></div>

      {/* Nội dung chính chia 2 cột */}
      <div className="hero-main">
        <div className="hero-left">
          <h1 className="main-title">AUTO123</h1>
          <div className="main-slogan">Lựa chọn thông minh cho xế cưng</div>
          <div className="intro-box">
            <div className="intro-content-with-line">
              <h2>AUTO123</h2>
              <p>
                AUTO123 là đơn vị chuyên cung cấp các dịch vụ chăm sóc và bảo vệ xe hơi chất lượng cao, bao gồm vệ sinh xe, dán PPF bảo vệ sơn, phủ nano chống bám bẩn, và phủ giảm chống rỉ sét ngoài ra còn có các đồ chơi xe phù hợp với mọi xế cưng. Với đội ngũ chuyên nghiệp và công nghệ hiện đại, AUTO123 đảm bảo mang đến sự bảo vệ toàn diện và bền vững cho xế cưng của bạn.
              </p>
            </div>
            <div className="intro-socials">
              <button className="social-btn">Zalo</button>
              <button className="social-btn"><i className="fab fa-tiktok"></i></button>
              <button className="social-btn"><i className="fab fa-youtube"></i></button>
              <button className="social-btn"><i className="fab fa-facebook-messenger"></i></button>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="car-image-container">
            <img src={carImg} alt="Car" className="car-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

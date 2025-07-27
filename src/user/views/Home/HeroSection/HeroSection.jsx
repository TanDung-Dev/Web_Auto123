import React from "react";
import carImg from "../../../assets/images/anh_oto_porscher.png";
import bgImg from "../../../assets/images/background.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen h-[100vh] flex items-stretch overflow-hidden w-full">
      {/* Ảnh nền chính */}
      <div
        className="absolute inset-0 w-full h-full z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImg})`,
          filter: "brightness(0.85)",
        }}
      ></div>
      {/* Lớp overlay động (nếu muốn hiệu ứng màu động) */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none animate-[motionBlur_20s_ease-in-out_infinite] bg-black/20"></div>

      {/* Nội dung chính */}
      <div className="relative z-10 flex w-full h-full gap-6 lg:gap-10 items-center justify-between max-[1024px]:flex-col max-[1024px]:gap-8">
        {/* Cột trái */}
        <div className="relative flex flex-col items-start justify-center flex-1 max-w-[600px] text-white z-10 max-[1024px]:items-center max-[1024px]:text-center max-[1024px]:mx-auto max-[1024px]:max-w-full px-4 sm:px-6 lg:px-8 xl:px-10">
          <h1 className="text-[4rem] font-black uppercase tracking-wider leading-none mb-2 font-montserrat drop-shadow-lg max-[1200px]:text-3xl max-[900px]:text-2xl max-[480px]:text-xl">
            AUTO123
          </h1>
          <div className="text-[1.2rem] text-red-600 font-semibold mb-7 uppercase tracking-wide font-montserrat max-[900px]:text-base max-[480px]:text-sm">
            Lựa chọn thông minh cho xế cưng
          </div>
          <div className="intro-box relative text-white max-w-[450px] mt-0 mb-0 bg-none border-none shadow-none z-10 p-0 max-[1024px]:max-w-full">
            <div className="relative pl-10 text-left before:content-[''] before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-red-600 before:rounded-none max-[1024px]:pl-0 max-[1024px]:text-center">
              <h2 className="text-[2.5rem] font-black uppercase mb-5 font-montserrat tracking-wider text-left max-[900px]:text-2xl max-[480px]:text-lg max-[1024px]:text-center">
                AUTO123
              </h2>
              <p className="text-base leading-7 mb-6 text-white font-normal text-left max-[900px]:text-sm max-[480px]:text-xs max-[1024px]:text-center">
                AUTO123 là đơn vị chuyên cung cấp các dịch vụ chăm sóc và bảo vệ
                xe hơi chất lượng cao, bao gồm vệ sinh xe, dán PPF bảo vệ sơn,
                phủ nano chống bám bẩn, và phủ giảm chống rỉ sét ngoài ra còn có
                các đồ chơi xe phù hợp với mọi xế cưng. Với đội ngũ chuyên
                nghiệp và công nghệ hiện đại, AUTO123 đảm bảo mang đến sự bảo vệ
                toàn diện và bền vững cho xế cưng của bạn.
              </p>
            </div>
            <div className="flex gap-6 mt-6 ml-10 max-[1024px]:justify-center max-[1024px]:ml-0 max-[480px]:gap-4">
              <button className="w-[50px] h-[50px] bg-[rgba(26,26,26,0.8)] border border-white/20 rounded-lg flex items-center justify-center transition-all cursor-pointer backdrop-blur hover:bg-red-100/20 hover:border-red-600 hover:-translate-y-1 hover:shadow-lg max-[480px]:w-[40px] max-[480px]:h-[40px]">
                Zalo
              </button>
              <button className="w-[50px] h-[50px] bg-[rgba(26,26,26,0.8)] border border-white/20 rounded-lg flex items-center justify-center transition-all cursor-pointer backdrop-blur hover:bg-red-100/20 hover:border-red-600 hover:-translate-y-1 hover:shadow-lg max-[480px]:w-[40px] max-[480px]:h-[40px]">
                <i className="fab fa-tiktok"></i>
              </button>
              <button className="w-[50px] h-[50px] bg-[rgba(26,26,26,0.8)] border border-white/20 rounded-lg flex items-center justify-center transition-all cursor-pointer backdrop-blur hover:bg-red-100/20 hover:border-red-600 hover:-translate-y-1 hover:shadow-lg max-[480px]:w-[40px] max-[480px]:h-[40px]">
                <i className="fab fa-youtube"></i>
              </button>
              <button className="w-[50px] h-[50px] bg-[rgba(26,26,26,0.8)] border border-white/20 rounded-lg flex items-center justify-center transition-all cursor-pointer backdrop-blur hover:bg-red-100/20 hover:border-red-600 hover:-translate-y-1 hover:shadow-lg max-[480px]:w-[40px] max-[480px]:h-[40px]">
                <i className="fab fa-facebook-messenger"></i>
              </button>
            </div>
          </div>
        </div>
        {/* Cột phải: Xe */}
        <div className="relative flex-1 flex items-end justify-center z-10 mt-24 max-[1024px]:mt-0 max-[1024px]:mt-8 px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="relative w-full h-full flex items-end justify-center">
            <img
              src={carImg}
              alt="Car"
              className="w-full h-auto max-h-[80vh] object-contain drop-shadow-[0_25px_80px_rgba(0,0,0,0.8)] animate-[carMoveFromTitle_2.2s_cubic-bezier(0.22,1,0.36,1)_forwards] max-[1024px]:max-h-[60vh] max-[480px]:max-h-[50vh]"
              style={{
                opacity: 1,
              }}
            />
          </div>
        </div>
      </div>

      {/* Tailwind custom keyframes */}
      <style>{`
        @keyframes motionBlur {
          0%, 100% { transform: translateX(0) scale(1); }
          50% { transform: translateX(-10px) scale(1.02); }
        }
        @keyframes carMoveFromTitle {
          0% {
            opacity: 0;
            transform: translate(-60vw, -10vh) scale(0.1);
          }
          100% {
            opacity: 1;
            transform: translate(-20vw, 0) scale(1); 
            // chỉnh vị trí xe
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

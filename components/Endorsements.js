import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

export default function Endorsements() {
  const endorsements = [
    { name: "John Doe", feedback: "Molly is an outstanding engineer!" },
    { name: "Jane Smith", feedback: "Working with Molly was a pleasure, very skilled!" },
    { name: "Alan Turing", feedback: "A natural problem-solver and creative thinker." },
  ]

  return (
    <section id="endorsements" className="endorsements section">
      <h2>Endorsements</h2>
      <Swiper
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {endorsements.map((endorsement, index) => (
          <SwiperSlide key={index}>
            <div className="endorsement-card">
              <p>&quot;{endorsement.feedback}&quot;</p>
              <h4>- {endorsement.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
